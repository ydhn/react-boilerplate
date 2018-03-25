import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { parse as qparse, stringify as qstringify } from 'query-string'
import moment from 'moment'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import { List, ListItem } from 'material-ui/List'
import { Container, Row, Col, Badge } from 'reactstrap';

class StartPage extends Component {
  static childContextTypes = {
    location: PropTypes.object,
  }

  getChildContext() {
    return {
      location: this.props.location
    }
  }

  render() {
    return (
      <div>
        Hello, This project is a boilerplate for React 16.3 with ES6 + Optional Chaining and Custom colorset bootstrap and material-ui!
        <br />
        <b>Maintainer: Yundo Han (han@yun.do)</b>
      </div>
    )
  }
}

export default withRouter(StartPage)