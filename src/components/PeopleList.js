import React, { Component } from 'react'
import { Card, CardHeader, CardContent, List, ListItem  } from '@material-ui/core';


export default class PeopleList extends Component {
    render() {
        const people = this.props.people.filter((count, index) => index < this.props.count);
        return (
            <div>
                {
                    people.map((p) => {
                        return (
                            <Card 
                                style={{width:275, display: "inline-block", verticalAlign: "top"}} 
                                variant="outlined"  
                                key={p.url}
                            >
                                <CardHeader title={p.name} />
                                <CardContent>
                                    <List>
                                        <ListItem>Birth Year: {p.birth_year}</ListItem>
                                        <ListItem>Gender: {p.gender}</ListItem>
                                        <ListItem>Mass: {p.mass}</ListItem>
                                        <ListItem>Height: {p.height}</ListItem>
                                        <ListItem>Hair Color: {p.hair_color}</ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
