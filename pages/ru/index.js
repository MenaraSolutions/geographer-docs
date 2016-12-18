import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import 'css/materialize.css'
import 'css/oona.css'

const IndexPage = React.createClass({
    statics: {
        metadata () {
            return {
                title: 'Географ: библиотека, которая знает весь мир',
            }
        },
    },

    render () {
        return (
            <DocumentTitle title={`${IndexPage.metadata().title} | ${config.siteTitle}`}>
                <div>
                    <div className="hero-wrapper">
                        <div style={{ backgroundImage: 'url(../airport.jpg)' }} className="hero"></div>
                    </div>

                    <div className="content-wrapper">
                        <div className="container flow-text">

                            <section>
                                <div className="row">
                                    <div className="col s12 l6 offset-l6">
                                        <h3>Географ: библиотека, которая знает весь мир</h3>
                                    </div>

                                    <div className="col s12 l6 meta">
                                        <div className="row margin-1em">
                                            <div className="col s12 l4">ISO 3166</div>
                                            <div className="col s12 l8">FIPS</div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 l4">Geonames</div>
                                            <div className="col s12 l8">Мультиязычность</div>
                                        </div>
                                        <div className="row">
                                            <div className="col s12 l4">Открытый код</div>
                                        </div>
                                    </div>

                                    <div className="col s12 l6">
                                        <p>Географ – это бесплатная библиотека, которая знает как называется любой город, область или страна на любом популярном языке.</p>
                                        <p>Можете воспринимать Географ как moment.js в географии. Это утилита, покрывающая всё, что связано с административным делением.</p>
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
