import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
import Nav from './components/nav/nav'
import Portfolio from './components/portfolio/portfolio'
import Testimonial from './components/testimonials/Testimonial'


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}

export default App