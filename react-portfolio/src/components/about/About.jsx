import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaDocker, FaReact, FaAws } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import {
    SiNginx, SiPython, SiDjango, SiFastapi,
    SiFlask, SiGithub, SiKubernetes, SiVim, SiScala,
    SiJava, SiCsharp, SiRedis, SiPostgresql, SiJupyter, SiNumpy, SiPandas, SiTensorflow, SiKeras, SiApachespark, SiPlotly,
} from 'react-icons/si'


const About = () => {
    return (
        <section id='about'>
            <h2 >I've been doing projects using ...</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <h2>Machine Learning
                    </h2>
                    <br></br>
                    <div className='about__mes'>
                        <div className='about__me-img'>
                            <SiPython className="icon" />
                        </div>
                        <div className='about__me-img'>

                            <SiJupyter className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiKeras className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiTensorflow className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiPandas className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiNumpy className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <h2 className="icon">ResNet</h2>
                        </div>
                        <div className='about__me-img'>
                            <h2 className="icon">NASNet</h2>
                        </div>
                        <div className='about__me-img'>
                            <h2 className="icon">BERT</h2>
                        </div>
                        <div className='about__me-img'>
                            <SiApachespark className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiScala className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiPlotly className="icon" />
                        </div>
                    </div>
                </div>
                <div className='about__me'>
                    <h2 >Software Engineer</h2>
                    <br></br>
                    <div className='about__mes'>
                        <div className='about__me-img'>
                            <SiPython className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <DiNodejs className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiDjango className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiFastapi className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiFlask className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <FaDocker className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiKubernetes className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <FaAws className='icon' />
                        </div>
                        <div className='about__me-img'>
                            <SiGithub className='icon' />
                        </div>
                        <div className='about__me-img'>
                            <SiVim className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiScala className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiJava className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiCsharp className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiRedis className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiPostgresql className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <SiNginx className="icon" />
                        </div>
                        <div className='about__me-img'>
                            <FaReact className="icon" />
                        </div>
                        <div className='about__me-img'>

                        </div>



                    </div>
                </div>


                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card' >
                            <h5 className='about__card__head'>About experience in Machine learing:</h5>
                            <small className='text'>
                                {"\n"}
                                I am currently a MSDS student in USF, focusing on production-level Machine Learning practices.{"\n"}
                                I've been build both NASnet and ResNet with Tensorflow as a final project in school(undergrad).{"\n"}
                                I applied BERT model for NLP Recommendation system for start-up company that I co-founded.{"\n"}

                            </small>

                        </article>
                    </div>

                    <div className='about__cards'>
                        <article className='about__card' >
                            <h5 className='about__card__head'>About software engineering experience:</h5>
                            <small className='text'>{"\n"} As a self-taught software engineer with over one year experience.
                                I'm really comfortable with all sorts of learning curve(I'm a big fan of Vim by the way).{"\n"}
                                Though I have experience with Java, C#, and Scala, my area of expertise is mainly Python and Javascript.{"\n"}
                            </small>
                        </article>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default About