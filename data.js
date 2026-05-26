const quizData = [
  {
    phase: 1,
    name: "Phase 1 (Cutubka 1aad & 2aad)",
    chapters: [
      {
        title: "Cutubka 1aad : Teknoolojiyada Tamarta",
        questions: [
          { q: "Waa maxay Tamar ?", a: "Tamartu waa kartida hawl lagu qabto." },
          { q: "Maxay u baahan tahay hool kasta oo la qabanayo ?", a: "Hawl kasta oo la qabanayo waxa ay u baa han tahay tamar." },
          { q: "Sheeg isha Tamarta ugu weyn dunida ?", a: "Isha tamarta ugu weyn dunida waa qorraxda." },
          { q: "Sheeg guud ahaan tamarta inta loo qeybiyo ?", a: "Guud ahaan tamarta waxaa loo qaybiyaa laba nooc oo kale ah : Tamarta Gurta (Non -Renewable Energy) iyo Tamarta Maaxata(Renewable Energy)." },
          { q: "Sheeg 3 tusaale oo ah tamarta gurta iyo tan maaxda ?", a: "Tamarta gurta : Dhuxusha , Shidaalka , iyo Nukliyeer Tamarta Maaxda : Qoraxda , Dabaysha , iyo Biyaha" },
          { q: "Qor afar nooc oo kamid ah noocyada tamart a ?", a: "Noocyad a tamarta waa : Tamarta biyaha , Tamarta dabeysha , Tamarta shidaalka , Tamarta qoraxda." },
          { q: "Sheeg isha ugu weyn ee tamarta laga helo ?", a: "Qorraxdu waa isha ugu weyn ee bani'aadamku, xayawaanka iyo dhirtu ay ka helaan tamar." },
          { q: "Sheeg Tamarta qoraxda waxa a y kaalinta weyn ka qaadato ?", a: "Tamarta qorraxdu waxa ay kaalin weyn ka qaadataa cunto sameynta dhirta, bixitaanka dalagyada kala duwan, qallajinta maxsuulka beeraha, sameynta cusbada tamarta biyaha iyo tamarta dabaysha." },
          { q: "Sheeg adeegsiga iyo horumarinta teknoolojiyada waxa ay fududeysay ?", a: "Wa xay taraan danab ayey dhaliyaan." },
          { q: "Sheeg ilayska qorraxda waxa loo badalo ?", a: "Ilayska qorraxda waxaa loo beddelaa danab (koronto) ayada oo la adeegsanayo qalabka loo yaqaan soollarka (PHOTOVOLTAIC)." },
          { q: "Sidee ayey reer miyigu ugu faa'i daysaan tamarta qoraxda ?", a: "Waxay ugu faa'ideystaan nalalka iyo jaajareynta moobeelada." },
          { q: "Sidee ayey cimiladu saameyn ugu leedahay tamarta qoraxda ?", a: "Waxa ay adeegsaddan tamarta shidaalka" },
          { q: "Maxay ku kala duwan yihiin tamarta qoraxda iyo tamart a dabeysha ?", a: "Waxay ku kala duwan yihiin: tamarta qoraxda mar -mar ayaa la helaa laakiin tamarta dabeysha mar waliba waa la helaa." },
          { q: "Yaa adeegsan jirey tamarta dabeysha ?", a: "Waxaa adeegsan jirey doomaha shiraacyada iyo ceelasha leh marwaaxadaha" },
          { q: "Sh eeg habka biyaha loogu dhaliyo tamar danab (koronto) ?", a: "In ladhiso biyo xireeno 17. Aqoon Baaris: Qor warbxin ku saabsan mashruucii biyo xireenkii Faanoole adiga oo ka qoraya: B) Meesha laga sameeyay Gobolka jubada dhexe ee koonfurta soomaaliya gaar ah aan magaalada (JILIB) T) Sanadaha uu qaatey dhameystirkiisa 1970 -1982 J) Ma laga faa,ideystay Haa waalaga faa,ideystay xiligaas X) Dowladee lafulisay mashruucaas dowladii soomaaliya Waxaa lafulisay dowlad China" }
        ]
      },
      {
        title: "Cutubka 2aad : Badqabka iyo Ilaalinta Xogta",
        questions: [
          { q: "Waa maxay Xog ?", a: "Waa macluumaad cayriin ah oo aan lakala shaandheyn" },
          { q: "Waa maxay macluumaad ?", a: "Waa xog lashaandheeyay oo loo bedelay wax macno gaar ah sameynaya" },
          { q: "Maxay yeelan kartaa xoga kombiyuutarka ?", a: "Xogta kombiyuutarka waxa a y yeelan kartaa qaabab kala duwan sida : QORAAL , SAWIR , MAQAL iyo MUUQAAL" },
          { q: "Waa maxy fayras ?", a: "Fayras waa barnaamij wax yeelo u geesto kombiyuutarka" },
          { q: "Waa maxay lidka fayras ?", a: "Lid fayrasku waa barnaamij kombiyuutarka ka difaaca fayras" },
          { q: "Sidee ayuu fayras ugu gudbi karaa kombiyuutarka ?", a: "waxa uu ugu gudbi karaa haddii kombiyuutarka lagu shubin lid fayras , internetka , iyo Falaashka" },
          { q: "Ka faalloo astaamaha lagu garto in kombiyuutarka uu galay Feyris ?", a: "Hanaanka hawlgalka (OPERATING SYSTEM) oo shaqayn waya X- Sanduuq fariimo oo soo noq noqda ama soo boodboda KH- Barnaamijyo aadan dalban oo iska furma" },
          { q: "Magacow afar ka mid ah li d fayras -yada ugu caansan dunida ?", a: "SYMENTIC X- BITDEFENDER ." },
          { q: "Cilmi baaris: moobaylkaaga fayras ma gali karaa? Sidee ?", a: "Haa waa gali karaa haddii uu yahay lid fayras la'aan , miimiraha iyo waxyaalaha int ernetka laga soo dejiyo ayuu soo raacaa." },
          { q: "Samee afgarasho adag oo aan si fudud loo saadaalin Karin ?", a: "Waxaa ku ilaalinayaa in aan dabro (lock) ama aan damiyo." },
          { q: "Sidee kombiyuutarka fayras looga ilaalin karaa ?", a: "Waxaa loogu ilaalin karaa in lagu shubo -LID FAYRAS -" },
          { q: "Meeqo Xaraf ayuu ka kooban yahay erayada Afga rashada (Pasword ) kombiyuutarka ?", a: "Waxuu ka kooban (8) SIDEED XARAF." },
          { q: "M axaa haboon in afgarasho lagu sameenin ?", a: "Sanadka aad dhalatay X- Xaafadaaada" }
        ]
      }
    ]
  },
  {
    phase: 2,
    name: "Phase 2 (Cutubka 3aad & 4aad)",
    chapters: [
      {
        title: "Cutubka 3aad : Aasaasiyaadka Ms Word 2010",
        questions: [
          { q: "Qeex Microsoft Word 2010 ?", a: "Waa barnaami j qoraal oo fududeeya diyaarinta dukimentiyo kala duwan." },
          { q: "Maxaa lagu diyaarin karaa Ms Word 2010 ?", a: "Waxaa lagu diyaariyaarin karaa dokumentiyo aa u bilicsan." },
          { q: "Maxay ka kooban yihiin dokumentiyada aadka u bilicsan ?", a: "Waxay ka kooban yihiin qoraal , sawiro , jadwallo , iyo kaabayaasha cilmi barista." },
          { q: "Sheeg muuqaalada ugu muhiimsan ee Ms Word ?", a: "Muuqaalada ugu muhiimsan waxaa ka mid ah : 1. Ribbon -ka 2. Muuqaalka Backstage 3. Mastarada (The ruler)" },
          { q: "Qeex ama waa maxay Ribbon ?", a: "Ribbon wa a meesha laga helo dhamaan amarada muhiimka ah ee loo baahan yahay." },
          { q: "Muxuu ka kooban yahay Ribbon -ka ?", a: "Ribbon -ka waxa uu ka kooban yahay carabyo (Tabs) wata amaro kooxaysan oo aad ku dari kartid amarrada ka maqan." },
          { q: "Sheeg dhamaan carrabyada Ribbon -ka ?", a: "Waxaa ka mid ah:  Home  Insert  Layout  Reference  Mailing  Review  View" },
          { q: "Qor magacyada kooxaha hoos yimaada carabka (HOME) ?", a: "Waxaa ka mid ah :  Font  Cliboard  Paragraph  Style  Editing" },
          { q: "Qor magacyada kooxaha hoos yimaada c arabka (File) ?", a: "Waxaa ka mid ah :  Save  Save as  Open  Close  Recent  New  Print  Help" },
          { q: "Qor magacyada kooxaha hoos yimaada carabka (Insert) ?", a: "Waxaa ka mid ah :  Pages  Tables  Illustration  Links  Header & Footer  Text  Symbol." },
          { q: "Sidee loo Uruuruyaa loona ballaariyaa Ribbon -ka ?", a: "Si aad u uruuriso raac talaabooyinkaan : URUURINTA : Guji fallarta dhinaca saree e midigta (Ribbon -ka) si aa usoo uruusiso. BALLAARINTA : Mar kale guji fallaarta ribbon -ka la ururiyey ." },
          { q: "Maxaa laga heli karaa muuqaalka (BACKSTAGE) ?", a: "Muuqaalka BACKSTAGE waxaa laga heli karaa : keydinta (save) Furida (Open) , Daabacaada (Print)." },
          { q: "Xagee ayey taalaa Mastaradda ?", a: "Mastaradda waxa ay taalaa dhinaca kore iyo dhinaca bixid ee dukumintiga." },
          { q: "Waa maxay fa'iidada mastarada ?", a: "Mastarada Waxa ay fududeysaa cabirka saxda ah ee dukumentiga." },
          { q: "Sidee loo qariyaa loona muujiyaa mastarada ? Qarinta : si aad u qariso mastaradda guji Astaanta muuji mastaradda Muujinta : si aad u muujiso guji ma r kale Astaanta. 16. Cilmi baaris Qor magacyada xirmooyinka uu soo maray MS word iyo sanadihii ay soo bexeen ilaa laga soo gaaro 20120.", a: "sanadihii ay soo bexeen Ms word ilaa laga soo gaaro MS word 2010. Xirmada (Version) Sanadka lasoo saaray Ms-word 1995 31-dec-2001 Ms-word 1997 31-dec-2001 Ms-word 2000 30-jun-2004 Ms- word xp 11-july-2006 Ms-word 2003 14-Apr-2009 Ms-word 2007 10-Apr-2012 Ms-word 2010 13-oct-2015" },
          { q: "Faylasha Ms Word maxaa loo yaqaanaa ?", a: "Waxaa loo yaqaanaa Du kumentiyo" },
          { q: "Sidee ayaa u abuuri kartaa document cusub ?", a: "Si aad u abuurto dokumenti cusub : 1.Guji carabka file ka dib waxaa kuu furmaayo \"Backstage\" 2. Dooro \"New\" 3. Dooro Blank document 4. Guji \"Create\"" },
          { q: "Sidee ayaa u furi kartaa dukument horay u jir ay ?", a: "Si aad u furto document horay u jiray : 1. Guji \"File\" 2. Dooro Open 3.Dooro Dokumentiga aad rabto" },
          { q: "Sidee ku heli kartaa fayl dhawaan la furay ?", a: "Waxaan ku heli karaa : 1. Gujinayaa (FILE) 2. ka dib dooro (RECENT DOCUMENT)" }
        ]
      },
      {
        title: "Cutubka 4aad : Aasaasiyaadka Qoraalka",
        questions: [
          { q: "Muxuu leeyahay qoraalku ?", a: "Wuxuu leeyahay xeerar iyo hanaan loo qoro" },
          { q: "Muxuu fududeeyey Ms Word ?", a: "Waxa uu fududeeyey Hanaanka wanaagsan ee qoraalka iyo inaad tiri karto qoraal kaa qaldamay am a aad badali karto qoraal." },
          { q: "Sheeg Halka uu ka bilowdo qoraalku ?", a: "Waxa uu ka bilowdaa ……………………Insertion point" },
          { q: "Imisa qaab ayaa loo tiara qoraalka (Delete Text) ?", a: "Waa laba qaab oo kala ah :  Delete (Si aad u tirto qoraalka midigta xiga)  Backspace (wu xuu ka tirsan yahay looxa furayaasha si aad u tirto qoraalka bixixda jira)." },
          { q: "Sidee loo doortaa qoraalka ?", a: "1. Geey barta qoraalka eek u xigta qoraalka aad rabto inaad doorato. 2. Adiga oo gujinaaya hagaha ku jiid qoraalka aad rabto in aad doorato 3. Sii daay hagaha" },
          { q: "Sidee qoraal loo koobiyeyaa (Copy) loona dejiyaa (Past) ?", a: "Koobiyeenta (Copy) : 1. Dooro qoraalka aad rabto in aad koobi ka samayso 2. Guji astaanta copy ee kutyaal carabka (Home) 3. Guji midigta hagaha ka dib \"Copy\" 4. Geey barta gaynta meesha aad rabto in qoraalka ka soo muqudo 5. Guji Astaanta Past si qoraalkii aad koobiyeysay ugu dhejiso" },
          { q: "Sidee loo jaraa qoraal (Cut) loona dhejiyaa ( Paste) ?", a: "1. Dooro qoraalka aad rabto in aad jarid ku samayso 2. Guji Astaanta \"Cut\" 3. Geey barta gaynta meesha aad rabta 4. Guji astaanta paste si qoraalka aad jartay u dhejiso" },
          { q: "Sidee loo tira qoraalk a ?", a: "Dhig barta qoraalka meesha uu yaal qoraalka aad rabto inaad tirto * Guji furaha B ackspace si aad utirto qoraalka dhanka B idix * Guji furaha Delete si aad utirto qoraalka dhanka Midig" },
          { q: "Sidee qoraal jiidid loogu sameeyaa ?", a: "1. Dooro qora alka aad rabto in aad jiido 2. Guji hagaha oo u jild qoraalka meesha aad rabto in ay u muuqato 3. Sii daa hagaha" },
          { q: "Sidee loo raadiyaa L oona bedelaa qoraaalka ?", a: "* Raadinta qoraalka : 1. Guji Astaanta \"Find\" oo s aaran carabka Home 2. Ku qor qoraalka aad rabto inaa d ka hesho \"Navigation pane\" 3. Haddii qoraalka laga helayo document, waxaa lagu lagu muujinayaa \"Midab Jaale ah\" * Beddelida qoraalka : 1. Guji Astaanta \"Replace\" ee saan carabka Home 2. Ku qor sanduuqa \"Find what\" qoraalka aad rabtid inaad raadisid 3. Ku qor sa nduuqa \"Replace with\" qoraalka aad rabto inaad ku badasho 4. Guji \"Find Nexť\" ka dib Replace si aad u barasho qoraalka" },
          { q: "Imasa qaab ayaa loo qaabeeya qoraalka ?", a: "Waxaa loo qaabeyn karaa : 1. Bedelida Xajmiga farta (Font Size) 2. Bedilida Magaca Farta (Font Name) 3. Bedilida Midabka Farta (Font Color)" },
          { q: "Sidee loo badal aa Xajmiga farta (Font Size) ?", a: "1. Dooro qoraalka aad rabto inaad wax ka badasho 2. Guji falaarta ku xigta sanduuqa \"Font size \" oo ku taal carabka Home 3. Dooro tirad cabirka ee laga rabo farta" },
          { q: "Sidee loo beddelaa magaca farta (Font Name) ?", a: "1. Dooro qoraalka aad rabto inaad wax ka badasho 2. Guji falaatta magacyada farta oo ku taal carabka Home 3. Dooro magaca farta aad rabto" },
          { q: "Sidee loo beddelaa Midadbka farta (Font Color) ?", a: "1. Dooro qoraalka aad rabto inaad wax ka badasho 2. Guji fallaarta midabka oo ku taal ca rabka Home 3. Ka dooro midabada aad rabto" },
          { q: "Sidee loo midibeeyaa qoraalka ?", a: "* Dooro qoraalka aad rabto inaad wax ka badasho  (1) Guji amarka B ee ku jira kooxda Font Shortcut --- CTR + B  (2) Guji amarka I ee ku jira kooxda F ont Shortcut --- CTRL + I  (3) Guji amarka U ee ku jira kooxda Font Shortcut --- CTRL +U" },
          { q: "Sidee farta loo wayneeyaa loona yareeyaa (Capital or Small later ) ?", a: "1. Dooro qoraalka aad rabto inaad wax ka bada sho 2. Guji amarka \"Change Case\" oo ku jira kooxda font 3. Dooro nooca aad rabtid farta" },
          { q: "Sidee loo Beddelaa dhinacyada qoraalka (Text Allignment) ?", a: "1. Dooro qoraalka aad rabto inaad wax ka badasho 2. Ka dooro mid kamid ah afarta dhinac xulasho adigoo tagaya carabka Paragraph." }
        ]
      }
    ]
  },
  {
    phase: 3,
    name: "Phase 3 (Cutubka 5aad & 6aad)",
    chapters: [
      {
        title: "Cutubka 5aad : Kaydinta Dokumentiga",
        questions: [
          { q: "Maxay kaa taageertaa keydinta dokumentiga ?", a: "Waxay kaa taageertaa in uusan baabi in dokumentiga hadii uu kombiyuuyarka uu damo" },
          { q: "Imisa qaab ayaa loo kaydiyaa dokumentiga ?", a: "Waxaa loo kaydiyaa laba qaab :  Keydinta gaarka ah (Save as)  Keydin (Save)" },
          { q: "Maxay kuu ogolaanaysaa keydinta gaarka ah (Save as) ?", a: "Save as waxay kuu ogolaanaysaa in aad doorato magaca iyo meesha aad ku keydinaysid dokumentigaaga." },
          { q: "Maxay kuu ogolaan aysaa keydinta (Save) ?", a: "Save waxay kuu ogolaanaysaa in dokumentiga lagu keediyo meesha uu hadda yaalo isla magaciisa." },
          { q: "Sidee loo sameeyaa keydinta gaarta ah ?", a: "1. Guji \"File\" 2. Dooro \"Save as\" 3. Sanduuqa save as ayaa kuu soo baxaya kadibna dooro goob ta aad rabto inaad ku keydisid. 4. Ku qor magaca dokumentika ka dibna Guji \"Save\"" },
          { q: "Sidee loo sameeyaa Keydin ?", a: "1. Guji carabka \"File\" waxaa kuu soo muuqanaayo Muuqaalka \"Backstage\" 2. Guji \"Save\"" },
          { q: "Sidee loo kaydiyaa document Word 97 -2003 ?", a: "1. Guji \"Fi le\" 2. Dooro \"Save as\" 3. Ka Dooro \"Save as type\" Word 97 -2003 document" },
          { q: "Maxaa lag a soo gaabiyey PDF ?", a: "P = Potable D = Docoment F = Format" },
          { q: "Maxaa loola jeedaa Keydinta nooca gaarka ah PDF ?", a: "Waxaa loola jeedaa waa marka dokumentiga aan waxba laga bedeli Karin." },
          { q: "Sidee loo kaydiyaa dokumentiga nooca PDF ?", a: "1. Guji \"File\" 2. Dooro \"Save as\" 3. Ka Dooro \"Save as type\" PDF" },
          { q: "Sidee loo kaydiyaa document Word 2003 ?", a: "1. Guji \"File\" 2. Dooro \"Save a s\" 3. Ka Dooro \"Save as type\" Word 2003 document" },
          { q: "Sidee loo xiraa dokumentiga ?", a: "1. Waxaa loo xiraa qaabab badan waxaa ka mid ah: 2. Guji carabka \"File\" 3. Dooro \"Close or Exit\" Shortcut ----- ALT+F4" }
        ]
      },
      {
        title: "Cutubka 6aad : Habaynta Muuqaalka Bogga",
        questions: [
          { q: "Imisa ayaa loo gaybiyaa Jihaynta bogga (Page Orientation) ?", a: "Waa laba qayb :  Jihaynta bogga Taagan (Portrait)  Jihaynta bogga Jiifta (Landscape)" },
          { q: "Sidee loogu dhig aa jihaynta bogga mid taagan (Portrait) ?", a: "1. Dooro carabka \"Layout\" 2. Guji amarka \"Orientation\" ee ka tirsan kooxda \"Setup page\" 3. Guji\" Portrait si aad u badasho jihada bogga qaabka." },
          { q: "Sidee loogu dhigaa jihaynta bogga mid Jiifta (Landscape) ?", a: "1. Dooro carabka \"Layout\" 2. Guji amarka \"Orientation\" ee ka tirsan kooxda \"Setup page\" 3. Guji Landscape\" si aad u badasho jihada bogga qaabka." },
          { q: "Waa maxay farqiga u dhaxeeya Landscape iyo Portrait ?", a: " Landscape = in boggu u jeedo si jiifta  Portrait = in bogga u jeedo si ligan / qotonta / Taagan" },
          { q: "Sidee loo bedela cabirka bogga (Change page size) ?", a: " Dooro carabka \"Layout\"  Guji amarka \"Size\" ee ka tirsan kooxda \"Setup page\" waxaa kuu soo baxaaya qaabab, ka dooro qaabka bogaada (Tusaale: A4,10 x 15cm, A5, B5 , B4,).  Kadooro qaabka bogaada" },
          { q: "Sidee loo bedelaa hareeraha bogga (Page Margins) ?", a: "1. Dooro \"Page Layout\" 2. Guji Astaanta \"Margins\" ee ka tirsan kooxda \"Setup page\" 3. Guji \"Predefined Margin Size\" aad rabtid. (Tusaale : Normal, Narrow, Wide, Moderate)." },
          { q: "Sidee loo isticmaa laa \"Custom Margings\" ?", a: "1. Dooro \"Page layout\" 2. Guji \"Margin\" ee ku jira carabka \"Page layout\" 3. Dooro \"Custom Margings\" 4. Isku hagaaji xajmiga dhinacyada bogga, ka dib Guji \"OK\"" }
        ]
      }
    ]
  },
  {
    phase: 4,
    name: "Phase 4 (Cutubka 7aad & 8aad)",
    chapters: [
      {
        title: "Cutubka 7aad : Daabicidda Dokumentiyada iyo faqreyntooda",
        questions: [
          { q: "Sidee Dokument loo daabacaa ?", a: "1. Guji \"File\" 2. Dooro \"Print\" 3. Xulo tirada nuqulada (aad rabto) 4. Fiiri sanduuqa collat haddii aad daabacayso nuqulo badan oo ah dokumintiyo badan sida (123-ama 111 222 333) 5. Guji botonka daabac \"Print\"" },
          { q: "Maxaaa loo baaha n yahay si aad u samayso qoraal bilic iyo hanaan leh ?", a: "In aad habayso habayso fogaanta u dhaxayso sadarrada iyo faqradaha dhexdooda." },
          { q: "Maxay fududeysaa fogaanta u dhaxaysa sadarrada ?", a: "Waxay fuudaysaa akhrinta dokumentiga" },
          { q: "Maxaa lagaaga baah an yahay si aad u qaabisid fogaanta u dhaxayso sadarrada ?", a: "1. Dooro qoraalka aad rabto inaad qaabayso 2. Guji amarka \"Line and Paragraph Spacing oo ku jira kooxda \"Paragraph\" ee carabka \"Home\" 3. Ka xulo tirada aad rabtid in aad u dhaxaysiiso sadarrada 4. Waxaa n dooran kartaa \"Line Spacing Option\"" },
          { q: "Maxaa lagaaga baahan yahay si aad u habayso fogaanta u dhaxayso faqradaha ?", a: "1. Dooro qoraalka aad rabto inaad qaabayso 2. Guji amarka \"Line and Paragraph Spacing\" oo ku jira kooxda \"Paragraph\" ee carabka \"Home\" 3. Dooro falaarta hoos u jeedda \"Add space before paragraph\" ama \"Remove space after paragraph\" 4. Waxaan dooran kartaa \"Line Spacing Option\"" },
          { q: "Sheeg halka laga xugmin kara fogaanta ka sarraysa ama ka hooseysa faqradda ?", a: "Waa \"Line Spacing Option\"" }
        ]
      },
      {
        title: "Cutubka 8aad : Diyaarinta Qoraal Taxan ( Lists )",
        questions: [
          { q: "Maxaad adeegsan kartaa marka aad rabto qoraalkaga inaad ka samayso taxanayaal ?", a: "Waxaad adeegsan kartaa dhibco iyo tirooyin I.W.M" },
          { q: "Sidee loo sameeyaa t axane dhibco leh ?", a: "1. Dooro qoraalka aad rabtid 2. Guji fallaarta \"Bullets\" ama \"Numbering\" oo ku taal carrabka \"Home\" 3. Dooro dhibcaha ama tirsiga aad rabto inuu kasoo muuqdo dokumentiga" },
          { q: "Sidee looga saaraa dhibcaha ama tirsiga dokumentiga ?", a: "1. Dooro qoraalka aad rabtid 2. Guji fallaarta \"Bullets\" ama \"Numbering\" oo ku taal carrabka \"Home\"" },
          { q: "Sidee loo adeegsadaa dhibcaha ?", a: "1. Dooro qoraal taxane horay u jiray 2. Guji fallaarta \"Bullets\" 3. Dooro fallaarta \"Define New Bullets\" 4. Guji \"Symbol\" 5. Guji falla arta \"Font\" 6. ka dib dooro farta \"Wingdings\" 7. Ka dooro summadda aad rabti 8. Guji \"OK\"" },
          { q: "Sidee loo badalaa middabka dhibcaha ?", a: "1. Dooro qoraal taxane horay u jiray 2. Guji fallaarta \"Bullets\" 3. Dooro fallaarta \"Define New Bullets\" 4. Guji fallaarta \"Font\" 5. Ka xulo midabka aad rabto 6. Guji \"OK\" 7. Guji \"OK\"" },
          { q: "Sidee loo sameeyaa taxane heerar leh ?", a: "1. Dooro qoraal aad rabto in aad ka dhigto taxane heerar leh 2. Guji amarka \"Multi Level List\" oo ku yaal carrabka \"Home\" 3. Guji dhibcaha ama tirsiyada aad rabto 4. Dhig barta bilowga hagaha dhamaadka saradka 5. Ka dib riix \"Enter\" DHAMAAD Gmail : Mohamedsayidali083@gmail.com Tell : +252613915311" }
        ]
      }
    ]
  }
];
