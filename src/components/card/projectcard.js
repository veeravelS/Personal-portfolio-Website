import React from 'react'
import {styled} from 'styled-components';
import {projects}  from '../../data/constant';


const Card = styled.div`
    width:340px;
    height:600px;
    background-color:${({theme})=>theme.card};
    cursor:pointer;
    border-radius:10px;
    box-shadow:0 0 12px 4px rgba(0,0,0,0.4);
    overflow:hidden;
    transition:all 0.5s ease-in-out;
    padding:26px 20px;
    display:flex;
    flex-direction:column;
    gap:14px;
    
    &:hover{
        transform:translateY(-10px);
        box-shadow:0 0 50px 4px rgba(0,0,0,0.6);
        filter:brightness(1.1);
    }`;

const Image = styled.img`
    width:100%;
    height:180px;
    background-color:${({theme})=>theme.white};
    border-radius:10px;
    object-fit:cover;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    `;

const Tags = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-top:4px;
    align-item:center;
    `;

const Tag = styled.span`
    font-size:12px;
    font-weight:400;
    color:${({theme})=>theme.primary};
    background-color:${({theme})=>theme.primary+15};
    padding:2px 8px;
    margin:0 5px;
    border-radius:10px;
    gap:20px;`

const Details = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:8px;
    padding:0px 2px;
    `;

const Title = styled.div`
  font-size:20px;
  font-weight:600;
  color:${({theme})=>theme.text_secondary};
  overflow-hidden:
  text-overflow:ellipsis;
  white-space:nowrap;
  max-width:100%;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;`;

const Date = styled.div`
   font-size:12px;
   font-weight:400;
   color:${({theme})=>theme.text_secondary+80};
   @media (max-width:768px){
    font-size:10px;
   }
   `;
  
const Description = styled.div` 
  font-weight:400;
  color:${({theme})=>theme.text_secondary+99};
  -webkit-box-orient:vertical;
  display:-webkit-box;
  margin-top:8px;
  max-width:100%;`;

const ProjectContainer = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  margin-top:30px;
  justify-content:center;
  gap:30px;`;

const ButtonGroup = styled.div`
  display:flex;
  justify-content:end;
  margin:12px 0;
  gap:12px;`;

const Button = styled.a`
  width:100%;
  text-align:center;
  font-size:16px;
  font-weight:600;
  text-decoration:none;
  color:${({theme})=>theme.text_primary};
  padding:12px 16px;
  border-radius:8px;
  background-color:${({theme})=>theme.primary};
  ${({dull,theme})=> dull && `
                background-color:${theme.bgLight};
                color:${theme.text_secondary};
                &:hover{
                  background-color:${({theme})=>theme.bg +99};
                }`
    }
  cursor:pointer;
  transition:all 0.5s ease;
  &:hover{
    background-color:${({theme})=>theme.primary + 99};
  }
  @media only screen and (max-width:600px){
    font-size:12px;
  }
  `


const ProjectCard=()=>{
  return (
    <ProjectContainer>
    {projects.map((project)=>{
      return(
        <Card>
        <Image src={project.image} />
        <Tags>
          {project.tags.map((tag)=>{
            return(
              <Tag>{tag}</Tag>
            )
          })}
        </Tags>
          <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
          </Details>
          <ButtonGroup>
            <Button dull href={project.github} target="new">View Code</Button>
            <Button href={project.webapp} target="new">View Live</Button>
          </ButtonGroup>
        </Card>
      )
      })}
    </ProjectContainer>
    )}


export default ProjectCard