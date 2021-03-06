import React from 'react'
import styled from 'styled-components'
import { useParams, useNavigate, Link } from "react-router-dom";



function Header() {
    let navigate = useNavigate();

    return (
        <Nav>
            <Link to="/">
                <Logo src="/images/MyLogo.png" />
            </Link>
            <NavMenu>
                <Link to = "/">
                    <img src="/images/home-icon.svg" />
                    <span>Home</span>
                </Link>
                <Link to = 'login'>
                    <img src="/images/original-icon.svg" />
                    <span>About Me</span>
                </Link>
            </NavMenu>
            <UserImg onClick={() => {

                navigate("/login");

            }} src="https://yt3.ggpht.com/ytc/AKedOLQADltt0SdHv64U08B5zuCISyIJjy4wgorAHTdhtw=s900-c-k-c0x00ffffff-no-rj" />
        </Nav>
    )
}



export default Header


const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x : hidden;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left : 20px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor : pointer;
        text-decoration: none;
        color: white;

        img {
            height: 20px;
        }
        span {
            font-size : 13px;
            letter-spacing: 1.42px;
            position : relative;

            &:after {
                content : "";
                background-color : white;
                height : 2px;
                position : absolute;
                left : 0;
                right : 0;
                bottom : -6px;
                opacity : 0;
                transform-origin :  left center;
                transition: all 250ms cubic-bezier(0.25 , 0.46, 0.45, 0.94) 0s;
                transform : scaleX(0);

            }
        }

        &:hover {
            span:after {
                transform : scaleX(1);
                opacity : 1;
            }
        }
    }   

    @media (max-width: 768px) {
        display: none;
    }
`

const UserImg = styled.img`
    height : 48px;
    width : 48px;
    border-radius: 50%;
    cursor : pointer;
`