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

                        <section className="get-in-touch">
                            <div className="row">
                                <div className="col s12">
                                    <h2>Who should use this</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 l12">
                                    <p className="flow-text">
                                        Any web application that needs to display country, state or city lists and/or names may benefit from Geographer.
                                    </p>
                                    <p>
                                        Imagine you want to display <i>"John logged in 5 seconds ago from Venice"</i> in Spanish. With Geographer this is as simple as:
                                    </p>
                                    <pre className="php-body">
                                        <code className="php">
                                            <span className="hljs-comment">// In this example we are using Venice's Geonames code to resolve it</span>
                                            <p>$venice = City::build(<span className="hljs-string">3164603</span>);</p>
                                            <p>echo 'John logged in 5 seconds ago ' . $venice->setLocale(<span className="hljs-string">'es'</span>)->inflict(<span className="hljs-string">'from'</span>)->getName();</p>
                                        </code>
                                    </pre>
                                    <p>
                                        And now I want to display <i>"Venice is in Italy"</i>:
                                    </p>
                                    <pre className="php-body">
                                        <code className="php">
                                            <p>echo $venice->inflict(<span className="hljs-string">'default'</span>)->getName() . ' is in ' . $venice->parent()->parent()->getName();</p>
                                        </code>
                                    </pre>
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
