import { createContext } from "react";

const UserContext=createContext(
    {loggedInUser:"Context API User",}
);

export default UserContext;