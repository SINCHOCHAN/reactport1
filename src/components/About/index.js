import React from 'react';

import icon from './../../assets/Images/icon.jpg';
import './../../assets/Styles/styles.css';


const About = props => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div className="row border-top border-bottom border-success">
                <div className="col-auto text-success">
                    <h5 className="text-justify-center align-middle">About Me</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4 text-light justify-content-end">
                    <img src={icon} alt="It's Me!!!" className="shadow-lg p-2 mb-5 img-fluid" max-width="100%" height="auto" />
                </div>
                <div className="col text-light text-left">
                <p>
                       My name is Sin Cho Chan,you can call me <strong>Terence</strong>, <br />I love travelling, food, taking picture,lighting and Minions.
                       </p>
                    <p>
                       I graduated in UCBerkeley 2017 summer,after that, I did many freelance work,such as chinese tutor, tour guide.
                       </p>
                    <p>
                       My main responsibility is helping my parent's business which I am business development manager.
                       </p>
                    <p>
                       I haven't any coding background, but I love challenge and learning new stuff.
                        </p>
                    <p>
                       My short-term goal is developing my new carrer and build up my social network.
                    </p>
                    <p>
                        After Coding Bootcamp of UC Berkeley, Extensions to become a <strong>Full Stack Developer</strong>, I may continue my education to learn more about computer engineering.
                    </p>
                    <p>
                        I hope I can get an interns or relevant job to enhance my ability.
                        </p>
                </div>
            </div>
        </div>
    </div>
);

export default About;