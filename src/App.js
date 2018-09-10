import React, { Component } from 'react';
import {ContextMenu} from 'primereact/contextmenu';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';
import './index.scss';

import Trianglify from 'trianglify';
import registerServiceWorker from './registerServiceWorker';

const background = () => {
  var leftSide = document.getElementById('left-side');
  var pattern = Trianglify({
    height: leftSide.clientHeight,
    width: leftSide.clientWidth,
    cell_size: 250,
    x_colors: ['#3B5168', '#364b60', '#3F5870', '#445E79', '#496481', '#4D6B89', '#527191']
  });

  leftSide.setAttribute('style', 'background-image: url\(' + pattern.png() + '\)');
}

const backEndSkills = <ul className='list-skills vertical ml-5'>
  <li>Ruby on Rails</li>
  <li>PostgresQL | MySQL</li>
  <li>Sidekiq | Resque | Redis</li>
  <li>Heroku | AWS | Digital Ocean | Capistrano</li>
  <li>Node.js | React | ES 6 JS</li>
  <li>Devise | ActiveAdmin | Warden</li>
  <li>Gmail API | Mailgun API | </li>
  <li>Marketing Automation</li>
  <li>Business/Web Analytics</li>
  <li>Server Maintenance</li>
  <li>Custom Technical Tools</li>
  <li>DNS Management</li>
  <li>DevOps Knowledge</li>
  <li>Windows | OSX | Linux</li>
  <li>E-commerce</li>
  <li>Git</li>
</ul>

const frontEndSkills = <ul className="list-skills vertical ml-5">
  <li>HTML5 | CSS 3</li>
  <li>Adobe Suite (PS, IL, AE, PP, etc.)</li>
  <li>SASS | Compass | Postcss</li>
  <li>React JS | Node.js</li>
  <li>ES 6 JavaScript | jQuery</li>
  <li>Web Animation</li>
  <li>Jasmine | Mocha</li>
  <li>Responsive Web Design</li>
  <li>Foundation | Bootstrap | Custom Styles </li>
  <li>Modern Responsive Standards</li>
  <li>Webpack | Bundler | Various Builds</li>
  <li>Html Canvas | WebGL | HTML Graphics Tools</li>
  <li>Hardware Aceleration</li>
  <li>OSX | Windows | Linux</li>
  <li>Git</li>
</ul>

