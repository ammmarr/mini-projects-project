import React from "react";




export default function Card(){
    const [quote,setQuote] = React.useState("I will prepare and some day my chance will come.")
    const [author,setAuthor] = React.useState("Coco Chanel")

    function newQuote(){
        fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
    }
        )
        
    }
    return(
        <div id="quote-box">
        <h2 id="text">{quote}</h2>
        <h6 id="author">{author}</h6>
        
        <div className="btn-a">
            
            
            <a id="tweet-quote" href={`http://www.twitter.com/intent/tweet?text=${quote}-${author}`} target="_blank" >tweet</a>
            <button onClick={newQuote} id="new-quote">New Quote</button>


        </div>
        </div>
    )
}