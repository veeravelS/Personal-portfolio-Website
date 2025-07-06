import React from 'react';
import {styled} from 'styled-components';
import ProjectCard from '../card/projectcard';

    
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    align-items:center;
    z-index:1;
    `;

const Wrapper = styled.div`
    max-width:1100px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100%;
    gap:12px;
    padding:10px 0px 100px 0 `;

const Title = styled.div`
    font-size:42px;
    font-weight:600;
    text-align:center;
    margin-top:20px;
    color:${({theme})=>theme.text_primary};
    `;
const Desc = styled.div`
    font-size:18px;
    max-width:600px;
    margin:0 auto;
    text-align:center;
    color:${({theme})=>theme.text_secondary};
    @media (max-width:768px){
        font-size:16px;
    }`;

const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    gap:28px;
`;

const Projects=()=>{
  return (
    <Container  id="project">
        <Wrapper>
        <Title>Projects</Title>
        <Desc>
            I have worked on a wide range of projects in my web development journey . Here are some of my projects.
        </Desc>
        <CardContainer>
                <ProjectCard />
        </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects