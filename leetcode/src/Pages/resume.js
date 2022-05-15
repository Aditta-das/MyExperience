import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/resume.css';

class Resume extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <section id="main">
                        <header id="title">
                            <h1>Aditta Das Nishad</h1>
                            <span className="subtitle">North Kashimpur, Punchgachia, Feni, Bangladesh</span><br/>
                            <span className="subtitle"><b>Phone: +8801824967296</b> || <b>Email:</b> <a className="mailLink" href="mailto:aditta.das.nishad@gmail.com"><b>aditta.das.nishad@gmail.com</b></a></span>
                        </header>
                        <section className="main-block">
                            <h2>
                                <i className="fa fa-suitcase"></i> Experiences
                            </h2>
                            <section className="blocks">
                                <div className="date">
                                    <span>2015</span><span>present</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Some Position</h3>
                                        <span className="place">Some Workplace</span>
                                        <span className="location">(remote)</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2014</span><span>2015</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Another Position</h3>
                                        <span className="place">Some Workplace</span>
                                        <span className="location">Some City, Some Country</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2013</span><span>2014</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Yet Another Job Position</h3>
                                        <span className="place">Some Workplace</span>
                                        <span className="location">Some City, Some Country</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="main-block">
                            <h2>
                                <i className="fa fa-folder-open"></i> Selected Projects
                            </h2>
                            <section className="blocks">
                                <div className="date">
                                    <span>2015</span><span>2016</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Some Project 1</h3>
                                        <span className="place">Some workplace</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2014</span><span>2015</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Some Project 2</h3>
                                        <span className="place">Some workplace</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2014</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Some Project 3</h3>
                                        <span className="place">Some workplace</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="main-block concise">
                            <h2>
                                <i className="fa fa-graduation-cap"></i> Education
                            </h2>
                            <section className="blocks">
                                <div className="date">
                                    <span>2009</span><span>2014</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Ph.D. in Forty-Two Discovery</h3>
                                        <span className="place">Inexistent University</span>
                                        <span className="location">Some City, Some Country</span>
                                    </header>
                                    <div>Relationship of the number with the answer to life, the universe and everything</div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2005</span><span>2009</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>LL.B. in H&aelig;matophagic Economics</h3>
                                        <span className="place">Inexistent University</span>
                                        <span className="location">Some City, Some Country</span>
                                    </header>
                                    <div>President's Scholarship</div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2005</span><span>2009</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>B.S. in Existential Science (Double Major)</h3>
                                        <span className="place">Inexistent University</span>
                                        <span className="location">Some City, Some Country</span>
                                    </header>
                                    <div>President's Scholarship</div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Massive Online Fee&ndash;Required Course (selective list)</h3>
                                    </header>
                                    <div className="concise">
                                        <ul>
                                            <li>Introduction to something else</li>
                                            <li>Introduction to some more useless things</li>
                                            <li>Philosophy in practice</li>
                                            <li>Recursive research and its impact on recursive research</li>
                                            <li>Artificial politics</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </>
        );
    }
}

export default Resume;