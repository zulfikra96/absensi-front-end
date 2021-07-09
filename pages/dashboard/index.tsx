import React from "react";
import Views from "./views";

export default class Dashboard extends React.Component{

    public Auth(){
        
    }

    render = () => {
        try {
            this.Auth()
            return <Views/>
        } catch (error) {
            return (
                <div>
                    <h3>Unauthorized</h3>
                </div>
            );
        }
    }
}