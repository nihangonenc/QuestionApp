import './StartSection.css'

function StartSection({ setCurrentPage }) {
    
  return (
    <div className='start'>
      <h2>Hoş Geldin</h2>
      <p>Burada seni birbirinden eğlenceli 10 tane soru bekliyor. <br /> Dikkat etmen gereken sadece iki kural var. <br /> Her bir soruyu 30 saniye içinde cevaplaman gerekli. <br /> Ve geçtiğin sorulara geri dönemiyorsun. <br /> Karşına çıkacak 4 şıktan sana en doğru geleni seçerek ilerleyebilirsin. <br /> Test bittikten sonra analiz kısmını incelemeyi unutma!</p>
      <h3>İyi Eğlenceler</h3>
      <button id='start' onClick={() => setCurrentPage('question')}>Testi Başlat</button>
    </div>
  )
}

export default StartSection
