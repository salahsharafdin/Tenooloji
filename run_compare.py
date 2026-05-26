import json
import re
import sys

# Reconfigure stdout just in case
try:
    sys.stdout.reconfigure(encoding='utf-8')
except AttributeError:
    pass

with open("data.json", "r", encoding="utf-8") as f:
    data_js = json.load(f)

with open("pdf_questions_seq.json", "r", encoding="utf-8") as f:
    pdf_data = json.load(f)

# Flatten data_js chapters into a dictionary by chapter index (1-14)
js_chapters = {}
idx = 1
for p in data_js:
    for c in p.get("chapters", []):
        js_chapters[idx] = c
        idx += 1

def clean_text(t):
    if not t:
        return ""
    t = t.lower()
    # Remove bullet points and other common layout artifacts
    t = t.replace("\u00a0", " ")
    t = t.replace("\uf0b7", "")
    t = t.replace("\u2013", "-")
    # Normalize spaces
    t = re.sub(r'\s+', ' ', t)
    # Remove some common punctuation for matching
    t = re.sub(r'[?.!,:;\-()\'"’“”*]', '', t)
    return t.strip()

mismatches = 0
report_lines = []

report_lines.append("# Comparison Report between data.js and PDF")
report_lines.append(f"Loaded {len(js_chapters)} chapters from data.js")
report_lines.append(f"Loaded {len(pdf_data)} chapters from PDF\n")

for ch_idx in range(1, 15):
    js_ch = js_chapters.get(ch_idx)
    pdf_ch = pdf_data.get(str(ch_idx))
    
    if not js_ch or not pdf_ch:
        report_lines.append(f"\n## [Chapter {ch_idx}] ERROR: Missing in JS or PDF")
        continue
        
    js_qs = js_ch.get("questions", [])
    pdf_qs = pdf_ch.get("questions", [])
    
    report_lines.append(f"\n## Chapter {ch_idx}: {js_ch['title']}")
    report_lines.append(f"- **data.js**: {len(js_qs)} questions")
    report_lines.append(f"- **PDF**: {len(pdf_qs)} questions")
    
    if len(js_qs) != len(pdf_qs):
        report_lines.append(f"- **[WARNING] Count mismatch!** JS: {len(js_qs)}, PDF: {len(pdf_qs)}")
        
    max_len = max(len(js_qs), len(pdf_qs))
    for q_i in range(max_len):
        jq = js_qs[q_i] if q_i < len(js_qs) else None
        pq = pdf_qs[q_i] if q_i < len(pdf_qs) else None
        
        if jq and pq:
            jq_clean_q = clean_text(jq["q"])
            pq_clean_q = clean_text(pq["q"])
            
            jq_clean_a = clean_text(jq["a"])
            pq_clean_a = clean_text(pq["a"])
            
            q_diff = jq_clean_q != pq_clean_q
            a_diff = jq_clean_a != pq_clean_a
            
            if q_diff or a_diff:
                mismatches += 1
                report_lines.append(f"\n### Question {q_i+1}:")
                if q_diff:
                    report_lines.append("  - **[Q MISMATCH]**")
                    report_lines.append(f"    - **JS**:  `{jq['q']}`")
                    report_lines.append(f"    - **PDF**: `{pq['q']}`")
                if a_diff:
                    report_lines.append("  - **[A MISMATCH]**")
                    report_lines.append(f"    - **JS**:  `{jq['a']}`")
                    report_lines.append(f"    - **PDF**: `{pq['a']}`")
        elif jq:
            mismatches += 1
            report_lines.append(f"\n### Question {q_i+1}: Only in data.js")
            report_lines.append(f"  - **JS**: `{jq['q']}`")
            report_lines.append(f"  - **JS A**: `{jq['a']}`")
        elif pq:
            mismatches += 1
            report_lines.append(f"\n### Question {q_i+1}: Only in PDF")
            report_lines.append(f"  - **PDF**: `{pq['q']}`")
            report_lines.append(f"  - **PDF A**: `{pq['a']}`")

report_lines.append(f"\n---\n**Total mismatches found**: {mismatches}")

with open("comparison_report.md", "w", encoding="utf-8") as f:
    f.write("\n".join(report_lines))

print(f"Saved comparison_report.md. Total mismatches: {mismatches}")
