import re
import json

with open("pdf_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Define chapter headings we found
chapters_meta = [
    {"num": 1, "heading": "# Cutubka 1aad : Waxbarashada caafimaadka"},
    {"num": 2, "heading": "# Cutubka 2aad : Biyaha"},
    {"num": 3, "heading": "# Cutubka 3aad : Habdhiska taranka"},
    {"num": 4, "heading": "# Cutubka 4aad : Dhirta"},
    {"num": 5, "heading": "# Cutubka 5aad : Cimilo gooreed"},
    {"num": 6, "heading": "# Cutubka 6aad : Fududaynta Hawsha"},
    {"num": 7, "heading": "# Cutubka 7aad : Ilayska"},
    {"num": 8, "heading": "# Cutubka 8aad : Dhulka iyo Hawada Sare"},
    {"num": 9, "heading": "# Cutubka 9aad : Tamarta Kulka"},
    {"num": 10, "heading": "# Cutubka 10aad : Deegaanka"},
    {"num": 11, "heading": "# Cutubka 11aad : Danabka iyo Birlabnimada"},
    {"num": 12, "heading": "# Cutubka 12aad : Dhaqashada Xoolaha"},
    {"num": 13, "heading": "# Cutubka 13aad : Walxaha iyo Astaamahooda"},
    {"num": 14, "heading": "# Cutubka 14aad : Habka Cilmibaarista"},
]

# Let's find index of each chapter heading in the text
indices = []
for item in chapters_meta:
    pos = text.find(item["heading"])
    if pos == -1:
        print(f"Warning: could not find {item['heading']}")
    else:
        indices.append((pos, item))

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
    chapter_text = text[start_pos:end_pos]
    chapters_content.append((meta, chapter_text))

# Let's parse each chapter
parsed_chapters = {}

for meta, chap_text in chapters_content:
    chap_num = meta["num"]
    print(f"Parsing Chapter {chap_num}...")
    
    # We want to extract questions of the form "Number. Question" and their answers
    lines = chap_text.split("\n")
    # skip the heading itself
    lines = lines[1:]
    
    questions = []
    current_q = None
    current_a = []
    
    # Regex to match question start: e.g. "1. Waa maxay" or "7-Waa maxay" or "11 . Maraaran"
    q_re = re.compile(r'^\s*(\d+)\s*[.\-]\s*(.*)$')
    
    # Regex to match answer start: e.g. "J- " or "J. " or "j- " or "j. " or "J) "
    a_re = re.compile(r'^\s*[Jj]\s*[\-.)]\s*(.*)$')
    
    for line_idx, line in enumerate(lines):
        clean_line = line.strip()
        if not clean_line:
            continue
            
        # Ignore page header/footer markers if they appear
        if clean_line.startswith("--- PAGE") or re.match(r'^\d+$', clean_line):
            continue
            
        # Check if it starts a new question
        q_match = q_re.match(clean_line)
        if q_match:
            # If we had a previous question, save it
            if current_q is not None:
                questions.append({
                    "num": current_q["num"],
                    "q": current_q["text"].strip(),
                    "a": " ".join(current_a).strip()
                })
            q_num = int(q_match.group(1))
            q_text = q_match.group(2)
            current_q = {"num": q_num, "text": q_text}
            current_a = []
            continue
            
        # Check if it starts an answer
        a_match = a_re.match(clean_line)
        if a_match and current_q is not None:
            a_text = a_match.group(1)
            current_a.append(a_text)
            continue
            
        # Otherwise, append to either current question or current answer
        if current_q is not None:
            if len(current_a) > 0:
                # We are in the answer body
                current_a.append(clean_line)
            else:
                # We are still in the question body
                current_q["text"] += " " + clean_line

    # Add the last question
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

with open("pdf_questions.json", "w", encoding="utf-8") as f:
    json.dump(parsed_chapters, f, indent=2, ensure_ascii=False)

print("Saved pdf_questions.json")
