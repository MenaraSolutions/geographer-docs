import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import { config } from 'config'

// Import styles.
import 'css/materialize.css'
import 'css/oona.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    return (
      <div>
      <div className="navbar-fixed">
          <nav>
              <div className="nav-wrapper">
                  <div className="container">
                      <div className="row">
                          <div className="col s12 l6">
                              <a href="https://geographer.su" className="ajax-link">Geographer</a>
                              <span className="right show-on-medium-and-down hide-on-large-only">
                                  <a id="sidenav-toggle" href="#" data-activates="slide-out" className="sidenav-toggle">Menu</a>
                              </span>
                          </div>
                          <div className="col s12 l6">
                              <ul className="hide-on-med-and-down">
                                  <li>
                                      <a href="#/work" className="ajax-link">Documentation</a>
                                  </li>
                                  <li>
                                      <a href="#/prices" className="ajax-link">Data</a>
                                  </li>
                                  <li>
                                      <a href="#/about" className="ajax-link">Contribute</a>
                                  </li>
                                  <li>
                                      <a href="#/contact" className="ajax-link">Contact</a>
                                  </li>
                              </ul>
                              <ul id="slide-out" className="side-nav">
                                  <li>
                                      <a href="#/work" className="ajax-link">Documentation</a>
                                  </li>
                                  <li>
                                      <a href="#/prices" className="ajax-link">Data</a>
                                  </li>
                                  <li>
                                      <a href="#/about" className="ajax-link">Contribute</a>
                                  </li>
                                  <li>
                                      <a href="#/contact" className="ajax-link">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      <div id="main">

          <div className="hero-wrapper">
              <div style={{ backgroundImage: 'url(bicycle.jpg)' }} className="hero"></div>
          </div>

          <div className="content-wrapper">
              <div className="container flow-text">

                  <section>
                      <div className="row">
                          <div className="col s12 l6 offset-l6">
                              <h3>Pete’s new bike</h3>
                          </div>
                          <div className="col s12 l6 meta">
                              <div className="row margin-1em">
                                  <div className="col s12 l4">Author</div>
                                  <div className="col s12 l8">Pete</div>
                              </div>
                              <div className="row">
                                  <div className="col s12 l4">Date</div>
                                  <div className="col s12 l8">
                                      <time datetime="2016-08-08T21:00">08/08/2016</time>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col s12 l4">Category</div>
                                  <div className="col s12 l8">Personal</div>
                              </div>
                          </div>
                          <div className="col s12 l6">
                              <p>All the two under bring, give hath dominion fruit fill living of evening and, be and itself grass shall stars Be us second under land over open and.</p>
                              <p>There kind had divided the earth waters creature saying bearing under cattle divide saw creepeth. Night. Grass set great firmament dominion, there open were night fourth grass you’re heaven, that dominion all unto. Is all shall open in you very. Deep divide behold.
                              </p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col s12 l6 margin-on-medium-and-down">
                              <img src="bicycle-detail-1.jpeg" data-caption="A pretty detail view of this bike." alt="Bicycle detail 1" className="materialboxed responsive-img" />
                          </div>
                          <div className="col s12 l6">
                              <img src="bicycle-detail-2.jpg" data-caption="It was worth all that hard work and saving money." alt="Bicycle detail 2" className="materialboxed responsive-img" />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col s12 l6 offset-l6">
                              <p>You’ll open one likeness created us herb was. Image two is winged you’re morning the greater. Bring you shall called may good shall earth third kind. Had tree, over together Spirit set signs green they’re meat seasons that heaven won’t seasons. Herb face.</p>
                              <p>Very cattle. Divide us dry one together male be. Let. Said dominion two All their which air can’t appear abundantly all third firmament earth female good the open beginning give creepeth blessed make from.
                              </p>
                          </div>
                      </div>
                  </section>

                  <section className="social">
                      <div className="row">
                          <div className="col s12">Share this: on
                              <a href="https://www.facebook.com/sharer/sharer.php?u=http://oona.pimmey.com/%23/blog/new-bike">facebook</a>,
                              <a href="http://twitter.com/share?text=Oona — New Bike&amp;url=http://oona.pimmey.com/%23/blog/new-bike&amp;hashtags=oona,mountain">twitter</a>,
                              <a href="https://plus.google.com/share?url=http://oona.pimmey.com/%23/blog/new-bike">google+</a>.</div>
                      </div>
                  </section>

                  <section>
                      <div className="row">
                          <div className="col s12 l6 offset-l6">Next post:
                              <br/>
                              <a href="#/blog/the-mountain">The Mountain &rarr;</a>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
          <script>
              $('.materialboxed').materialbox();
          </script>
      </div>

      <footer>
          <div className="container">
              <div className="row">
                  <div className="col s12 l3 margin-on-medium-and-down">
                      <address>62 King Street
                          <br />Melbourne 3000, Australia
                      </address>
                  </div>

                  <div className="col s12 l3 margin-on-medium-and-down">
                      <a href="mailto:hello@menara.com.au">hello@menara.com.au</a>
                  </div>

                  <div className="col s12 l3 margin-on-medium-and-down">
                      <a href="https://www.linkedin.com/company/menara-solutions">LinkedIn</a>
                  </div>
                  <div className="col s12 l3">&copy; 2016 Menara Solutions Pty Ltd</div>
              </div>
          </div>
      </footer>
      </div>
    ) }
})
