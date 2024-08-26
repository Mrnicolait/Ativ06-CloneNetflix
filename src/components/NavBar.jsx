import styled from 'styled-components';
import logo from '../Images/netflix-logo-png-2583.png'
import { IoIosNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import photo from '../Images/avatar.png'
import { Link } from 'react-router-dom';



const Header = styled.div `
background-color: #00000069;
height: 80px;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
`
const Img = styled.img `
width: 150px;
`

const Nav = styled.nav `
display: flex;
justify-content: space-between;
`
const Ul = styled.ul `
display: flex;
gap: 25px;
padding: 16px;

`
const Li = styled.li `
list-style: none;
font-weight: 500;
color: white;
text-transform: uppercase;
font-size: 20px;
overflow: hidden;
`
const Menager = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`
const Profile = styled.div `
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;
`
const Button = styled.button `
background-color: transparent;
text-align: center;
color: #fff;
font-size: 18px;
padding: 6px;
border: none;

`
const Photo = styled.img `
width: 40px;
`

const H4 = styled.h4 `
color: #fff;
`
const Span = styled.span `
`



function NavBar (){
    return (

        <Header>
            <Link to='/'><Img src={logo} alt="logo netflix" /></Link>
            <Nav >
              <Ul>
                <Li >Home</Li>
                <Li >TV Shows</Li>
                <Li >Movies</Li>
              </Ul>
            </Nav>
            <Menager>
            <Button><FaSearch color='#fff' size={30}/></Button>
            <Button style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              gap: '8px', 
                              padding: '10px 20px',
                              fontSize: '16px' }}>
            <FaHeart color='#fff' size={30}/>My List</Button>
            <Button><IoIosNotifications color='#fff' size={30}/></Button>
            <Profile>
                <Photo src={photo} alt="" />
                <H4>Marcelo Nicolait</H4>
                <Span><IoMdArrowDropdown color='#fff' size={30}/></Span>
            </Profile>
            </Menager>
        </Header>

    )
}

export default NavBar;