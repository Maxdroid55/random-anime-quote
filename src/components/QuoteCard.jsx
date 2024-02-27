import { useState, useEffect } from "react"

export default function QuoteCard() {
  const [quote, setQuote] = useState({})
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
          <footer> - {quote.character} <br />
            Anime: {quote.anime}
          </footer>
        </blockquote>
      </div>
      <button onClick={handleClick}>Generate New Quote</button>
    </>
  )
}