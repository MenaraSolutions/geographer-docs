import React from 'react'
import { Link } from 'react-router'
import { colors, activeColors } from 'utils/colors'
import startsWith from 'underscore.string/startsWith'
import { config } from 'config'

import 'css/materialize.css'
import 'css/oona.css'
import 'css/github.css'

const menu = {
    en: [
        'Documentation',
        'Data',
        'Contribute',
        'Contact'
    ],
    ru: [
        'Документация',
        'Данные',
        'Участие',
        'Связь'
    ]
}

const languages = [
    {
        'code': 'en',
        'prefix': '/',
        'anchor': 'English'
    },
    {
        'code': 'ru',
        'prefix': '/ru/',
        'anchor': 'По-русски'
    }
]

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const language = startsWith(this.props.location.pathname, '/ru') ? 'ru' : 'en'

    return (
      <div>
      <div className="navbar-fixed">
          <nav>
              <div className="nav-wrapper">
                  <div className="container">
                      <div className="row">

                          <div className="col s12 l6">
                              <Link to="/">Geographer</Link>
                              <span className="right show-on-medium-and-down hide-on-large-only">
                                  <a id="sidenav-toggle" href="#" data-activates="slide-out" className="sidenav-toggle">Menu</a>
                              </span>
                          </div>

                          <div className="col s12 l6">
                              <ul className="hide-on-med-and-down">
                                  <li>
                                      <Link to='/documentation/'>{menu[language][0]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/data/'>{menu[language][1]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/contribute/'>{menu[language][2]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/contact/'>{menu[language][3]}</Link>
                                  </li>
                              </ul>
                              <ul id="slide-out" className="side-nav">
                                  <li>
                                      <Link to='/documentation/'>{menu[language][0]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/data/'>{menu[language][1]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/contribute/'>{menu[language][2]}</Link>
                                  </li>
                                  <li>
                                      <Link to='/contact/'>{menu[language][3]}</Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      <div id="main">
          { this.props.children }
      </div>

      <footer>
          <div className="container">
              <div className="row">
                  <div className="col s12 l3 margin-on-medium-and-down">
                      <address>62 King Street
                          <br />Melbourne 3000, Australia
                      </address>
                      {
                          languages.filter(lang => lang.code != language).map(lang => (
                              <Link to={lang.prefix}>{lang.anchor}</Link>
                          ))
                      }
                  </div>

                  <div className="col s12 l3 margin-on-medium-and-down">
                      <a href="mailto:hello@menara.com.au">hello@menara.com.au</a>
                  </div>

                  <div className="col s12 l3 margin-on-medium-and-down">
                      <a href="https://www.linkedin.com/company/menara-solutions">LinkedIn</a>
                  </div>
                  <div className="col s12 l3">&copy; 2016 Menara Solutions</div>
              </div>
          </div>
      </footer>
      </div>
    ) }
})
