import { Question } from "../types/quiz";

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText:
      "Aşağıdakilerden hangisi özellikler teorisine yöneltilen eleştiriler arasında sayılamaz?",
    options: [
      "Yalnızca liderlerin kişilik özelliklerini ele alarak liderliği etkileyen diğer faktörleri gözardı etmesi",
      "İnsanları nitelendirebilecek sınırsız özelliğin var olması nedeniyle lider özelliklerini sınıflandırma güçlüğü",
      "Klasik yönetim düşüncesiyle uyumlu bir şekilde her ortam ve koşulda geçerli lider özelliklerini sorgulaması",
      "Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
      "Birbirinden farklı çalışmaların farklı lider özellikleri ortaya koyması, etkili lideri tanımlayabilecek tüm özellikleri belirlemenin güçlüğü",
    ],
    correctAnswer:
      "Liderlik fonksiyonunda belirtilen ve etkin bir liderlik için gerekli 'izleyiciler' ve 'koşullar' gibi tüm değişkenleri dikkate alması",
  },
  {
    id: 2,
    questionText:
      "Güç kaynaklarına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderlerin temel fonksiyonu izleyicilerini etkileyerek istenen sonuçlara ve beklentilere ulaşmalarını sağlamaktır ve bu güç kullanımı gerektirmektedir.",
      "Hem yöneticiler hem de liderler için güce ulaşmak ve kullanmak önemlidir.",
      "Liderler çoğu kez gücü elinde bulunduran üstün insanlar, süper kahramanlar olarak sıradan insanlardan farklı görülmektedirler. Çoğunlukla bireysel güç kaynaklarıyla insanları etkilemektedirler.",
      "İzleyicilerin davranışlarını olumlu yönde etkileme sürecinde yararlanılan meşru ve kişisel dayanakları olan pek çok güç kaynağı bulunmaktadır.",
      "Güç kaynaklarının hepsi pozisyona dayalıdır.",
    ],
    correctAnswer: "Güç kaynaklarının hepsi pozisyona dayalıdır.",
  },
  {
    id: 3,
    questionText:
      "Lider üye etkileşimin boyutlarına ilişkin tanımlamalardan hangisi yanlıştır?",
    options: [
      "Etki: Karşılıklı hoşlanma",
      "İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
      "Katkı: Görev odaklı ilişkiler geliştirmede başarılı olma",
      "Sadakat: Birbirinin beklediği doğrultuda davranma, birbirini destekleme, vefakarlık",
      "Profesyonel Saygı: İşini nasıl yaptığına ilişkin itibarı",
    ],
    correctAnswer:
      "İlgi: Birbirinin beklediği doğrultuda davranma ve ilgilenme",
  },
  {
    id: 4,
    questionText:
      "Profesyonel saygı boyutuna ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Lider ve çalışanın birbirlerinin örgüt içi ya da dışında mesleki itibarlarını algılamalarıdır.",
      "Profesyonel saygıya ilişkin algılama yöneticinin geçmişine dayalıdır.",
      "Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
      "Yöneticinin birlikte çalıştığı ve karşılaştığı diğer bireylerle yaşadığı deneyimler, başkalarının organizasyon içinde ve dışında onun hakkındaki yorumları, sahip olduğu ödüller veya diğer profesyonel takdirler yoluyla profesyonel saygıya ilişkin algı oluşabilmektedir.",
      "Bu boyut güven ve yüksek saygı ile yakından ilişkilidir.",
    ],
    correctAnswer:
      "Bir kişiyle henüz bir arada çalışmadan, hatta onunla karşılaşmadan, profesyonel saygı konusunda bir algı geliştirilmesi mümkün değildir.",
  },
  {
    id: 5,
    questionText:
      "Aşağıdakilerden hangisi günümüz liderinin rolü arasında sayılamaz?",
    options: [
      "Lider-takipçi arasında ve çalışanlar arasında etkili insan ilişkileri geliştirmek",
      "Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
      "Herkesin kabul edildiği, ait hissettiği, anlamlı bulduğu pozitif iş ortamı yaratmak",
      "Bilgi ve kaynak paylaşımında dürüst, adil ve etik olmak",
      "Paylaşılan bir vizyon yaratmalı ve herkesi buna dahil etmelidir.",
    ],
    correctAnswer:
      "Zaman hareket etütleriyle bir işin daha hızlı nasıl yapılabileceğini analiz etmek",
  },
  {
    id: 6,
    questionText:
      "Aşağıdakilerden hangisi günümüzde insan yönetmeyi zorlaştıran unsurlar arasında sayılamaz?",
    options: [
      "Gücün kötüye kullanımı",
      "Zorbalık, mobbing, taciz",
      "İş yerlerinde çalışan çeşitliliği, farklılık yönetimi sorunları",
      "Vizyona uygun stratejiler belirleme zorunluluğu",
      "Etik olmayan davranışlar",
    ],
    correctAnswer: "Vizyona uygun stratejiler belirleme zorunluluğu",
  },
  {
    id: 7,
    questionText:
      "Vizyon ve vizyoner liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "İşletme yönetiminde vizyon genel olarak 'hayal edilen gelecek', çalışanlar için hedefe ulaşma yolunu gösteren bir harita, ilgili paydaşlar için gelecekle ilgili verilmiş sözdür.",
      "Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
      "Kişilerin (liderlerin) veya kurumların (işletmelerin), kendilerinin gelecekte olmasını arzu ettikleri durumun ifadesidir. Vizyon kurum için bir iddia, bir hayal, bir resim, bir hikayedir.",
      "Vizyoner liderlik en yalın haliyle, net bir vizyon oluşturmak, bunu açıkça ifade etmek, insanlar arasında paylaşılmasını, kabul görmesini ve insanların dahil olmasını sağlamaktır.",
      "Vizyoner liderlik insanlara vizyon aşılayarak motive etmekle ilgilidir.",
    ],
    correctAnswer:
      "Vizyoner liderlik çalışanlara vizyona uygun performanslarını ödüllendirmek, vizyondan sapan davranışları cezalandırmak üzerine kuruludur.",
  },
  {
    id: 8,
    questionText:
      "Dönüşümcü liderlikle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Liderin birincil odağı organizasyondur.",
      "Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
      "İzleyicilerin kişisel gelişimleri organizasyon için neyin iyi olduğu çerçevesinde değerlendirilir, çünkü daha iyi performans gösterilmesi arzulanır.",
      "Liderin organizasyonun amaçlarını kişisel amaçları doğrultusunda manipüle etme ya da çalışanları liderin çıkarları doğrultusundaki amaçlara yönlendirme riski vardır.",
      "Dönüşümcü liderliğin diğer güncel liderlik yaklaşımlarından en önemli farkı, lider ile takipçilerin motivasyonlarını hizalaması, bir başka deyişle izleyicilerin organizasyon ile eş güdülere sahip olmalarını sağlaması olduğu belirtilmektedir.",
    ],
    correctAnswer:
      "Dönüşümcü liderler vizyon oluşturma, yayma, çalışanlar arasında kabulünü sağlama gibi günümüz organizasyonlarının pek çok ihtiyacını karşılayamamakta, bunu etkileşimci liderlik karşılayabilmektedir.",
  },
  {
    id: 9,
    questionText:
      "Aşağıdaki liderlik türünden hangisi Amaç Yol Yaklaşımının ortaya koyduğu sınıflandırmada bulunmaz?",
    options: [
      "Otoriter",
      "Destekleyici",
      "Katılımcı",
      "Başarı odaklı",
      "İstismarcı",
    ],
    correctAnswer: "İstismarcı",
  },
  {
    id: 10,
    questionText:
      "Amaç yol yaklaşımına ilişkin aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      "Motivasyon teorilerinden bekleyişler yaklaşımı ile liderlik teorilerini birleştiren bir bakış açısı sunmaktadır.",
      "Çalışanların işi yapmak için kendilerini yeterli gördüklerinde ve işi tamamlayarak ulaşacakları ödülü arzuladıklarında motive olacakları ve kendi istekleriyle çaba gösterecekleri varsayımına dayanmaktadır.",
      "Liderin rolü çalışanları motive edecek ihtiyaçları karşılamaktır.",
      "Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
      "Çalışan ihtiyaçları gerekli bilgiyi sağlamak, ödüller vermek, amaçları tanımlamak, engelleri kaldırmak, destek sağlamak vb. olabilir. Amaç yol yaklaşımına göre lider çalışanları amaçları gerçekleştirecekleri yolu açıklamakta, yol boyunca onlara eşlik etmektedir.",
    ],
    correctAnswer:
      "Liderin durumsal kontrolü nasıl davranması gerektiğini belirlemektedir.",
  },
  {
    id: 11,
    questionText: "Aşağıdaki cümlelerden hangisi liderlik için doğrudur?",
    options: [
      "Günümüz işletmelerinde bütün liderler yöneticidir.",
      "Formal hakları yöneticiyi etkin liderlik etme konusunda yetkin kılar.",
      "Bütün yöneticiler liderdir.",
      "Bütün liderler takip edenlerinin hiyerarşik olarak üstü konumundadır.",
      "Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
    ],
    correctAnswer:
      "Kendiliğinden ortaya çıkan liderlik, formal etki kadar hatta ondan daha önemlidir.",
  },
  {
    id: 12,
    questionText:
      "Aşağıdakilerden hangisinde liderlik fonksiyonunun değişkenleri tam olarak verilmiştir?",
    options: [
      "yönetici, izleyiciler ve kurallar",
      "yönetici, takipçiler ve değişkenler",
      "veriler, senaryolar ve kurallar",
      "lider, izleyiciler ve koşullar",
      "faaliyet, süreç ve yöntemler",
    ],
    correctAnswer: "lider, izleyiciler ve koşullar",
  },
  {
    id: 13,
    questionText:
      "Tanım olarak liderlik, ........................... sürecidir.",
    options: [
      "Organizasyonel politikalar",
      "Yetki verme",
      "Etkileme",
      "Zorlama",
      "Katılımcı yönetim",
    ],
    correctAnswer: "Etkileme",
  },
  {
    id: 14,
    questionText:
      "Aşağıdakilerden hangisi, liderlerden ziyade yöneticilerden beklenen özellikler arasında sayılabilir?",
    options: [
      "Kontrole dayalı ilişki",
      "Güvene dayalı ilişki",
      "uzun vadeli bakış açısı",
      "İnsanlara ve geleceğe odaklanma",
      "Neden diye sorma ve mevcut duruma meydan okuma",
    ],
    correctAnswer: "Kontrole dayalı ilişki",
  },
];
