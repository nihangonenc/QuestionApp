import { questions } from "../../questions"
import './ResultSection.css';


function ResultSection({setCurrentPage, correctAnswers, incorrectAnswers}) {
  const emptyQuestion = (questions.length-(correctAnswers.length+incorrectAnswers.length));

  return (
    <>
      <h2 className="analysis">İşte Cevaplarının Analizi</h2>
      <div className="result-area">
          <div className="area">
          <h2>Doğru Cevapların: <span> {correctAnswers.length}  </span> Tane</h2>
          <ul>
            {correctAnswers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
        <div className="area">
          <h2>Yanlış Cevapların: <span>{incorrectAnswers.length} </span> Tane</h2>
          <ul>
            {incorrectAnswers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
        { emptyQuestion !== 0 && (
            <div className="area">
              <h2>Boş Bıraktıkların: <span>{emptyQuestion}</span> Tane</h2>
            </div>
          )
        }
      </div>
      <button id='return' onClick={() => setCurrentPage('start')}>Başlangıç Sayfasına Dön</button>
    </>
  )
}

export default ResultSection
