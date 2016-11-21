import React from 'react'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.object,
        }
    },
    render () {
        return (
            <div className="container">
                { this.props.children }
            </div>
        ) }
})
