import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'

import { fetchData } from './api'

export default class App extends Component {
  state = {
    data: {}
  }

  async componentDidMount(){
      const data = await fetchData()
      // console.log(data)
      this.setState({ data })
      // console.log(this.state.data)
  }

  render() {
    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}
