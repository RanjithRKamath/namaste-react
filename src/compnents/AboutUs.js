import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component{
  constructor(props){
    console.log("parent Constructor");
    super(props);
    this.state={
      parent:1,
    }
    }

  async componentDidMount(){
    const data= await fetch ("https://api.github.com/users/Ranjithrkamath");
    const json =data.json();
    console.log("Parent componentDidMount");
    console.log()
  }

  render(){
    const a=1;
    console.log("Parent render");
    console.log(this.state.parent);
    console.log(a);
    return(
      <div>
        <h1>This is about us Page</h1>
        <User name={"Ranjith (Function)"} location={"Hiriadka Function"}/>
        <UserClass name={"Ranjith (Class)"} location={"Hiriadka class"}/>
      </div>
    );
  }
}

export default AboutUs;