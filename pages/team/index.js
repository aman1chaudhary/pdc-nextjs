import React, { useEffect } from "react";
import { TeamData } from '../../data/CurrentTeamData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Image from "next/image";

const Team = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='main-container'>
            <Head>
                <title>Team | Current Team</title>
                <meta name="description" content="" />

            </Head>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Team</h2>

                </div>
            </header>


            <div className="page-container">



                <section id="team" className="team-area">
                    <div className="row team-items" >

                        {TeamData.map((item,index) => {
                            return (
                                <div className="col-md-3 single-item" key={index} data-aos="fade-up">
                                    <div className="item">
                                        <div className="thumb">
                                            <Image className="Image-general img-fluid" src={item.image} alt="Thumb" />
                                            <div className="overlay">
                                                <h4>{item.name}</h4>
                                                <p>
                                                    {item.bio}
                                                </p>

                                            </div>
                                        </div>
                                        <div className="info">
                                            <span className="message">
                                                {item.email && (
                                                    <a href={`mailto:${item.email}`}><i className="fas fa-envelope-open"></i></a>

                                                )}

                                            </span>
                                            <h4>{item.name}</h4>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section>

            </div>

        </div>
    )
}

export default Team