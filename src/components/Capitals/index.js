import {Component} from 'react'
// import {v4 as uuidV4} from 'uuid'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    CountryAndCapitalId: 'NEW_DELHI',
  }

  getCountry = id => {
    const filtered = countryAndCapitalsList.filter(cc => cc.id === id)
    return filtered[0].country
  }

  onChangeCapital = event => {
    const {value} = event.target
    this.setState({CountryAndCapitalId: value})
  }

  render() {
    const {CountryAndCapitalId} = this.state

    return (
      <div className="app-background">
        <div className="card-body">
          <h1>Countries And Capitals</h1>
          <select onChange={this.onChangeCapital} id="capitals">
            {countryAndCapitalsList.map(ccList => (
              <option key={ccList.id} value={ccList.id}>
                {ccList.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <h1>{this.getCountry(CountryAndCapitalId)}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
