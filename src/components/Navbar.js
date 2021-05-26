import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../images/logo.svg'
import back_arrow from '../images/back_arrow.svg'

const Navbar = () => {

    return (
        <Nav>
            <StyledLink to='/'><img src={back_arrow} />Back</StyledLink>
            <img src={logo} alt="Pokemon Logo" />
        </Nav>
    )
}

export default Navbar;

export const Nav = styled.div`
    background-color: red;
    align-items: center;
    text-align: center;
    padding: 1rem 0;
    img{
        width: 30%;
        height: 30%;

    }
`
export const StyledLink = styled(Link)`
        display: flex;
        top: 0;
        left: 0;
        padding: 1rem;
        position: absolute;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        img{
            width: 40px;
            height: 40px;
        }
`

