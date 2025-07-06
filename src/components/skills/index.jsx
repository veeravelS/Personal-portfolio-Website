import React from 'react'
import styled from 'styled-components'
import {skills} from '../../data/constant'

  const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:1;
  justify-content:center;
  align-items:center;
  `;

  const Wrapper = styled.div`
  max-width:1100px;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  width:100%;
  gap:12px;
  `;

  const Title = styled.div`
    font-size:42px;
    font-weight:600;
    text-align:center;
    margin-top:20px;
    color:${({theme})=> theme.text_primary};
    
    @media (max-width:768px){
      font-size:32px;
      margin-top:12px;
    }`;

  const Desc = styled.div`
    font-size:18px;
    max-width:600px;
    text-align:center;
    color:${({ theme })=>theme.text_secondary};
    
    @media(max-width:768opx){
      font-size:16px;
    }`;

  const SkillsContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    margin-top:30px;
    justify-content:center;
    gap:30px;
    margin-bottom:100px;
    `;

  const Skill = styled.div`
    width:100%;
    max-width:500px;
    min-height:300px;
    height:100%;
    background-color:${({theme})=>theme.card};
    border:0.1px solid #854ce6;
    border-radius:16px;
    padding:16px 36px;

    @media (max-width:768px){
      max-width:400px;
      padding:10px 36px;
    }

    @media (max-width:500px){
      max-width:330px;
      padding:10px 36px;
    }
    `;

  const SkillTitle = styled.div`
    font-size:28px;
    font-weight:600;
    text-align:center;
    margin-bottom:20px;
    color:${({theme})=>theme.text_secondary};
    `;

  const SkillList = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:12px;
    margin-bottom:20px;
    `;

  const SkillItem = styled.div`
    display:flex;
    align-item:center;
    gap:8px;
    justify-content:center;
    font-size:16px;
    color:${({theme})=>theme.text_primary + 80};
    border:1px solid ${({theme})=>theme.text_primary + 80};
    border-radius:12px;
    font-weight:400;
    padding:12px 16px;
    
    
    @media (max-width:768px){
      font-size:14px;
      padding:8px 12px;
    };
    
    @media (max-width:500px){
      font-size:14px;
      padding:6px 12px;
    }`;

  const SkillImage = styled.img`
    width:24px;
    height:24px;
    `;


const Skills=()=>{
  return (
    <Container id="skills">
      <Wrapper>
          <Title>Skills</Title>
          <Desc>
            Here are some of my skills which I have been learned in my past years
            </Desc>
          <SkillsContainer>
            {skills.map((item)=>(
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {item.skills.map((skill)=>(
                    <SkillItem>
                      <SkillImage src={skill.image} />
                      {skill.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills