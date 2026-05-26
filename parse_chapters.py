import re

with open("pdf_extracted.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Let's find lines starting with # or containing Cutub
lines = text.split("\n")
for i, line in enumerate(lines):
    if "cutub" in line.lower() or line.strip().startswith("#"):
        print(f"Line {i+1}: {line}")
