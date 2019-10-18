import React from "react"

import Navbar from "../components/Navbar"
import CardHome from "../components/CardHome"

import styled from 'styled-components'



const StyledCardHome = styled.div`
width: 80vw;
height: 200px;
margin-left: 10vw
`;


function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <StyledCardHome>
                <CardHome />
            </StyledCardHome>
        </div>
        
    );
}

export default Home