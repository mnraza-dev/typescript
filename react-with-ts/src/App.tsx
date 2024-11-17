import Header from "./components/Header"
import Score from "./components/Score"

const App = () => {
  return (
    <div>
      <Header title={"Quiz App"} subtitle="An app which is use to take self examine of any basic quizes" />
      <Score currentScore={8} totalScore={20} />
    </div>
  )
}

export default App