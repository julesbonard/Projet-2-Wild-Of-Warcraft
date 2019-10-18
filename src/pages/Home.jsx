import React from "react"

import Navbar from "../components/Navbar"
import WithRaids from "../components/WithRaids"

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <WithRaids />
        </div>
        
    );
}

export default Home