import china from './pictures/cin-seddi.jpg';
import cotton from './pictures/pamuk.jpg';
import tarkan from './pictures/tarkan.jpg';
import phobia from './pictures/fobi.jpg';
import fish from './pictures/balik.jpg';
import singer from './pictures/bandira.jpg';
import billboard from './pictures/billboard.jpg';
import perfume from './pictures/parfum.jpg';
import trex from './pictures/trex.jpg';
import happiness from './pictures/mutluluk.jpg';

export const questions = [
  { id: 1,
    question: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    options: ["Bambu Harcı", "Anne Duası", "Pirinç Unu", "Noodle"],
    answer: "Pirinç Unu",
    media: china
  },
  {
    id: 2,
    question: "İlk Pamuk şekeri bulan kişinin mesleği nedir?",
    options: ["Gıda Mühendisi", "Diş Doktoru", "Ev Hanımı", "Güzellik Uzmanı"],
    answer: "Diş Doktoru",
    media: cotton
  },
  {
    id: 3,
    question:
      "Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamada bulunan kişi kimdir?",
    options: ["Gülben Ergen", "Hülya Avşar", "Harika Avcı", "Sevtap Parman"],
    answer: "Gülben Ergen",
    media: tarkan
  },
  {
    id: 4,
    question: "Pteronofobi nedir?",
    options: [
      "Yeşil ışık yanar yanmaz korna çalacak korkusu",
      "Fakir kalma korkusu",
      "Taksi bulamama korkusu",
      "Kuş tüyüyle gıdıklanma korkusu",
    ],
    answer: "Kuş tüyüyle gıdıklanma korkusu",
    media: phobia
  },
  {
    id: 5,
    question:
      "Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
    options: ["43", "78", "23", "99"],
    answer: "43",
    media: fish
  },
  {
    id: 6,
    question:
      "90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
    options: ["Sezen Aksu", "Sibel Can", "Mustafa Sandal", "Bülent Ersoy"],
    answer: "Mustafa Sandal",
    media: singer
  },
  {
    id: 7,
    question:
      "Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
    options: ["Hande Yener", "Hadise", "Gülşen", "Simge"],
    answer: "Hadise",
    media: billboard
  },
  {
    id: 8,
    question: "Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
    options: ["Gül Suyu", "Bal", "Gladyatör Teri", "Kan"],
    answer: "Gladyatör Teri",
    media: perfume
  },
  {
    id: 9,
    question: "T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
    options: ["İnekler", "Tavuklar", "Timsahlar", "Köpekler"],
    answer: "Tavuklar",
    media: trex
  },
  {
    id: 10,
    question:
      "Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
    options: ["Çerofobi", "Euphobia", "Felicifobia", "Mutluluk Korkusu"],
    answer: "Çerofobi",
    media: happiness
  }
]
