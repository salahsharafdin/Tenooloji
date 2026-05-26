import json
import re
import sys

with open("data.json", "r", encoding="utf-8") as f:
    data_js = json.load(f)

with open("pdf_questions_seq.json", "r", encoding="utf-8") as f:
    pdf_data = json.load(f)

js_chapters = {}
idx = 1
for p in data_js:
    for c in p.get("chapters", []):
        js_chapters[idx] = c
        idx += 1

def clean_for_match(t):
    if not t:
        return ""
    t = t.lower()
    t = t.replace("\u00a0", " ")
    t = t.replace("\uf0b7", "")
    t = t.replace("\u2013", "-")
    t = re.sub(r'[^a-zA-Z0-9\s]', ' ', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

major_mismatches = []

for ch_idx in range(1, 15):
    js_ch = js_chapters.get(ch_idx)
    pdf_ch = pdf_data.get(str(ch_idx))
    
    if not js_ch or not pdf_ch:
        continue
        
    js_qs = js_ch.get("questions", [])
    pdf_qs = pdf_ch.get("questions", [])
    
    max_len = max(len(js_qs), len(pdf_qs))
    for q_i in range(max_len):
        jq = js_qs[q_i] if q_i < len(js_qs) else None
        pq = pdf_qs[q_i] if q_i < len(pdf_qs) else None
        
        if jq and pq:
            jq_q = clean_for_match(jq["q"])
            pq_q = clean_for_match(pq["q"])
            jq_a = clean_for_match(jq["a"])
            pq_a = clean_for_match(pq["a"])
            
            words_jq_q = set(jq_q.split())
            words_pq_q = set(pq_q.split())
            
            words_jq_a = set(jq_a.split())
            words_pq_a = set(pq_a.split())
            
            q_sim = len(words_jq_q & words_pq_q) / max(1, len(words_jq_q | words_pq_q))
            a_sim = len(words_jq_a & words_pq_a) / max(1, len(words_jq_a | words_pq_a))
            
            # If similarity is lower than 0.35, it's a major mismatch
            if q_sim < 0.35 or a_sim < 0.35:
                major_mismatches.append({
                    "chapter": ch_idx,
                    "chap_name": js_ch["title"],
                    "q_num": q_i + 1,
                    "q_sim": q_sim,
                    "a_sim": a_sim,
                    "js_q": jq["q"],
                    "pdf_q": pq["q"],
                    "js_a": jq["a"],
                    "pdf_a": pq["a"]
                })

out_lines = []
out_lines.append(f"Found {len(major_mismatches)} potential major mismatches:\n")

for m in major_mismatches:
    out_lines.append(f"[Chapter {m['chapter']}] Q{m['q_num']} (Q-Sim: {m['q_sim']:.2f}, A-Sim: {m['a_sim']:.2f})")
    out_lines.append(f"  JS Question:  {m['js_q']}")
    out_lines.append(f"  PDF Question: {m['pdf_q']}")
    out_lines.append(f"  JS Answer:    {m['js_a']}")
    out_lines.append(f"  PDF Answer:   {m['pdf_a']}\n")

with open("major_discrepancies.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(out_lines))

print(f"Saved major_discrepancies.txt. Total potential mismatches: {len(major_mismatches)}")
