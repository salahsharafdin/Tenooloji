import re
import json

with open("pdf_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

chapters_meta = [
    {"num": 1, "heading": "# Cutubka 1aad : Waxbarashada caafimaadka", "expected_count": 57, "start_expected": 1},
    {"num": 2, "heading": "# Cutubka 2aad : Biyaha", "expected_count": 22, "start_expected": 1},
    {"num": 3, "heading": "# Cutubka 3aad : Habdhiska taranka", "expected_count": 59, "start_expected": 1},
    {"num": 4, "heading": "# Cutubka 4aad : Dhirta", "expected_count": 24, "start_expected": 1},
    {"num": 5, "heading": "# Cutubka 5aad : Cimilo gooreed", "expected_count": 14, "start_expected": 1},
    {"num": 6, "heading": "# Cutubka 6aad : Fududaynta Hawsha", "expected_count": 26, "start_expected": 1},
    {"num": 7, "heading": "# Cutubka 7aad : Ilayska", "expected_count": 22, "start_expected": 1},
    {"num": 8, "heading": "# Cutubka 8aad : Dhulka iyo Hawada Sare", "expected_count": 13, "start_expected": 1},
    {"num": 9, "heading": "# Cutubka 9aad : Tamarta Kulka", "expected_count": 7, "start_expected": 1},
    {"num": 10, "heading": "# Cutubka 10aad : Deegaanka", "expected_count": 10, "start_expected": 1},
    {"num": 11, "heading": "# Cutubka 11aad : Danabka iyo Birlabnimada", "expected_count": 21, "start_expected": 1},
    {"num": 12, "heading": "# Cutubka 12aad : Dhaqashada Xoolaha", "expected_count": 31, "start_expected": 22}, # Starts at 22!
    {"num": 13, "heading": "# Cutubka 13aad : Walxaha iyo Astaamahooda", "expected_count": 16, "start_expected": 1},
    {"num": 14, "heading": "# Cutubka 14aad : Habka Cilmibaarista", "expected_count": 9, "start_expected": 1},
]

# Segment the text by chapter
# Special case for Chapter 5: it starts before the heading, at "1. Sheeg farqiga u dhaxeeya cimilo iyo cimilo gooreed?"
pos_ch5 = text.find("1. Sheeg farqiga u dhaxeeya cimilo iyo cimilo gooreed?")

indices = []
for item in chapters_meta:
    if item["num"] == 5 and pos_ch5 != -1:
        indices.append((pos_ch5, item))
    else:
        pos = text.find(item["heading"])
        if pos != -1:
            indices.append((pos, item))
        else:
            print(f"Warning: could not find {item['heading']}")

indices.sort()

# Slice text into chapters
chapters_content = []
for i in range(len(indices)):
    start_pos = indices[i][0]
    meta = indices[i][1]
    if i < len(indices) - 1:
        end_pos = indices[i+1][0]
    else:
        end_pos = len(text)
    chapters_content.append((meta, text[start_pos:end_pos]))

parsed_chapters = {}

for meta, chap_text in chapters_content:
    chap_num = meta["num"]
    print(f"Parsing Chapter {chap_num}...")
    
    lines = chap_text.split("\n")
    # if it's chapter 5, don't skip the first line because it is the question itself!
    if chap_num != 5:
        lines = lines[1:]
        
    questions = []
    current_q = None
    current_a = []
    next_expected_num = meta["start_expected"]
    
    for line in lines:
        clean_line = line.strip()
        if not clean_line:
            continue
        if clean_line.startswith("--- PAGE") or re.match(r'^\d+$', clean_line):
            continue
        # Also skip the heading if it appears inside chapter 5 text
        if clean_line == meta["heading"]:
            continue
            
        q_start_pattern = rf'^\s*({next_expected_num})\s*[.\-]\s*(.*)$'
        m = re.match(q_start_pattern, clean_line)
        
        if m:
            if current_q is not None:
                questions.append({
                    "num": current_q["num"],
                    "q": current_q["text"].strip(),
                    "a": " ".join(current_a).strip()
                })
            q_num = int(m.group(1))
            q_text = m.group(2)
            current_q = {"num": q_num, "text": q_text}
            current_a = []
            next_expected_num += 1
            continue
            
        a_match = re.match(r'^\s*[Jj]\s*[\-.)]\s*(.*)$', clean_line)
        if a_match and current_q is not None and len(current_a) == 0:
            current_a.append(a_match.group(1))
            continue
            
        if current_q is not None:
            if len(current_a) > 0:
                current_a.append(clean_line)
            else:
                current_q["text"] += " " + clean_line

    if current_q is not None:
        questions.append({
            "num": current_q["num"],
            "q": current_q["text"].strip(),
            "a": " ".join(current_a).strip()
        })
        
    parsed_chapters[chap_num] = {
        "title": meta["heading"],
        "questions": questions
    }
    print(f"Chapter {chap_num}: parsed {len(questions)} questions (expected {meta['expected_count']})")

with open("pdf_questions_seq.json", "w", encoding="utf-8") as f:
    json.dump(parsed_chapters, f, indent=2, ensure_ascii=False)

print("Saved pdf_questions_seq.json")
