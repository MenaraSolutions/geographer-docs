import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { Link } from 'react-router'

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
                    <div className="content-wrapper">
                        <div className="container flow-text">

                            <section>
                                <div className="row">
                                    <div className="col s12 l12">
                                        <h4>Official packages:</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12 l2">
                                        <Link to="/documentation/php/" style={{ borderBottom: 'none' }}><img src="php.png" className="responsive-img"/></Link>
                                        <Link to="/documentation/php/">Geographer PHP package</Link>
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
