
import React from 'react'
import './portfolio.css'
import DASH from '../../assets/dash.png'
import tree from '../../assets/tree.png'
import santorini from '../../assets/santorini.jpeg'



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Selected Projects</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={DASH} alt='' />
                    </div>
                    <h3>Python Fastapi Dash webapp</h3>
                    <a href="https://github.com/benntuecon/dash-website" className='btn' target='_blank'>GitHub</a>

                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={tree} alt='' />
                    </div>
                    <h3>Bagging neuron network </h3>
                    <a href="https://www.kaggle.com/code/bennbenbenn/random-vnn-forest-credit-card-fraud/notebook" className='btn' target='_blank'>Kaggle</a>

                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={santorini} alt='' />
                    </div>
                    <h3>Santorini broadgame Java clone(working)</h3>
                    <a href="https://github.com/benntuecon/JAVA_santorini" className='btn' target='_blank'>GitHub</a>

                </article>

            </div>
        </section>
    )
}

export default Portfolio