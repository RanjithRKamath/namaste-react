import { useState } from "react";

const User =(props)=>{
    const {name, location}=props;
    const [count, setCount]=useState(0);

    return (
        <div className="user-data">
            <h1>Count:{count}</h1>
            <input type="button" value="Increase Count" onClick={()=>{
                setCount(count+1)
            }}></input>
            <h1>User name : {name}</h1>
            <h2>Location : {location}</h2>
            <h2>Contact: +91 9008892896</h2>
        </div>
    );
}

export default User;
