import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    HELLO, I'M
                </h5>
                <h1>
                    Ben Chen
                </h1>
                <h5 className='text-light'>
                    A data scientist and web developer
                </h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt='me' />
                </div>

                <a href='#contact' className='scroll__down'> Scroll Down</a>
            </div>

        </header >
    )
}

export default Header