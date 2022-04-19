import { useEffect, useState } from "react";
import { Quote } from "./components/Quote";
import { Spinner } from "./components/Spinner";


function App() {

  const initialQuote = {
    text: 'Autista',
    author: 'Alex'
  }

  const [quote, setQuote] = useState(initialQuote);
  const [loading, setLoading] = useState(false);

  const api = async () => {
    setLoading(true)
    const response = await fetch('https://www.breakingbadapi.com/api/quote/random')
    const [jsonData] = await response.json()

    const {quote: text, author} = jsonData
    setQuote({
      text,
      author
    })

    setLoading(false)
  }

  useEffect(() => {
    api()
  },[])

  return (
    <div className="app">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
        alt="logo"
      />
      <button onClick={() => api()}>Get Another</button>
      {loading ? <Spinner /> : <Quote quote={quote} />}
    </div>
  );
}

export default App;
