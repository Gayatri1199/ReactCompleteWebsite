import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu , CgClose } from "react-icons/cg";
import { useCartContext } from '../context/cart_context';

const Nav = () => {

const [menuIcon, setMenuIcon] = useState();   
const {total_item} = useCartContext(); 

const Nav = styled.nav`
    .navbar{
        &.active{
            background:red;
            .mobile-navbar-btn{
                .close-outline{
                    display:inline-block;
                    position: absolute;
                    right: 15px;
                    z-index: 999;
                }
            }
        } 

    }
    

    .navbar-lists{
        display:flex;
        gap:4.8rem;
        align-items:center;

    .navbar-link{
        &:link,
        &:visited{
            display:inline-block;
            text-decoration:none;
            font-size:1.8rem;
            font-weight:500;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black}
            transition: color 0.3s linear;
        }


        &:hover,
        &.active{
            color: #8490ff;
        }
    }

}

.mobile-navbar-btn{
    display:none;
    background-color:transparent;
    cursor: pointer;
    border: none;
}

.mobile-nav-icon[name="close-out"]{
    display: none;
}

.close-outline{
    display:none;

    @media screen and (max-width:1260px){
    //     display: inline-block !important;
    // position: absolute;
    // z-index: 999;
    // right: 0;
    }
}

.cart-trolley--link{
    position: relative;
    font-size:3.2rem;
}

.cart-total--item{
    width: 18px;
    height: 18px;
    position: absolute;
    background: #a39cf6;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-size: 12px;
    position: absolute;
    top: -9px;
    left: 10px;

    @media screen and (max-width:1260px){
        width: 28px;
        height: 28px;
        top: -7px;
        left: 26px;
    }

}

@media (max-width : 1260px){
    .mobile-navbar-btn{
        display:inline-block;
        z-index:9999;
        border: ${({theme})=> theme.colors.black};

        .mobile-nav-icon{
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.black}
        }

        .active .mobile-nav-icon{
            display:none;
            font-size: 4.2rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index:999;
        }

        .active .close-outline{
            display: inline-block;
        }

    }

        .navbar-lists{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color:#fff;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            visibility :hidden;
            opacity: 0;
            transform : translateX(100%);
            transition : all 3s linear;
        }

        .active .navbar-lists{
            visibility:visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            transition: all 3s linear;

            .navbar-link{
                font-size: 4.2rem;
            }
        }

    }
}


`


  return (
    <Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
                <li>
                    <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="navbar-link  cart-trolley--link" onClick={() => setMenuIcon(false)}>
                        <FiShoppingCart  className='cart-trolley'/>
                        <span className='cart-total--item'>{total_item}</span>
                    </NavLink>
                </li>
            </ul>

            {/* two button for open and close of menu */}
            <div className='mobile-navbar-btn'>
                <CgMenu name="menu-outline" className='mobile-nav-icon'
                   onClick={() => setMenuIcon(true)} 
                />
                <CgClose name="close-outline" className='mobile-nav-icon close-outline'
                onClick={() => setMenuIcon(false)}
                />
            </div>

        </div>
    </Nav>
  )
}

export default Nav