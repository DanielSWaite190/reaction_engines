import React, { useState, useEffect } from "react";
import Card  from "./Card";

function MainFeed() {
    const [engine, setEngine] = useState([]);

    const getData = async () => {
        const response = await fetch(`http://localhost:4000/engine`);
        const data = await response.json();
        setEngine(data)
    }
    
    useEffect(() => {
        getData()
    }, []);

    return (
        <div id="cards">
            {engine.map((item) => <Card engine={item} key={item.id}/>)} 
        </div>
    )
}

export default MainFeed;