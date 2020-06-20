import React from "react";

class Songs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value",
            projects: []
        };
    }

    componentDidMount() {
        fetch("songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
            });

    }

    render() {
        return (
            <div className="row" id="list">
                {this.state.projects.map((item, idx) => {
                    return <div className="col-auto mr-1 mb-1" key={`rowItems${idx}`}>
                        <img alt="song" src={item.image}/>
                        <h5>{item.title}</h5>
                        <h6>{item.author}</h6>
                    </div>

                })}
            </div>
        );
    }
}

export default Songs;