import { useState } from 'react'
import './App.css'
import StartSection from './components/StartSection/StartSection'
import QuestionCard from './components/QuestionCard/QuestionCard'
import ResultSection from './components/ResultSection/ResultSection'

function App() {
  const [currentPage, setCurrentPage] = useState('start');

  return (
    <div className='main'>
      <h1 className='title'>QUESTION APP</h1>
      {currentPage == 'start' && <StartSection setCurrentPage ={setCurrentPage} />}
      {currentPage == 'question' && <QuestionCard setCurrentPage= {setCurrentPage}/>}
      {currentPage == 'result' && <ResultSection setCurrentPage ={setCurrentPage} />}
    </div>
  )
}

export default App
