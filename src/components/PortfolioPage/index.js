import React from 'react';

//images imported from assets
import WeatherDashboard from './../../assets/Images/weather.png';
import Project02 from './../../assets/Images/project02.png';
import EmployeeDirectory from './../../assets/Images/employeedirectory.png';
import Project01 from './../../assets/Images/project01.JPG';
import Fitness from './../../assets/Images/fitness.png';
import Scheduler from './../../assets/Images/scheduler.png';



const PortfolioPage = (props) => (
    <div className="ownBackground">
        <div className="container well">
            <br />
            <div>
                <div className="row border-top border-bottom border-success">
                    <div className="col-auto text-success">
                        <h5 className="text-justify-center align-middle">Portfolio</h5>
                    </div>
                </div>
            </div>
            <br />

            <div className="container well" id="customTextOnCard">
                <div className="row">
                    <div className="col-6 flexbox d-none d-md-block">

                        <div className="card text-white bg-success mb-3">
                            <a href="https://github.com/SINCHOCHAN/05homework" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Scheduler} alt="Scheduler" />
                            </a>
                            <div className="card-header">Work Day Scheduler</div>
                        </div>

                        <div className="card text-info bg-light mb-3">
                            <a href="https://morning-savannah-56811.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={EmployeeDirectory} alt="Employee Directory"/>
                            </a>
                            <div className="card-header">Employee Directory</div>
                        </div>

                        <div className="card text-light bg-danger mb-3">
                            <a href="https://sinchochan.github.io/project01/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Project01} alt="Project01" />
                            </a>
                            <div className="card-header">Project01</div>
                        </div>

                    </div>

                    <div className="col-6 flexbox d-none d-md-block">
                        <div className="card text-white bg-secondary mb-3">
                            <a href="hhttps://mysterious-peak-04692.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Fitness} alt="Fitness Tracker" />
                            </a>
                            <div className="card-header">Fitness Tracker</div>
                        </div>

                        <div className="card text-white bg-secondary mb-3">
                            <a href="https://sinchochan.github.io/06homework/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={WeatherDashboard} alt="Weather Dashboard" />
                            </a>
                            <div className="card-header">Weather Dashboard</div>
                        </div>

                        <div className="card text-white bg-secondary mb-3">
                            <a href="https://guarded-escarpment-04692.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img-top shadow-lg p-2 mb-5 img-fluid" src={Project02} alt="Project02" />
                            </a>
                            <div className="card-header">Project02</div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="container well d-md-none">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <a href="https://github.com/SINCHOCHAN/05homework"  target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={Scheduler} alt="First slide" />
                            </a>
                        </div>
                        {/* friendcard exercise map*/}
                        <div className="carousel-item">
                            <a href="https://morning-savannah-56811.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={EmployeeDirectory} alt="Second slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://sinchochan.github.io/project01/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={Project01} alt="Third slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://fathomless-beach-32026.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={Fitness} alt="Fourth slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://sinchochan.github.io/06homework/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={WeatherDashboard} alt="Fifth slide" />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="https://guarded-escarpment-04692.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="d-block w-100" src={Project02} alt="Sixth slide" />
                            </a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

)

export default PortfolioPage;