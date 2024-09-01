import React, { useEffect, useState } from 'react'

import { Row, Col } from 'react-bootstrap';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { HiOutlineChevronRight  } from "react-icons/hi";

import { Link  } from 'react-router-dom'

import titleimg from '../../assets/images/startup.svg'
import { Fade, Slide } from 'react-awesome-reveal';

import {
  HomeContainer,
  HomeLeft,
  HomeRight,
  Image,
  HomeWrapper,
  HomeFirst,
} from "./HomeElements";


function Home() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
    
  },[])

  return (
    <>
    

{/* better setup */}

    <main >
      {/* navbar */}
      <Navbar className="sticky-nav bg-body-secondary p-4" style={{position:'sticky', top: 0, zIndex:'900'}}>
      <Container>
      <img src="https://res.cloudinary.com/dc13zibyc/image/upload/v1719710607/hpi6y4dukwyalabnyw1k.png" 
              width="35"
              height="35"
              className="d-inline-block align-top"
              alt="shelf logo" />
        <Navbar.Brand href="/" className='fw-bold' style={{color:'#6f37b7'}}>SHELF</Navbar.Brand>
        <Navbar.Toggle />
        
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
            By Jithin
          </Navbar.Text> */}
          {isLoggedIn? <Link to={'/profile'} style={{color:'#8c50ff'}} ><i class="fa-brands fa-slack fa-2x"></i></Link> :
          <>
          <Link to={'/register'} className='btn btn-link' style={{textDecoration:'none'}}>Register</Link>
          <Link to={'/login'} className='btn btn-primary' style={{boxShadow:'0px 5px 10px 1px rgba(114, 124, 245, 0.15)'}}>Login</Link>
          </>
          }
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* body */}
      <HomeContainer id="home">
        <HomeWrapper>
        <HomeFirst>
            <Slide>
              <Image
                src={titleimg} alt="title image"
              />
            </Slide>
          </HomeFirst>
          <HomeLeft >
            <Slide>
            <h1 style={{fontSize:'55px'}} className='align-items-left fw-bold'>Inventory & Stock Management Solution</h1>
            <p className='text-dark'>Welcome to our Inventory and Stock Management Website, your one-stop solution for efficient and seamless inventory management. Our platform is designed to help businesses of all sizes effectively track and manage their inventory in real-time.</p>
            {/* <Link to={'/'} className='btn btn-success shadow'>Go To Dashboard</Link> */}
            {/* <Link to={'/login'} className='btn btn-success btn-lg me-5' style={{boxShadow:'0px 5px 10px 1px rgba(10, 207, 151, 0.15)'}}>Explore <HiOutlineChevronRight  /></Link> */}

      {isLoggedIn? <Link to={'/products'} className='btn btn-success btn-lg shadow ' style={{boxShadow:'0px 5px 10px 1px rgba(10, 207, 151, 0.15)'}}>Go To Dashboard <HiOutlineChevronRight  /></Link>:
      <Link to={'/login'} className='btn btn-success btn-lg me-5 ' style={{boxShadow:'0px 5px 10px 1px rgba(10, 207, 151, 0.15)'}}>Explore <HiOutlineChevronRight  /></Link>
      }
            </Slide>

          </HomeLeft>
          <HomeRight>
            <Fade delay={500} cascade damping={0.1}>
              <Image
                src={titleimg} alt="title image" 
              />
            </Fade>
          </HomeRight>
        </HomeWrapper>
        
      </HomeContainer>
    </main>



    </>
  )
}

export default Home
