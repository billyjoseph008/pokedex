import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import back_arrow from '../images/back_arrow.svg'
import { useTranslation } from "react-i18next";
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const [t, i18n] = useTranslation("global");
    let location = useLocation();
    console.log(location.pathname);

    return (
        <Nav>
            {
                location.pathname == "/" ? null : <StyledLink to='/'><img src={back_arrow} />{t("pokemonList.back")}</StyledLink>
            }

            <img src={logo} alt="Pokemon Logo" />
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
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
    select{
        display: flex;
        top: 0;
        right: 0;
        position: absolute;
        margin: 1rem;
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

