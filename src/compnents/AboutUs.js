import User from "./User";
import UserClass from "./UserClass";

const  AboutUs = () => {
  return (
    <div>
      <h1>This is About us Page</h1>
      <User name={"Ranjith (Function)"} location={"Hiriadka Function"}/>
      <UserClass name={"Ranjith (class)"} location={"Hiriadka class"}/>
    </div>
  );
};

export default AboutUs;