import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component{
  constructor(props){
    super(props);
    this.state={
      parent:1,
    }
    }

  async componentDidMount(){
    const data= await fetch ("https://api.github.com/users/Ranjithrkamath");
    const json =data.json();
  }

  render(){
    const a=1;
    return(
      <div>
        <h1>This is about us Page</h1>
        <User name={"Ranjith (Function)"} location={"Hiriadka Function"}/>
        <UserClass name={"Ranjith (Class)"} location={"Hiriadka class"}/>
        <div>
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      </div>
    );
  }
}

export default AboutUs;