import React from 'react';
import { graphql, navigate } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/layout';





const VideoTemplate = (props) => {

    

    const Content = styled.div`
    max-width: 80rem;
    margin: 3.5rem auto;
    padding: 0 5%;`


    const Iframe = styled.div`
    padding-bottom: 56.25%; 
    position: relative; 
    display: block; 
    width: 100%;`

    const Text = styled.div`
    max-width: 80rem;
    margin: 3.75rem auto;
    padding: 0 10%;
        font-size: 1.1rem;
        line-height: 2rem;
        font-weight: 300;
        margin: 2.5rem 0;`
    
   
     const Title = styled.div`
      font-family: Baskerville,serif;
      text-align: center;
      font-size: 1.5rem;
      line-height: 1.75;
      font-weight: 400;
      margin: 0 0 .6rem 0;`

      const Excerpt = styled.div`  
      line-height: 2rem;  
      font-style: italic; 
       `

    return (

        <Layout> 
         
        <Content>
                        
           
        </Content>
       
        
        </Layout>
    )
}

export default VideoTemplate;



