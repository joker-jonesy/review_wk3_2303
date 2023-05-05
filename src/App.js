// grab an external api and list it to the page and then have it so the individual items toggle a color
import React from "react";
import axios from "axios";
import User from "./components/User";

function App() {
    //   state
    //   data that is a list of items as state
    const [data, setData] = React.useState([]);

    const grabData = ()=>{
    //     grabbing data function
    //     axios or fetch
    //     await async
    //     fetch needs a try catch
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                setData(response.data)
            }
        ).catch((err)=>{
            // err.status 404,505
            console.log(err)
        })
    }

    React.useEffect(()=>{
     grabData()
    },[]);

    const userEles = data.map((itm)=>
        <User key={itm.id} itm={itm} />
    )


    return (
        <>
            <h1>hello world</h1>
            {userEles}
        </>
    );
}

export default App;
