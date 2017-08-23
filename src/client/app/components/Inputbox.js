import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery';

export default class Inputbox extends Component {
  render() {
    const { value, onClick, options } = this.props

    return (
      <span>
          <input onClick={e => onClick(e.target.value)} type="text" placeholder="search" /><br/>

      </span>

    )
  }
}

Inputbox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired
}