import styled from "styled-components"

export const Container = styled.div `
    margin: 0 1rem ;

    h1 {
        
         margin: 4rem 0;
    }

   .newsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    
    
   }
   .newsList span img {
        width: 420px;
        height:310px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    .newsList span a {
        color: Gray;
        text-decoration: none;
        font-size: 16pt;
        transition: 1s;
    }

    .newsList span a:hover {
        color: Grey;
    } 

`