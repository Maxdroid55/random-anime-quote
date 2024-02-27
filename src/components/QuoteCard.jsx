import { useState, useEffect } from "react"
import './QuoteCard.css'

export default function QuoteCard() {
  const [quote, setQuote] = useState({
    anime: "Naruto",
    quote: "This world shall know pain",
    character: "Pain"
  })
  const [changeQuote, setChangeQuote] = useState(false)

  useEffect(() => {
    fetch("https://animechan.xyz/api/random")
      .then(res => res.json())
      .then(data => setQuote(data))
      .catch(e => console.log(e.message))
  }, [changeQuote])

  function handleClick() {
    setChangeQuote(!changeQuote)
  }

  return (
    <>
      <div className="card">
        <blockquote>
          <p>{quote.quote}</p>
          <footer> - {quote.character} <br /><br />
            Anime: {quote.anime}
          </footer>
        </blockquote>
        <button onClick={handleClick}>Generate New Quote</button>
      </div>
    </>
  )
}