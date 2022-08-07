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

    // return (
    //     <div id="cards">
    //         {engine.map((item) => <DisplayCard engine={item} key={item.id}/>)} 
    //     </div>
    // )

    return (
        <div class="container">
            <div class="row">
                {
                    engine.map((item) =>{ 
                        if(item.id % 2 == 0)
                            return (
                                <div className="col-6">
                                    <div class="p-5">
                                        <DisplayCard engine={item} key={item.id}/>
                                    </div>
                                </div>
                            )
                        else
                            return (
                                <div className="col-6">
                                    <div class="p-5">
                                        <DisplayCard engine={item} key={item.id}/>
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default MainFeed;