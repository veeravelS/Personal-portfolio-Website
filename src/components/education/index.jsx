import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constant';
import EducationCard from '../card/educationcard';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:1;
  justify-content:center;
  align-items:center;
  padding:40px 0px 80px 0px;

  @media(max-width:960px){
    padding:0;
  }
   @media(max-width:468px){
    padding:0;
    justify-content:center;
   }
   @media(max-width:350px){
     width:320px;
   }
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
    
    @media(max-width:768px){
      font-size:16px;
    }`;

  const TimeLineSection = styled.div`
    width:100%;
    max-width:1000px;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:12px;
    
    `;
  

const Education=()=>{
  return (
    <Container id="education">
      <Wrapper>
      <Title>Education</Title>
      <Desc>Here are some of my education</Desc>
      <TimeLineSection>
        <Timeline>
          {education.map((education,index)=>{
            return(
              <TimelineItem>
                <TimelineContent sx={{py:"12px",px:2}}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot varient="outlined" color="secondary" />
                  {index !==education.length-1 && 
                  <TimelineConnector />}
                </TimelineSeparator>
              </TimelineItem>
            )
          })}
        </Timeline>
      </TimeLineSection>
      </Wrapper>
    </Container>
  )
}

export default Education