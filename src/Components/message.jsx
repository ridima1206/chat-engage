import React, { Component } from 'react'

export default class message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "http://localhost:3000/messages")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="chat-feed">
                <div className="chat-title-container">
                    <div className="chat-title">{chat?.title}</div>
                    <div className="chat-subtitle">
                        {items.map((item) => ` ${item.username}`)}
                    </div>
                </div>
            </div>
        )
    }
}
