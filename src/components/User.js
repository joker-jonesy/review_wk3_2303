import React from "react";

function User(props){
    const [color, setColor]=React.useState(false)

    let style ={
        backgroundColor: color? "red":""
    }

    return(
        <div className={"user"} style={style} onClick={()=>setColor(!color)}>
            <h1>{props.itm.name}</h1>
            <h2>{props.itm.email}</h2>
            <p>Works for {props.itm.company.name}</p>
        </div>
    )

}

export default User;