class App extends Component {
  render() {
    return (
      <div className="App container">
        <main data-equalizer>
          <section id="left-side" className="columns large-4 medium-5 small-12 left" data-equalizer-watch>
            <section className="hexagon-container">
              <figure className="hexagon hexagon-image">
                <div className="inner">
                  <h1 className='initials'>IB</h1>
                </div>
              </figure>
              <figure className="hexagon hexagon-background">
                <div className="inner">
                </div>
              </figure>
              <figure className="hexagon hexagon-background-dark">
                <div className="inner">
                </div>
              </figure>
            </section>
            <h2 className="name">Isaac <strong>Bell</strong></h2>
            <h3 className="job-titles">
             Sr. Full-Stack Developer
            </h3>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-user"></i>
              </div>
              <h3>Contact Info</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              <ul className="list-icons">
                <li>
                  <div className=" hexagon-icon-fill-small reset-left-margin">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <p>Denver, CO</p>
                </li>
                <li>
                  <div id='phone_icon' className="hexagon-icon-fill-small">
                    <i className="fa fa-phone"></i>
                  </div>
                  <p>
                    <a href="tel:3343548389">334.354.8389</a>
                  </p>
                </li>
                <li className=''>
                  <div className=" hexagon-icon-fill-small">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <p>
                    <a className='' href="mailto:isaacbell388@gmail.com?subject=Let's Get In Touch">Email Me</a>
                  </p>
                </li>

                <li>
                  <div id='linkedin_icon' className="hexagon-icon-fill-small">
                    <i className="fa fa-linkedin-square"></i>
                  </div>
                  <p>
                    <a href="https://linkedin.com/in/bellisaac"> Let's Connect!</a>
                  </p>
                </li>
              </ul>
            </section>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-code"></i>
              </div>
              <h3>Front-End Skills</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              { frontEndSkills }
            </section>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-code-fork"></i>
              </div>
              <h3>Back-End Skills</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              { backEndSkills }
            </section>
          </section>
          <section id="right-side" className="columns large-8 medium-7 small-12 right" data-equalizer-watch>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <h3>Experience</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              <ul className="list-experience">
                <li>
                  <label>Smart-R-Mail <br className='visible-sm'/><span>/ JUL 2017 - PRESENT </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>Sr. Rails/Backbone Developer</strong>
                    <br/>
                    Took lead on the business, technical, and design processes of a marketing automation and email design suite with thousands of recurring users/customers. Handled 3-5 million messages, marketing campaigns, and data queues processed on a daily basis.

                    <br/>Improved the product's performance on message deliverability, domain and IP reputation, SEO, and spam prevention from initially below target to exceeding previously-assumed limits within 90 days. Oversaw scaling as the back end interface was upgraded from legacy to modern standards.<br/>

                    <br/>Developed and maintained a new secondary system for power users, including an admin interface and an intertwined data layer. Overhauled entire system, including full system upgrade, application refactoring, API re-write, and a new security interface.<br/>

                    <br/>Acted as a 24-hour interface for both prospects and customers, handling approx. 75 conversations a day. Served as real-time direct point of contact (via phone, email, and chat) for an international customer base at all hours of the day. Provided business and legal copy-writing including contracts, legal documents, and signed agreements/proposals. Provided in-depth consultations on advanced email marketing strategy and best practices.<br/>

                    <br/><strong>Tools:</strong> Rails 3/4, Backbone, Rspec, Redis, Active Admin, Sidekiq, Resque, Devise, Slim, Sass<br/>
                  </p>
                </li>
                <hr/>
                <li>
                  <label>Rivur <br className='visible-sm'/><span>/ SEP 2016 - JUN 2017 </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>Sr. React/Rails Developer</strong>
                    <br/>
                    Architected and implemented an enterprise capital real estate management platform using Rails and React.

                    <br/>Operated as part of a talented 3-man team along with a UI/UX designer and a top Rails expert.<br/>

                    <br/>Rolled out a lightweight internal front-end framework.<br/>

                    <br/>Extensively used finite state machines in Rails 5 to abstract away much of the complexity involved in the domain. <br/>

                    <br/><strong>Tools:</strong> Rails 5, React, Sass/PostCss, Karma, Mocha, Rspec, Material Design<br/>
                  </p>
                </li>
                <hr/>
                <li>
                  <label>Freelance IT Solutions <br className='visible-sm'/><span>/ AUG 2014 - JUN 2015 </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>Project Manager</strong>
                    <br/>
                    Planned and coordinated online business projects, from full business oversight and staffing to coordination and management of freelance venture projects.

                    <br/>Interfaced directly with clients to negotiate all project parameters, including milestones, revenue strategy, design considerations, and launch requirements.<br/>

                    <br/>Clients included the Alabama Real Estate Commission and the International Association of Special Investigation Units.<br/>
                  </p>
                </li>
                <hr/>
                <li>
                  <label>University of Alabama Business School <br className='visible-sm'/><span>/ AUG 2014 - JUN 2015 </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>IT Project Architect</strong>
                    <br/>
                    Architected a re-working of a large-scale website and information hub.<br/>

                    <br/>Came in as the only team member with extensive Rails experience, and so trained an entire team of developers with PHP backgrounds.<br/>

                    <br/>Drew up specs and installed dependencies on company machines.<br/>

                    <br/>Prototyped the application using Rails, jQuery, Sass, and UI Kit. Eventually had need to migrate from Rails 3 to Rails 4.<br/>
                  </p>
                </li>
                <hr/>
                <li>
                  <label>Nine Agency <br className='visible-sm'/><span>/ AUG 2011 - SEP 2014 </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>Full-Stack Rails/PHP Developer</strong>
                    <br/>
                    Developed medium and large-scale ($20k+) web apps for a web and advertising agency. Went from intern to full-stack developer within a year.<br/>

                    <br/>Contributed to the team's internal tools such as Caboose CMS and Hello for Trello. See: http://nine.is/?page=our-products<br/>

                    <br/>Implemented a Rails-based issue tracker for customer support in various projects, and interfaced directly with clients when needed. <br/>

                    <br/>Migrated over 100 company PHP/Apache websites to Rails/Heroku environments.<br/>

                    <br/><br/><strong>Tools:</strong> Rails 3, JS, CodeIgniter, HTML 5/CSS 3, Heroku, Apache, Linux, OSX<br/>
                  </p>
                </li>
                <hr/>
                <li>
                  <label>Alabama State Library <br className='visible-sm'/><span>/ MAY 2011 - AUG 2011 </span></label>
                  <p>
                    <strong style={{textAlign: 'left'}}>Library Technician</strong>
                    <br/>
                    Performed regular system monitoring using Windows Server 2008 R2.<br/>

                    <br/>Installed and maintained $20k in tape library materials.<br/>

                    <br/>Troubleshot network issues and improved LAN/WAN connectivity.<br/>
                  </p>
                </li>
              </ul>
            </section>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-info"></i>
              </div>
              <h3 style={{marginTop: '1.15%'}}>Code</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              <ul className="references">
                <li>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-github-alt"></i>
                    </div>
                    <p><a href="https://github.com/isaacbell" target="_blank">GitHub <i className="fa fa-external-link"></i></a></p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-sliders"></i>
                    </div>
                    <p><a href="https://github.com/isaacbell/cosmos-html-demo" target="_blank">HTML Graphical API Demo <i className="fa fa-external-link"></i></a></p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-cube"></i>
                    </div>
                    <p><a href="https://github.com/IsaacBell/Canvas-Particle-Vortex/" target="_blank">Interactive HTML Canvas Demo <i className="fa fa-external-link"></i></a></p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-code"></i>
                    </div>
                    <p><a href="https://github.com/IsaacBell/Webpack-Postcss-Framework/" target="_blank">React Sample Code <i className="fa fa-external-link"></i></a></p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="icon-title toggle-title">
              <div className="hexagon-icon">
                <i className="fa fa-gamepad"></i>
              </div>
              <h3>Interests</h3>
              <a href="javascript:void(0)" className="do-toggle"><i className="fa fa-chevron-down"></i></a>
            </section>
            <section className="info-content">
              <ul className="references">
                <li>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-book" style={{marginBottom: '2%'}}></i>
                    </div>
                    <p className='mt-5' style={{marginTop: '5%'}}>Professional Development</p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-headphones" style={{marginBottom: '2%'}}></i>
                    </div>
                    <p className='mt-5' style={{marginTop: '5%'}}>Audio Podcasting</p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-users" style={{marginBottom: '2%'}}></i>
                    </div>
                    <p className='mt-5' style={{marginTop: '5%'}}>Networking</p>
                  </div>
                  <div className="large-3 medium-3 small-12 left text-center reference-info">
                    <div className="hexagon-icon-fill-small">
                      <i className="fa fa-plane" style={{marginBottom: '2%'}}></i>
                    </div>
                    <p className='mt-5' style={{marginTop: '5%', marginLeft: '-1.5%'}}>Travel  </p>
                  </div>
                </li>
              </ul>
            </section>
            </section>
          </main>
        {/* </p> */}
      </div>
    );
  }
}

export default App;
