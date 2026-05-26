import json

with open("data.json", "r", encoding="utf-8") as f:
    quiz_data = json.load(f)

print(f"Total phases: {len(quiz_data)}")
for p in quiz_data:
    print(f"Phase {p['phase']}: {p['name']}")
    for c in p.get('chapters', []):
        print(f"  Chapter: {c['title']} ({len(c['questions'])} questions)")
