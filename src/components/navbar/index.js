/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import  {DiCssdeck} from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import {Bio} from '../../data/constant';
import {darkTheme} from '../../utlis/Theme'

const Nav = styled.div`
  background-color:${({theme}) => theme.card_light};
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.1rem;
  position:sticky;
  top:0;
  z-index:10;
  @media screen and (max-width:960px){
    transition:0.8s all ease;
  }
  `;

  const NavContainer = styled.div`
  display:flex;
  justify-content:space-between;
  height:60px;
  z-index: 1;
  width:100%;
  padding:0 24px;
  max-width:1200px;
  `;

  const NavLogo = styled.a`
  width:80%;
  display:flex;
  justify-self:flex-start;
  align-items:center;
  cursor:pointer;
  padding: 0 6px;
  text-decoration:none;
  @media screen and (max-width:648px){
    padding:0 0px;
  }
  `;

  const MobileIcon=styled.div`
  display:none;
  @media screen and (max-width:640px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,50%);
    font-size:1.8rem;
    cursor:pointer;
    color:${({theme})=>theme.text_primary}
  }
  `;

  const NavItems = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:32px;
  list-style:none;
  @media screen and (max-width:768px){
    display:none;
  }
  `;

  const NavLink = styled.a`
  color :${({ theme })=> theme.text_primary};
  font-weight:500;
  cursor:pointer;
  text-decoration:none;
  transition:all .5s ease-in-out;
  padding:0 16px;
  &:hover{
    color:${({theme})=>theme.primary}
  }
  `;

   const ButtonContainer = styled.div`
   display:flex;
   align-items:center;
   justify-content:end ;
   width:80%;
   height:100%;
   padding:0 6px;
   @media screen and ( max-width:640px){
    display:none;
   }
   `;

    const ResumeButton = styled.a`
    background-color:transparent;
    color:${({theme})=>theme.primary};
    border:1.8px solid ${({theme})=>theme.primary};
    border-radius:20px;
    justify-content:center;
    align-items:center;
    padding:8px 20px;
    text-decoration:none;
    font-size:1rem;
    font-weight:500;
    cursor:pointer;
    height:70%;
    transition:all 0.5s ease;
    &:hover{
      background-color:${({ theme })=>theme.primary};
      color:${({ theme })=>theme.white};
    }

    @media screen and (max-width:640px){
      font-size:0.8rem;
      padding:0 10px;
    }
    `;

    const Span = styled.span`
    padding:0 4px;
    font-weight:bold;
    font-size:18px;
    `;

    const MobileMenu = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:16px;
    position:absolute;
    top:70px;
    right:0;
    width:100%;
    padding:42px 40px 24px 40px;
    background:${({ theme })=>theme.card_light+99};
    transition:all 0.3s ease-in-out;
    transform : ${({open})=>(open ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 0 20px;
    box-shadow:0 5px 10px rgba(0,0,0,0.3);
    opacity:${({open})=>(open ? '1':'0' )};
    z-index : ${({open})=> (open ? '1' : '-1')};
    @media(min-width:960px){
      display:none;
    }
    `;

    const MobileMenuLinks = styled.a`
    color:${({theme})=>theme.text_primary};
    font-weight:500;
    cursor:pointer;
    text-decoration:none;
    transition: all 0.2s ease-in-out;
    &:hover{
      color:${({theme})=>theme.primary};
    }
    `;

  const ResumesButton = styled.a`
    margin-top:10px;
    border-radius:50px;
    text-decoration:none`;
 
const Navbar = ()=>{
  const [open,setOpen] = React.useState(false);
  return(
  <Nav>
  <NavContainer>
  <NavLogo href={Bio.github}>
  <a style={{
          display:"flex",
          alignItems:"center",
          color:"white",
          marginBottom:"20",
          cursor:"pointer",
        }}><DiCssdeck size="3rem" /><Span>Portfolio</Span></a>
  </NavLogo>
  <MobileIcon>
    <FaBars 
      onClick = {() => {
        setOpen(!open);
      }}>
    </FaBars>
  </MobileIcon>
  <NavItems>
  <NavLink href="#about">About</NavLink>
  <NavLink href="#skills">Skills</NavLink>
  <NavLink href="#project">Projects</NavLink>
  <NavLink href="#education">Education</NavLink>
  </NavItems>
  <ButtonContainer>
    <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
  </ButtonContainer>
  </NavContainer>
  {
    open && <MobileMenu open={open}>
      <MobileMenuLinks 
      href="#about"
      onClick={()=>{
        setOpen(!open)
      }}>About
      </MobileMenuLinks>
      <MobileMenuLinks 
      href="#skills"
      onClick={()=>{
        setOpen(!open)
      }}>Skills
      </MobileMenuLinks>
      <MobileMenuLinks
      href="#project"
      onClick={()=>{
          setOpen(!open)
      }}>Project
      </MobileMenuLinks>
      <MobileMenuLinks 
      href="#education"
      onClick={()=>{
        setOpen(!open)
      }}>Education
      </MobileMenuLinks>
      <ResumesButton style={{
        padding:"10px 16px",
        background:`${darkTheme.primary}`,
        color:"white",
        width:"max-content",
      }} href={Bio.resume} target="display">Check Resume</ResumesButton>
    </MobileMenu>
  } 
  </Nav>
  )
};

export default Navbar 