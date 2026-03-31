import { Question } from "../types/quiz";

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText:
      "Yapı-Davranış-Performans (SCP) paradigmasına göre, bir sektörde faaliyet gösteren firma sayısının çok az olması ve giriş engellerinin yüksekliği öncelikle hangi aşamayı belirler ve bu durum performansı nasıl etkiler?",
    options: [
      "A) Davranış aşamasını belirler; aşırı kârlılığa yol açar.",
      "B) Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
      "C) Performans aşamasını belirler; operasyonel verimliliği zorunlu kılar.",
      "D) Davranış aşamasını belirler; ürün farklılaştırmasını imkansız hale getirir.",
      "E) Yapı aşamasını belirler; ancak performans üzerinde doğrudan bir etkisi yoktur.",
    ],
    correctAnswer:
      "B) Yapı aşamasını belirler; fiyat rekabetinin azalmasına ve yüksek kârlılığa zemin hazırlar.",
  },
  {
    id: 2,
    questionText:
      'Slywotzky\'nin "İş Tasarımı" modelinde yer alan "Müşteri Seçimi" bileşeni hakkında hangisi en doğru ifadedir?',
    options: [
      "A) Şirketin ulaşabileceği her müşteriye ürün satma çabasıdır.",
      "B) Pazardaki en ucuz ürünü talep eden kitleye odaklanmaktır.",
      "C) Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
      "D) Sadece en yüksek geliri olan müşterileri seçmektir.",
      "E) Rakip firmaların müşterilerini çalma stratejisidir.",
    ],
    correctAnswer:
      "C) Hangi müşterilere hizmet verilmeyeceğinin belirlendiği stratejik bir eleme sürecidir.",
  },
  {
    id: 3,
    questionText:
      "I/O Teorisi ile RBV arasındaki temel farkı en iyi hangi seçenek açıklar?",
    options: [
      'A) I/O "ne yapıldığına", RBV "nasıl yapıldığına" odaklanır.',
      "B) I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
      "C) I/O kısa vadeli, RBV uzun vadeli planlar için kullanılır.",
      "D) I/O sadece üretim, RBV ise hizmet sektörü için geçerlidir.",
      "E) Aralarında temel bir fark yoktur; her ikisi de dış çevreyi önceler.",
    ],
    correctAnswer:
      "B) I/O sektörel çekiciliği (dış çevre), RBV ise içsel yetenekleri (kaynaklar) temel alır.",
  },
  {
    id: 4,
    questionText:
      "Bir firmanın sahip olduğu patentli bir teknoloji, sektördeki diğer tüm firmalar tarafından kolayca lisanslanabiliyorsa, RBV perspektifinden bu kaynak için ne söylenebilir?",
    options: [
      "A) Sürdürülebilir rekabet avantajı sağlar.",
      "B) Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
      "C) Taklit edilemez (Inimitable) bir kaynaktır.",
      "D) Şirketin kâr bölgesini sonsuza dek korur.",
      "E) 10X kuvvetine karşı tek savunma hattıdır.",
    ],
    correctAnswer:
      "B) Değerli (Valuable) olsa bile nadir (Rare) olmadığı için sadece rekabet eşitliği sağlar.",
  },
  {
    id: 5,
    questionText:
      'Aşağıdaki senaryolardan hangisi Andy Grove\'un "Stratejik Kırılma Noktası"nı en iyi tarif eder?',
    options: [
      "A) Şirketin yıllık satış hedeflerine ulaşamaması.",
      "B) Rakip bir firmanın yeni bir reklam kampanyası başlatması.",
      "C) Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
      "D) Ham madde fiyatlarında yaşanan %5'lik bir artış.",
      "E) Şirket CEO'sunun emekli olması.",
    ],
    correctAnswer:
      "C) Sektör kurallarının, müşteri beklentilerinin ve rekabetin artık geri dönülemez şekilde değiştiği an.",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi Endüstriyel Örgüt (I/O) yaklaşımının temel varsayımını en doğru şekilde yansıtır?",
    options: [
      "A) İşletme performansını yalnızca içsel kaynaklar belirler",
      "B) Rekabet avantajı işletmenin kültürel yapısından doğar",
      "C) Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
      "D) İşletme performansı tamamen yöneticilerin sezgilerine bağlıdır",
      "E) Başarı yalnızca teknolojik yeniliklere bağlıdır",
    ],
    correctAnswer:
      "C) Sektör yapısı ve rekabet koşulları firma performansını önemli ölçüde belirler",
  },
  {
    id: 7,
    questionText:
      "Hamel ve Prahalad'ın stratejik yönetime en önemli katkısı aşağıdakilerden hangisidir?",
    options: [
      "A) Beş Güç modelini geliştirmek",
      "B) Stratejik kırılma noktası kavramını ortaya koymak",
      "C) Temel yetenek (core competence) yaklaşımını geliştirmek",
      "D) Fiyat liderliği stratejisini oluşturmak",
      "E) Pazar payı analizini geliştirmek",
    ],
    correctAnswer: "C) Temel yetenek (core competence) yaklaşımını geliştirmek",
  },
  {
    id: 8,
    questionText: "Aşağıdaki eşleştirmelerden hangisi yanlıştır?",
    options: [
      "A) Porter - Sektör ve rekabet analizi",
      "B) Barney - Kaynak temelli yaklaşım",
      "C) Hamel & Prahalad – Temel yetenekler",
      "D) Slywotzky - Değer göçü ve iş modeli",
      "E) Andy Grove Beş Güç modeli",
    ],
    correctAnswer: "E) Andy Grove Beş Güç modeli",
  },
  {
    id: 9,
    questionText:
      "Aşağıdakilerden hangisi Porter'ın Beş Rekabetçi Güç modelinde yer almaz?",
    options: [
      "A) Mevcut rakipler arasındaki rekabet",
      "B) Tedarikçilerin pazarlık gücü",
      "C) Devletin doğrudan fiyat belirleme gücü",
      "D) İkame ürünlerin tehdidi",
      "E) Yeni girenlerin tehdidi",
    ],
    correctAnswer: "C) Devletin doğrudan fiyat belirleme gücü",
  },
  {
    id: 10,
    questionText: "Strateji-operasyon ayrımı için en doğru ifade hangisidir?",
    options: [
      "A) İkisi de aynı anlama gelir",
      "B) Operasyon yönü belirler, strateji günlük işleri yürütür",
      "C) Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
      "D) Operasyon sadece üst yönetimin işidir",
      "E) Strateji sadece alt kademe işidir",
    ],
    correctAnswer:
      "C) Strateji yön/tercih üretir; operasyon süreçleri etkin işletir",
  },
  {
    id: 11,
    questionText:
      "Aşağıdakilerden hangisi 'strateji-politika' ayrımını en doğru ifade eder?",
    options: [
      "A) Strateji iç kuralları, politika dış çevreyi belirler",
      "B) Strateji ve politika eş anlamlıdır",
      "C) Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
      "D) Politika stratejiden daha dinamiktir",
      "E) Politika sadece finans birimini ilgilendirir",
    ],
    correctAnswer:
      "C) Strateji dış çevrede nasıl rekabet edileceğini, politika karar ilkelerini belirler",
  },
  {
    id: 12,
    questionText: "Aşağıdakilerden hangisi amaç ifadesidir?",
    options: [
      "A) 6 ayda satışları %12 artırmak",
      "B) 2027'de premium segmentte güçlü marka olmak",
      "C) Bu ay 30 kurumsal ziyaret yapmak",
      "D) Haftalık kampanya bütçesini 50.000 TL'ye çıkarmak",
      "E) Check-in süresini 4 dakikaya indirmek",
    ],
    correctAnswer: "B) 2027'de premium segmentte güçlü marka olmak",
  },
  {
    id: 13,
    questionText: "Aşağıdakilerden hangisi strateji ifadesidir?",
    options: [
      "A) Bu hafta sosyal medya reklamı başlatmak",
      "B) Ay sonuna kadar 3 personel almak",
      "C) Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
      "D) Günlük doluluk raporu hazırlamak",
      "E) Bütçeyi üç aylık revize etmek",
    ],
    correctAnswer:
      "C) Kitle turizmi yerine yüksek harcama segmentine odaklanmak",
  },
  {
    id: 14,
    questionText:
      "'Kim, neyi, ne zaman, hangi kaynakla yapacak?' sorusu en çok hangi kavrama aittir?",
    options: [
      "A) Vizyon",
      "B) Misyon",
      "C) Strateji",
      "D) Plan",
      "E) Politika",
    ],
    correctAnswer: "D) Plan",
  },
  {
    id: 15,
    questionText:
      "Aşağıdakilerden hangisi strateji ile taktik arasındaki farkı doğru verir?",
    options: [
      "A) Strateji kısa vadeli, taktik uzun vadelidir",
      "B) Strateji iç süreç, taktik dış çevredir",
      "C) Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
      "D) Taktik üst yönetim, strateji alt yönetim işidir",
      "E) İkisi tamamen aynıdır",
    ],
    correctAnswer:
      "C) Strateji yön ve tercih; taktik kısa vadeli uygulama hamlesidir",
  },
  {
    id: 16,
    questionText:
      "Peters ve Waterman yaklaşımında stratejik başarının kilit unsuru hangisidir?",
    options: [
      "A) Sadece sektör analizi",
      "B) Sadece portföy matrisi",
      "C) Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
      "D) Sadece yazılı plan dokümanı",
      "E) Sadece düşük maliyet",
    ],
    correctAnswer:
      "C) Uygulama kalitesi, kültür, liderlik ve müşteri yakınlığı",
  },
  {
    id: 17,
    questionText:
      "Aşağıdakilerden hangisi uyumlu bir amaç-hedef-strateji setidir?",
    options: [
      "A) Amaç: Kârlılık artışı / Hedef: Instagram takipçisi +50% / Strateji: çekiliş",
      "B) Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
      "C) Amaç: Marka imajı / Hedef: Elektrik giderini azaltma / Strateji: depo alanı kiralama",
      "D) Amaç: Verimlilik / Hedef: Yeni logo / Strateji: sosyal medya paylaşımı",
      "E) Amaç: Sürdürülebilirlik / Hedef: Fiyat indirimi / Strateji: yoğun promosyon",
    ],
    correctAnswer:
      "B) Amaç: İş seyahati segmentinde güçlenme / Hedef: Hafta içi doluluk %62 %75 / Strateji: kurumsal müşteri odaklı farklılaşma",
  },
  {
    id: 18,
    questionText:
      "Aşağıdakilerden hangisi Porter yaklaşımının temel katkılarından biri değildir?",
    options: [
      "A) Beş rekabetçi güç analizi",
      "B) Jenerik rekabet stratejileri",
      "C) Değer zinciri yaklaşımı",
      "D) Öğrenen örgüt disiplinleri",
      "E) Rekabetçi konumlandırma vurgusu",
    ],
    correctAnswer: "D) Öğrenen örgüt disiplinleri",
  },
  {
    id: 19,
    questionText:
      "'Strateji doğru işi seçer, plan seçilen işi uygular' ifadesine göre aşağıdakilerden hangisi plan örneğidir?",
    options: [
      "A) Premium müşteri segmentine odaklanma kararı",
      "B) Farklılaşma stratejisiyle rekabet etme",
      "C) Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
      "D) Sektörde maliyet liderliği seçimi",
      "E) Hangi pazarda yarışılacağının belirlenmesi",
    ],
    correctAnswer: "C) Q3'te 20 kurumsal müşteri ziyareti ve bütçe ataması",
  },
  {
    id: 20,
    questionText:
      "Mintzberg'in sınıflandırmasına göre başlangıçta planlanmayan ancak süreçte ortaya çıkan strateji türü hangisidir?",
    options: [
      "A) Amaçlanan strateji",
      "B) Kurumsal strateji",
      "C) Gerçekleşen strateji",
      "D) Oluşan strateji",
      "E) Fonksiyonel strateji",
    ],
    correctAnswer: "D) Oluşan strateji",
  },
  {
    id: 21,
    questionText:
      "Aşağıdakilerden hangisi işletmelerin stratejik yönetim uygulamasını gerekli kılan temel nedenlerden biri değildir?",
    options: [
      "A) Çevresel belirsizliklerin artması",
      "B) Rekabetin ulusal ve küresel boyut kazanması",
      "C) Günlük operasyonel kararların yeterli olması",
      "D) Uzun vadeli sürdürülebilirliğin sağlanması",
    ],
    correctAnswer: "C) Günlük operasyonel kararların yeterli olması",
  },
  {
    id: 22,
    questionText:
      "Stratejik yönetimi klasik yönetim anlayışından ayıran temel özellik aşağıdakilerden hangisidir?",
    options: [
      "A) Günlük faaliyetlere odaklanması",
      "B) Kısa vadeli hedefleri esas alması",
      "C) Çevresel analiz ve uzun vadeli bakış açısı",
      "D) Sadece iç kaynakları dikkate alması",
    ],
    correctAnswer: "C) Çevresel analiz ve uzun vadeli bakış açısı",
  },
  {
    id: 23,
    questionText:
      "Aşağıdakilerden hangisi 'stratejiyi soyuttan somuta dönüştürme' fikrini en iyi açıklar?",
    options: [
      "A) Stratejinin yalnızca misyon ve vizyon cümlesiyle ifade edilmesi",
      "B) Stratejilerin oluşturulup uygulanarak operasyonel karşılık bulması",
      "C) SWOT analizinin yapılmasıyla stratejinin tamamlanması",
      "D) Yalnızca sektörel çevre analizinin yapılması",
      "E) Finansal hedeflerin yıllık bütçeye yazılması",
    ],
    correctAnswer:
      "B) Stratejilerin oluşturulup uygulanarak operasyonel karşılık bulması",
  },
  {
    id: 24,
    questionText:
      "Aşağıdakilerden hangisi 'fırsat yaklaşımı'nın (I/O çizgisi) mantığıyla daha tutarlıdır?",
    options: [
      "A) İç çevre kaynaklarını analiz edip benzersiz yetenekleri merkeze almak",
      "B) Cazip sektör/iş alanını dış çevre analiziyle belirleyip rekabetçi stratejilerle kazanmak",
      "C) Örgütün çevreyi değiştirmesinin mümkün olmadığını savunmak",
      "D) Yapısal atalet nedeniyle değişimin mümkün olmadığını söylemek",
      "E) Tek bir en iyi örgüt yapısı olduğunu varsaymak",
    ],
    correctAnswer:
      "B) Cazip sektör/iş alanını dış çevre analiziyle belirleyip rekabetçi stratejilerle kazanmak",
  },
  {
    id: 25,
    questionText:
      "'Aktör-yapı (agency-structure) tartışması'nın merkezindeki soru aşağıdakilerden hangisidir?",
    options: [
      "A) Örgütler hangi pazarlara girmeli?",
      "B) Stratejik kontrol hangi göstergelerle yapılmalı?",
      "C) Şirketin kaderini yöneticiler mi belirler, yoksa içinde bulunduğu şartlar ve sistem mi?",
      "D) Teknolojik değişim mi yoksa demografi mi daha önemlidir?",
      "E) Rekabet avantajı mı yoksa büyüme mi önceliklidir?",
    ],
    correctAnswer:
      "C) Şirketin kaderini yöneticiler mi belirler, yoksa içinde bulunduğu şartlar ve sistem mi?",
  },
  {
    id: 26,
    questionText:
      "Koşul bağımlılık yaklaşımının (contingency) temel iddiası nedir?",
    options: [
      "A) Örgütler çevreyi tamamen kontrol eder",
      "B) Örgütlerde tek bir en iyi yapı vardır",
      "C) En uygun yapı ve yönetim biçimi çevre koşullarına bağlıdır",
      "D) Performansı yalnızca sektör çekiciliği belirler",
      "E) Örgütler değişemez; çevre seçer",
    ],
    correctAnswer:
      "C) En uygun yapı ve yönetim biçimi çevre koşullarına bağlıdır",
  },
  {
    id: 27,
    questionText:
      "Aşağıdakilerden hangisi örgütsel ekoloji kuramının temel vurgusuna en yakındır?",
    options: [
      "A) Başarı yöneticinin iradesi ve doğru kararlarıyla belirlenir",
      "B) Örgütler çevreyi değiştirerek yaşar",
      "C) Örgütler hızlı değişime aynı hızda uyum sağlayamaz; çevre en uygun olanı 'seçer'",
      "D) Tek bir en iyi örgüt yapısı vardır",
      "E) Uyum, yalnızca liderlik tarzıyla sağlanır",
    ],
    correctAnswer:
      "C) Örgütler hızlı değişime aynı hızda uyum sağlayamaz; çevre en uygun olanı 'seçer'",
  },
  {
    id: 28,
    questionText: "PESTEL analizinin temel amacı aşağıdakilerden hangisidir?",
    options: [
      "A) Şirket içi kaynak ve yetenekleri ölçmek",
      "B) Makro çevredeki dış faktörleri sistematik biçimde tarayıp stratejik etkiyi görmek",
      "C) Rakiplerin maliyet yapısını hesaplamak",
      "D) Sadece pazar payını artıracak taktikleri belirlemek",
      "E) Organizasyon şemasını yeniden tasarlamak",
    ],
    correctAnswer:
      "B) Makro çevredeki dış faktörleri sistematik biçimde tarayıp stratejik etkiyi görmek",
  },
  {
    id: 29,
    questionText:
      "Aşağıdakilerden hangisi PESTEL kapsamında yasal çevreye örnektir?",
    options: [
      "A) Tüketicilerin etik tüketime yönelmesi",
      "B) Ürün güvenliği standartlarının zorunlu hale getirilmesi",
      "C) Döviz kurundaki dalgalanma",
      "D) Rekabet yoğunluğunun artması",
      "E) İklim değişikliğine bağlı sıcaklık artışları",
    ],
    correctAnswer: "B) Ürün güvenliği standartlarının zorunlu hale getirilmesi",
  },
  {
    id: 30,
    questionText:
      "Aşağıdakilerden hangisi amaçların oluşturulmasında dikkate alınması gereken ilkelerden biri değildir?",
    options: [
      "A) Ölçülebilir olması",
      "B) Gerçekçi olması",
      "C) Durağan olması",
      "D) Motive edici olması",
      "E) Uyumlu olması",
    ],
    correctAnswer: "C) Durağan olması",
  },
  {
    id: 31,
    questionText:
      "'İşletme olarak bizim işimiz nedir?' sorusunun cevabını veren kavram aşağıdakilerden hangisidir?",
    options: [
      "A) Vizyon",
      "B) Amaçlar",
      "C) Misyon",
      "D) Fırsatlar",
      "E) Görev tanımları",
    ],
    correctAnswer: "E) Görev tanımları",
  },
  {
    id: 32,
    questionText:
      "İşletmelerin amaçlarını gerçekleştirmeye çalışırken etkiledikleri ve etkilendikleri birey ve gruplara ne ad verilir?",
    options: [
      "A) Rakipler",
      "B) Çalışanlar",
      "C) Paydaşlar",
      "D) Müşteriler",
      "E) Medya",
    ],
    correctAnswer: "C) Paydaşlar",
  },
  {
    id: 33,
    questionText:
      "'Biz ne olmak istiyoruz' sorusunun cevabı aşağıdakilerden hangisini ifade eder?",
    options: [
      "A) Misyon",
      "B) Amaçlar",
      "C) Fırsatlar",
      "D) Hedefler",
      "E) Vizyon",
    ],
    correctAnswer: "E) Vizyon",
  },
  {
    id: 34,
    questionText:
      "Aşağıdakilerden hangisi örgütsel misyon içerisinde yer alabilecek unsurlardan biri değildir?",
    options: [
      "A) Örgütün rekabet stratejileri",
      "B) Örgütün faaliyet alanı",
      "C) Örgütün değer ve inançları",
      "D) Örgütün ilişkide bulunduğu kitleler",
      "E) Örgütün...",
    ],
    correctAnswer: "A) Örgütün rekabet stratejileri",
  },
  {
    id: 35,
    questionText:
      "Olası rakiplerin pazara girişini maliyetli duruma getirmek ve bu sayede sektördeki mevcut işletmeleri rekabetten korumak amacıyla geliştirilen faktörlere ne ad verilir?",
    options: [
      "A) Ölçek ekonomileri",
      "B) Pazara giriş engelleri",
      "C) Tehdit oluşturma",
      "D) Rekabetçi istihbarat",
      "E) Değer zinciri yaratma",
    ],
    correctAnswer: "B) Pazara giriş engelleri",
  },
  {
    id: 36,
    questionText:
      "İşletmenin sahip olduğu yeteneklerin başka alternatif yetenekler kullanılarak gerçekleştirilememesi ile ilgili olan temel yetenek kriteri aşağıdakilerden hangisidir?",
    options: [
      "A) Nadir olması",
      "B) Taklit edilemez olması",
      "C) Nadir olması",
      "D) Güncel olması",
      "E) İkame edilemez olması",
    ],
    correctAnswer: "E) İkame edilemez olması",
  },
  {
    id: 37,
    questionText:
      "İşletmeyi rakiplerinden farklılaştıran kabiliyet ve kapasiteye ne ad verilir?",
    options: [
      "A) Rekabet avantajı",
      "B) Operasyonel plan",
      "C) İşletme stratejileri",
      "D) Temel yetenekler",
      "E) Taktik plan",
    ],
    correctAnswer: "D) Temel yetenekler",
  },
  {
    id: 38,
    questionText:
      "Aşağıdaki durumlardan hangisinde tedarikçilerin alıcılara karşı pazarlık gücü yüksektir?",
    options: [
      "A) Bir çok tedarikçinin varlığı söz konusuysa",
      "B) Yeterli düzeyde ikame tedarik kaynağı mevcutsa",
      "C) Tedarik edilen ürünlerin değiştirme maliyetleri düşükse",
      "D) Alıcının yaptığı satın almalar, tedarikçinin satışlarının büyük bölümünü oluşturuyorsa",
      "E) Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
    ],
    correctAnswer:
      "E) Tedarikçinin ürünlerinin alıcının pazardaki başarısı için önemliyse",
  },
  {
    id: 39,
    questionText:
      "'Beş Güç Modeli' ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      "A) Örgütün iş çevresinin analizinde kullanılır.",
      "B) Modelde yer alan faktörlerin güçlenmesi işletmenin karlılığını artırır.",
      "C) Modelde yer alan faktörlerin şiddeti azaldıkça işletme için tehdit oluşturma olasılığı artar.",
      "D) Modeli oluşturan beş faktörden biri 'çalışanların rekabet gücü'dür.",
      "E) Modeli oluşturan beş faktörden biri 'teknolojik yeniliklerin varlığı'dır.",
    ],
    correctAnswer: "A) Örgütün iş çevresinin analizinde kullanılır.",
  },
  {
    id: 40,
    questionText:
      "Aşağıdakilerden hangisi işletmenin genel çevresinde yer alan 'politik faktörler' içinde yer almaz?",
    options: [
      "A) Adil rekabet kararları",
      "B) Enflasyon oranları",
      "C) AR-GE destekleri",
      "D) Patent yasaları",
      "E) Vergi düzenlemeleri",
    ],
    correctAnswer: "B) Enflasyon oranları",
  },
  {
    id: 41,
    questionText:
      "Aşağıdakilerden hangisi yeni işletmelerin pazara girişini zorlaştıran nedenlerden biri değildir?",
    options: [
      "A) Pazardaki mevcut firmaların ölçek ekonomisine sahip olması",
      "B) Pazardaki işletmelerin sadık müşteri grubuna sahip olması",
      "C) Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
      "D) Pazardaki işletmelerin etkili dağıtım sistemine sahip olması",
      "E) Pazara girişte yüksek miktarda sermayeye ihtiyaç duyulması",
    ],
    correctAnswer:
      "C) Pazara yeni girecek işletmenin pazardaki mevcut ürünü daha düşük fiyatla satabilmesi",
  },
  {
    id: 42,
    questionText:
      "İşletmenin amaçlarına nasıl ulaşacağını belirleyen, rakiplerin faaliyetlerinin izlenmesini içeren, nihai sonuca odaklı, uzun dönemli bakış açısına dayalı, dinamik kararlar topluluğuna ne ad verilir?",
    options: [
      "A) Taktik",
      "B) Yönetim",
      "C) Strateji",
      "D) Kısa dönemli planlama",
      "E) Stratejik düşünme",
    ],
    correctAnswer: "C) Strateji",
  },
];
