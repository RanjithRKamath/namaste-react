import { render } from "react-dom";
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+ " constructor");
        this.state={
            name: "default name",
            location: "default location",
            image: "dummy image"
        }
    }

    async componentDidMount(){
        console.log(this.props.name+" componentDidMount");
        const data = await fetch ("https://api.github.com/users/Ranjithrkamath");
        const json= await data.json();
        console.log(json);
        this.setState({
            name:json.name,
            location:json.location,
            image:json.avatar_url
        })
    }

    componentDidUpdate(){
        console.log(this.props.name+"componentDidUpdate")
    }

    componentWillUnmount(){
        console.log(this.props.name+"componentWillUnmount");
    }

    render(){
        console.log(this.props.name+" render");
        return (
            <div className="user-data">
                <img src={this.state.image} alt="image not displayed"></img>
                <h1>User name : {this.state.name}</h1>
                <h2>Location : {this.state.location}</h2>
            </div>
        );
    };
}

export default UserClass;