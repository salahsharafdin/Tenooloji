# Teknoolojiyada Fasalka 8aad - Imtixaan MCQ

Kani waa codsi mareeg (web app) ah oo loogu talagalay ardayda Fasalka 8aad si ay u bartaan una tijaabiyaan aqoontooda maaddada **Teknoolojiyada** (Technology) iyaga oo maraya imtixaanno su'aalo doorasho ah (MCQ). 

Codsigan wuxuu ka kooban yahay cutubyada buugga Teknoolojiyada ee Fasalka 8aad (Cutubka 1aad ilaa 8aad) kuwaas oo loo qaybiyay 4 weji (Phases).

---

## 🌟 Tilmaamaha Muhiimka ah (Features)

- **Wejiyo iyo Cutubyo Go'an (Phase & Chapter Structure)**: Imtixaanku wuxuu u habaysan yahay 4 weji (Phases), mid walbana wuxuu isku darayaa labo cutub oo xiriira si ardayga uusan u wareerin:
  - **Phase 1**: Cutubka 1aad (Teknoolojiyada Tamarta) & Cutubka 2aad (Badqabka iyo Ilaalinta Xogta)
  - **Phase 2**: Cutubka 3aad (Aasaasiyaadka Ms Word 2010) & Cutubka 4aad (Aasaasiyaadka Qoraalka)
  - **Phase 3**: Cutubka 5aad (Kaydinta Dokumentiga) & Cutubka 6aad (Habaynta Muuqaalka Bogga)
  - **Phase 4**: Cutubka 7aad (Daabicidda Dokumentiyada iyo faqreyntooda) & Cutubka 8aad (Diyaarinta Qoraal Taxan)
- **Doorashooyin La Xiriira Su'aasha (Smart Distractors)**: Jawaabaha qaldan ee doorashada (A, B, C, D) waxaa si firfircoon looga soo xulaa isla cutubka ay su'aashu ku jirto. Tani waxay ka dhigaysaa doorashooyinka kuwo macno leh oo adkeynaya in si fudud loo qiyaaso jawaabta saxda ah.
- **Iskudhafka Firfircoon (Dynamic Shuffling)**: Su'aalaha iyo afarta doorasho (Options) waxaa lagu dhex xulaa algorithm-ka caanka ah ee Fisher-Yates Shuffling mar kasta oo uu imtixaanku bilowdo.
- **Kaydinta Horumarka (LocalStorage Progress)**: Haddii ardaygu ka baxo mareegta ama uu refresh gareeyo, wuxuu ka sii wadan karaa halkii uu kaga tagay isaga oo riixaya kaarka **"Sii wad Imtixaanka"**.
- **Badhanka Dib-u-dejiye (Reset Option)**: Haddii ardaygu rabo inuu buriyo horumarkiisii hore oo uu weji cusub ama isla wejigii hore ka bilaabo eber, wuxuu isticmaali karaa badhanka **"Ka bilow bilow (Reset)"** ee ku dhex jira kaarka sii-wadista.
- **Cilad-bixin & Faahfaahin (Wrong Answers Display)**: Dhammaadka imtixaanka, waxaa ardayga loo soo bandhigayaa su'aalihii uu khalday, jawaabtii uu doortay, iyo jawaabta saxda ahayd si uu u barto khaladaadkiisa.
- **Farriimo Dhiirigelin ah**: Dhammaadka imtixaanka ardaygu wuxuu helayaa dhibco boqolley ah iyo farriin ku habboon natiijadiisa oo Af-Somali ah.
- **Naqshad Casri ah (Premium UI/UX)**: Wuxuu ku dhisanyahay qaabka *Glassmorphism* oo leh midabyo indhaha u roon (Dark Theme), Google Font "Outfit", animations fudud, iyo la-qabsi buuxa oo loogu talagalay talefannada gacanta (Fully Responsive Mobile Design).

---

## 🛠️ Tiknoolajiyada La Isticmaalay (Tech Stack)

Codsigan wuxuu ku dhisanyahay si fudud oo aan u baahnayn wax adeege ah (serverless) ama dependency adag:
- **HTML5**: Dhismaha guud ee bogga iyo qaabaynta semantic-ga ah.
- **CSS3**: Naqshad dhalaalaysa, glassmorphic dark theme, animations, iyo responsive styling.
- **JavaScript (ES6+)**: Matoorka su'aalaha, dynamic rendering, Fisher-Yates Shuffling algorithm, iyo maareynta LocalStorage.

---

## 📂 Qaabdhismeedka Faylasha (File Structure)

- **`index.html`** - Dhismaha guud ee UI-ga iyo qaybaha kala duwan ee screens-ka (Phase selection, Quiz screen, Results screen).
- **`index.css`** - Habaynta midabada, layout-ka responsive-ka ah, iyo animations-ka.
- **`app.js`** - Sharciga shaqada ee quiz-ka, doorashada distractors-ka isla cutubka ah, kaydinta/sii-wadista imtixaanka ee LocalStorage, iyo soo bandhigista natiijooyinka.
- **`data.js`** - Keydka xogta su'aalaha iyo jawaabaha oo u habaysan wejiyo iyo cutubyo.
- **`favicon.png`** - Astaanta tab-ka ee browser-ka (Favicon).

---

## 🚀 Sida Loo Adeegsado (How to Run)

Maadaama uu yahay codsi ku shaqeeya static files, uma baahnid inaad wax ku rakibto kumbuyuutarkaaga:
1. Soo degso dhammaan faylasha mashruuca.
2. Labo jeer guji faylka **`index.html`** si aad ugu furto browser kasta (Chrome, Edge, Safari, Firefox).
3. Dooro Phase-ka aad rabto inaad iska tijaabiso oo bilow!