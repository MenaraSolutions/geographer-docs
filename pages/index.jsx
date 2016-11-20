import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import 'css/materialize.css'
import 'css/oona.css'

const IndexPage = React.createClass({
    statics: {
        metadata () {
            return {
                title: 'Geographer: library that knows the world',
            }
        },
    },

    render () {
        return (
            <DocumentTitle title={`${IndexPage.metadata().title} | ${config.siteTitle}`}>
                <div>
                <div className="hero-wrapper">
                    <div style={{ backgroundImage: 'url(airport.jpg)' }} className="hero"></div>
                </div>

                <div className="content-wrapper">
                    <div className="container flow-text">

                        <section>
                            <div className="row">
                                <div className="col s12 l6 offset-l6">
                                    <h3>Geographer: library that knows the world</h3>
                                </div>

                                <div className="col s12 l6 meta">
                                    <div className="row margin-1em">
                                        <div className="col s12 l4">ISO 3166</div>
                                        <div className="col s12 l8">FIPS</div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 l4">Geonames</div>
                                        <div className="col s12 l8">Multilingual</div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 l4">Open-source</div>
                                    </div>
                                </div>

                                <div className="col s12 l6">
                                    <p>Geographer is an open-source package that knows how any country, state or city is called in any major language.</p>
                                    <p>Think of Geographer as of moment.js of geography, it's your one stop shop for all geopolitical division stuff.</p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                </div>
            </DocumentTitle>
        )
    },
})

export default IndexPage
