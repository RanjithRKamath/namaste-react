import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "default name",
            location: "default location",
            image: "dummy image"
        }
    }

    async componentDidMount(){
        const data = await fetch ("https://api.github.com/users/Ranjithrkamath");
        const json= await data.json();
        this.setState({
            name:json.name,
            location:json.location,
            image:json.avatar_url
        })
    }

    render(){
        return (
            <div className="user-data">
                <img src={this.state.image} alt="image not displayed"></img>
                <h1>User name : {this.state.name}</h1>
                <h2>Location : {this.state.location}</h2>
            </div>
        );
    };
}

<<<<<<< HEAD
export default UserClass;
=======
export default UserClass;
>>>>>>> c60d02a88aa5e012947592f35d1ea0f2b0119c5d
