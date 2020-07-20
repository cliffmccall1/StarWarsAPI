import React, { Component } from 'react'
import Axios from 'axios'
import PeopleList from './components/PeopleList'
import Container from '@material-ui/core/Container';

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        people: [],
        count: 0
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  async getPeople() {
    return Axios.get("http://swapi.dev/api/people")
      .then((response) => {
        this.setState ({ people: response.data.results})
      })
  }

  handleChange(event) {
    this.setState({count: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const {people} = this.state;
    return (
      <Container style={{ margin: 'auto', backgroundColor: 'gray', height: '100vh' }} className="App">
        <h1>Star Wars People Finder</h1>
        <p>Enter Number Between 1 - 10</p>
        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.count} onChange={this.handleChange}></input>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <PeopleList people={people} count={this.state.count}/>
      </Container>
    )
  }
}