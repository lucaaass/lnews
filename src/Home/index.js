
import { useState, useEffect } from "react";
import { APIKey } from "../config/key";
import { Container } from "./styles";




function Home(){

   const [news, setNews] = useState([]);
 
   useEffect(() => {
    // consumir api

  fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKey}`)
  .then(response => response.json())
  .then(data =>{

      console.log(data.articles) 
       setNews(data.articles)

  })

     },[])


  return (
  <Container>
    <div className="newsList">
          {news.map(article => {
                    return(
                        <div key={article.id}>
                          
                       <h1>{article.title}</h1>
                        <span> <img src={article.urlToImage} alt={article.title} /> </span>
                        <p>{article.description}</p>
                        <span><a href={article.url} >Ver o conteudo</a></span>
                        <p>{article.publishedAt}</p>
                        </div>
                    )
                })}

  </div>
  </Container>
  )
}

export default Home;