import React, { useState, useEffect } from "react";
import DisplayCard  from "./DisplayCard";

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
        <div class="container py-5">
            <div class="row">
                {
                    engine.map((item) =>{ 
                        if(item.id % 2 == 0)
                            return (
                                <div className="col-6 py-3 d-flex justify-content-center">
                                    <DisplayCard engine={item} key={item.id}/>
                                </div>
                            )
                        else
                            return (
                                <div className="col-6 py-3 d-flex justify-content-center">
                                    <DisplayCard engine={item} key={item.id}/>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default MainFeed;