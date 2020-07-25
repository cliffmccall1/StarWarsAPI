import React, { Component } from 'react';
import Axios from 'axios';
import PeopleList from './components/PeopleList';
import { Button, Form, Card } from 'semantic-ui-react';
import Background from './assets/images/star-wars-logo.jpg';


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

  onClick() {
    this.setState({count: ''});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getPeople();
  }

  render() {
    const {people} = this.state;
    return (
      <div style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'contain',
        height: '100vh' }} 
        className="App"
      >
        <Card style={{ margin: 'auto' }}>
        <Form style={{ maxWidth: 275, padding: 10, margin: 'auto'}} onSubmit={this.handleSubmit}>
          <Form.Field>
          <h1>Star Wars API</h1>
            <label>Enter Number Between 1 - 10</label>
            <input 
              type="text" 
              value={this.state.count} 
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit" value="Submit">Submit</Button>
        </Form>
        </Card>
        <PeopleList people={people} count={this.state.count}/>
      </div>
    )
  }
}