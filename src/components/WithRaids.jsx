import React from "react"

import CardHome from "./CardHome"

class WithRaids extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            raids: [
                "uldir",
                "the-eternal-palace",
                "battle-of-dazaralor",
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.raids.map((raid, i) => {
                        return <CardHome raid={raid} reverse={i % 2 === 0 ? true : false} />
                    })
                }
            </div>
        )
    }
}

export default WithRaids;