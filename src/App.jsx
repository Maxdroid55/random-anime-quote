import QuoteCard from "./components/QuoteCard"
import animePic from "./assets/anime-pic.jpg"
import './App.css'

export default function App() {
  return (
    <div id="app--container">
      <div id="left--side">
        <h1>Generate Random Anime Quote</h1>
        <QuoteCard />
      </div>
      <div id="right--side">
        <img id="pic" src={animePic} alt="anime character" />
      </div>
    </div>
  )
}