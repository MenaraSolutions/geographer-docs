import React from 'react'
import { Link } from 'react-router'
import find from 'lodash/find'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  },

  render () {
    const childPages = config.docPages.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p)
      return {
        title: page.data.title,
        path: page.path,
      }
    })

    const docOptions = childPages.map((child) =>
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
      </option>

    )

    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (
        <li
          key={child.path}
        >
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none',
            }}
          >
            {isActive ? <strong>{child.title}</strong> : child.title}
          </Link>
        </li>
      )
    })

    return (
        <div className="container">
        <div className="row">
          <div className="col s12 l3" style={{ 'margin-top': '25px' }}>
              <ul
                style={{
                  listStyle: 'none',
                  marginLeft: 0,
                }}
              >
                {docPages}
              </ul>
          </div>

          <div className="col s12 l9">
            { this.props.children }
          </div>

        </div>
        </div>
    )
  },
})
