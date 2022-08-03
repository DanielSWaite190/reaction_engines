import React, { useState, useEffect } from "react";
import Card  from "../components/Card";
import Loader  from "../components/Loader";


function Engine() {
    const [engine, setEngine] = useState([]);

    const [query, setQuery] = useState("");

    const getData = async () => {
        const response = await fetch(`http://localhost:4000/engine`);
        const data = await response.json();
        setEngine(data)
    }
    
    useEffect(() => {
        getData()
      }, []);

    // return <h5>e component</h5>
    return (
        <div>
            {engine.map((item) => <Card engine={item} key={item.id}/>)} 
        </div>
    )


    // return (
    //     <div>
    //       <input placeholder="Enter Users Name" onChange={event => setQuery(event.target.value)} />
    //       <div className="container">
    //         {engine.length > 0
    //         ? engine.filter(item => {
    //           if (query === '') {
    //             return item;
    //           } else if (item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())) {
    //             return item;
    //           }
    //           return false;
    //         }).map((item) => <Card key={item.id} item={item}/> )
    //         : <Loader />}
    //       </div>
    //     </div>
    //   )
}

export default Engine;