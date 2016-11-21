import React from 'react'
import {Link} from 'react-router'
import {colors, activeColors} from 'utils/colors'

import {config} from 'config'

import 'css/materialize.css'
import 'css/oona.css'
import 'css/github.css'

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
                                            <a id="sidenav-toggle" href="#" onClick={() => { this.setState({menuVisible: !menuVisible})} } className="sidenav-toggle">Menu</a>
                                        </span>
                                    </div>

                                    <div className="col s12 l6">
                                        <ul className="hide-on-med-and-down">
                                            <li>
                                                <Link to='/documentation/'>Documentation</Link>
                                            </li>
                                            <li>
                                                <Link to='/data/'>Data</Link>
                                            </li>
                                            <li>
                                                <Link to='/contribute/'>Contribute</Link>
                                            </li>
                                            <li>
                                                <Link to='/contact/'>Contact</Link>
                                            </li>
                                        </ul>
                                        <ul id="slide-out" className="side-nav" style={ menuVisible ? { transform: 'translateX(0px)' } : {} }>
                                            <li>
                                                <Link to='/documentation/' onClick={() => this.setState({menuVisible: !menuVisible})}>Documentation</Link>
                                            </li>
                                            <li>
                                                <Link to='/data/' onClick={() => this.setState({menuVisible: !menuVisible})}>Data</Link>
                                            </li>
                                            <li>
                                                <Link to='/contribute/' onClick={() => this.setState({menuVisible: !menuVisible})}>Contribute</Link>
                                            </li>
                                            <li>
                                                <Link to='/contact/' onClick={() => this.setState({menuVisible: !menuVisible})}>Contact</Link>
                                            </li>
                                        </ul>
                                        <div style={{float: 'left', paddingLeft: '25px', paddingTop: '10px'}}
                                             className="hide-on-med-and-down">
                                            <a className="github-button"
                                               href="https://github.com/MenaraSolutions/geographer"
                                               data-icon="octicon-star" data-style="mega"
                                               data-count-href="/MenaraSolutions/geographer/stargazers"
                                               data-count-api="/repos/MenaraSolutions/geographer#stargazers_count"
                                               data-count-aria-label="# stargazers on GitHub"
                                               aria-label="Star MenaraSolutions/geographer on GitHub">Star</a>
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
                            </div>

                            <div className="col s12 l3 margin-on-medium-and-down">
                                <a href="mailto:hello@menara.com.au">hello@menara.com.au</a>
                            </div>

                            <div className="col s12 l3 margin-on-medium-and-down">
                                <a href="https://www.linkedin.com/company/menara-solutions">LinkedIn</a>
                            </div>
                            <div className="col s12 l3">
                                &copy; 2016 Menara Solutions. Powered by <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a>
                            </div>
                        </div>
                    </div>
                </footer>
                { menuVisible && <div id="sidenav-overlay" className="" style={{ opacity: 1 }}></div> }
            </div>
        )
    }
})
