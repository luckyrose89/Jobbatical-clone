import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery';
import ReactAutocomplete from 'react-autocomplete';

import styles from './Inputbox.scss';

export default class Inputbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    const { value, onClick, selectedKeyword, jobs, lastUpdated, isFetching } = this.props

    return (
      <section className={ styles['inputbox-section'] }>
        <h1 className={ styles['serach-title'] }>Explore Jobs</h1>
        <div className={ styles['search-status'] }>
          <ReactAutocomplete
            items={[
              { id: 'engineer', label: 'engineer' },
              { id: 'designer', label: 'designer' },
              { id: 'tech', label: 'tech' },
              { id: 'developer', label: 'developer' },
              { id: 'healthcare', label: 'healthcare' },
              { id: 'special', label: 'special' },
              { id: 'UI', label: 'UI' },
              { id: 'UX', label: 'UX' },
              { id: 'worker', label: 'worker' },
            ]}
            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.label}
            inputProps={{className:styles['search-input']}}
            renderItem={(item, highlighted) =>
              <div
                className={ styles.autocomplete }
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.label}
              </div>
            }

            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
          />
          <input className= { styles['search-button'] } type="button" onClick={e => onClick(this.state.value)} value="Search Jobs" />
          <h6>Current Search Keyword: {value}</h6>
          <p>
            {isFetching && jobs.length === 0 && <span>Loading...</span>}
            {!isFetching && jobs.length === 0 && <span>No match found. <br/>Try different keyword.</span>}
            {lastUpdated &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>}
          </p>
        </div>
      </section>
    )
  }
}

Inputbox.propTypes = {
  onClick: PropTypes.func.isRequired
}