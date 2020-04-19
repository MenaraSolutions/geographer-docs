import React from 'react'
import { Link } from 'react-router'
import { colors, activeColors } from 'utils/colors'
import startsWith from 'underscore.string/startsWith'
import { config } from 'config'
import GitHubButton from 'react-github-button';

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

export const getUrl = (url, language) => {
    return language == 'en' ? url : '/' + language + url
}

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.object,
        }
    },

    getInitialState () {
        return {
            menuVisible: false
        };
    },

    render () {
        const { menuVisible } = this.state || false
        const language = startsWith(this.props.location.pathname, '/ru') ? 'ru' : 'en'

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <div className="container">
                                <div className="row">

                                    <div className="col s12 l6">
                                        <Link to={getUrl('/', language)}>Geographer</Link>
                                        <span className="right show-on-medium-and-down hide-on-large-only">
                                            <a id="sidenav-toggle" href="#" onClick={() => { this.setState({menuVisible: !menuVisible})} } className="sidenav-toggle">Menu</a>
                                        </span>
                                    </div>

                                    <div className="col s12 l6">
                                        <ul className="hide-on-med-and-down">
                                            <li>
                                                <Link activeClassName="current-page" to={getUrl('/documentation/', language)}>{menu[language][0]}</Link>
                                            </li>
                                            <li>
                                                <Link activeClassName="current-page" to={getUrl('/data/', language)}>{menu[language][1]}</Link>
                                            </li>
                                            <li>
                                                <Link activeClassName="current-page" to={getUrl('/contribute/', language)}>{menu[language][2]}</Link>
                                            </li>
                                            <li>
                                                <Link activeClassName="current-page" to={getUrl('/contact/', language)}>{menu[language][3]}</Link>
                                            </li>
                                        </ul>
                                        <ul id="slide-out" className="side-nav" style={ menuVisible ? { transform: 'translateX(0px)' } : {} }>
                                            <li>
                                                <Link to={getUrl('/documentation/', language)} onClick={() => this.setState({menuVisible: !menuVisible})}>{menu[language][0]}</Link>
                                            </li>
                                            <li>
                                                <Link to={getUrl('/data/', language)} onClick={() => this.setState({menuVisible: !menuVisible})}>{menu[language][1]}</Link>
                                            </li>
                                            <li>
                                                <Link to={getUrl('/contribute/', language)} onClick={() => this.setState({menuVisible: !menuVisible})}>{menu[language][2]}</Link>
                                            </li>
                                            <li>
                                                <Link to={getUrl('/contact/', language)} onClick={() => this.setState({menuVisible: !menuVisible})}>{menu[language][3]}</Link>
                                            </li>
                                        </ul>
                                        <div style={{float: 'left', paddingLeft: '25px' }}
                                             className="hide-on-med-and-down">
                                            &#9734;
                                            <GitHubButton type="stargazers" size="large" style={{float: 'left' }} namespace="MenaraSolutions" repo="geographer" />
                                        </div>
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
                            <div className="col s12 l3">
                                &copy; 2016-2020 Denis Mysenko. Powered by <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
                            </div>
                        </div>
                    </div>
                </footer>
                { menuVisible && <div id="sidenav-overlay" className="" style={{ opacity: 1 }}></div> }
            </div>
        )
    }
})
