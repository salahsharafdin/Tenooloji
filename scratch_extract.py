import pypdf
import os

pdf_path = "Saynis Su aalo iyo Jawaabo Cutubyada dhan.pdf"
output_path = "pdf_extracted.txt"

if not os.path.exists(pdf_path):
    print(f"Error: {pdf_path} not found.")
    exit(1)

print(f"Reading {pdf_path}...")
reader = pypdf.PdfReader(pdf_path)
print(f"Total pages: {len(reader.pages)}")

text_content = []
for i, page in enumerate(reader.pages):
    print(f"Extracting page {i+1}...")
    text = page.extract_text()
    text_content.append(f"--- PAGE {i+1} ---")
    text_content.append(text)

with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(text_content))

print(f"Extracted text written to {output_path}")
