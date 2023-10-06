import { render } from "react-dom";
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    render(){
        const {name,location}=this.props;
        return (
            <div className="user-data">
                <h1>Count:{this.state.count}</h1>
                <input type="button" value="Increase Count" onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    });
                }}></input>
                <h1>User name : {name}</h1>
                <h2>Location : {location}</h2>
                <h2>Contact: +91 9008892896</h2>
            </div>
        );
    };
}

export default UserClass;
