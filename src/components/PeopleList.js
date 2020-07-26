import React, { Component } from "react";
import { Card, List } from "semantic-ui-react";

export default class PeopleList extends Component {
  render() {
    const people = this.props.people.filter(
      (count, index) => index < this.props.count
    );
    return (
      <div style={{ width: "90%", margin: "auto" }}>
        {people.map((p) => {
          return (
            <Card
              style={{ width: 275, display: "inline-block", padding: "10px" }}
              variant="outlined"
              key={p.url}
            >
              <Card.Content>
                <Card.Header>{p.name}</Card.Header>
                <Card.Meta>Birth Year: {p.birth_year}</Card.Meta>
                <Card.Description>
                  <List.Item>Gender: {p.gender}</List.Item>
                  <List.Item>Mass: {p.mass}</List.Item>
                  <List.Item>Height: {p.height}</List.Item>
                  <List.Item>Hair Color: {p.hair_color}</List.Item>
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}
