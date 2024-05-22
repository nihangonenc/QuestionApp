import './QuestionCard.css';
import { questions } from '../../questions';
import { useEffect, useState } from 'react';
import ResultSection from '../ResultSection/ResultSection';


function QuestionCard({setCurrentPage}) {
  const [questionIndex, setQuestionIndex] = useState(0); 
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    const showOptions = setTimeout(() => { // 10 saniye sonra şıkları gösterir
      setIsShowOptions(true);
    }, 10000); 
    
    const changeQuestion = setTimeout(() => { // 30 saniye sonra soruyu değiştirir
      setQuestionIndex((index) => (index + 1));
      setIsShowOptions(false);
    }, 30000); 

    return () => { // Temizlik işlemi
      clearTimeout(showOptions);
      clearTimeout(changeQuestion);
    };
  },[questionIndex]);

  const handleClick = (selectedOption) => {
    if(typeof questions[questionIndex] != 'undefined'){
      if (selectedOption === currentQuestion.answer) {
        correctAnswers.push(selectedOption);
        setCorrectAnswers([...correctAnswers]);
        console.log(correctAnswers);
      } else {
        incorrectAnswers.push(selectedOption);
        setIncorrectAnswers([...incorrectAnswers]);
        console.log(incorrectAnswers);
      }
      // Bir sonraki soruya geçer
      setQuestionIndex((index) => (index + 1));
      setIsShowOptions(false);
    }
  };
  
  return (
    <div className='main-question'>
      {questionIndex < questions.length ? (
        <div className="card">
          <h1>Soru {questionIndex+1}</h1>
          {currentQuestion.media && (
            <img className="image-area" src={currentQuestion.media} alt="questionImage" />
          )}
          <div>
            <div className="question-area">
              {currentQuestion.question}
            </div>
            {isShowOptions && (
              <div className="option-area">
                {currentQuestion.options.map((option, index) => (
                  <button
                    className="option"
                    key={index}
                    onClick={() => handleClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <ResultSection
          setCurrentPage={setCurrentPage}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </div>
  );
}

export default QuestionCard
