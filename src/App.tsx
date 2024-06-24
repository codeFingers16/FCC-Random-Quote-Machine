import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const  geRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

 const getRandomColor = (): string => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    return `rgb(${red}, ${green}, ${blue})`;
  
  }
const transition = "all 1s";
function App() {
  const [quote, setQuote] = useState<Quote>(geRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(geRandomQuote());
    setRandomColor(getRandomColor());
  }

 
  return (
    <>
    <div className="background" style={{backgroundColor: randomColor, transition}}>
    <div id="quote-box">
      <div className='quote-content' style={{color: randomColor, transition}}>
        
        <h2 id="text">
<FaQuoteLeft size="30" style={{marginRight: "10px", transition}} />

          {quote.quote}
         <FaQuoteRight size="30" style={{marginLeft: "10px", transition}} /> 

        </h2>
        
        <h4 id="author">
          -{quote.author}
        </h4>
      </div>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote" style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition
        }}>
          <FaTwitter color='white'/>
        </a>
        <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>
          Change Quote
        </button>
      </div>
      </div>
    </div>
    </>
  );

  
}

export default App;
