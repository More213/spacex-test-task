import React from 'react';
import './App.css';
import GetData from "./components/missionsComponent";
import  DropdownRocket from "./components/dropdownRocket";
import  DropdownLaunchSite from "./components/dropdownLaunchSite";

class App extends React.Component {
    render() {
        return (
            <div className="wrap-body">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Rocket
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <DropdownRocket/>
                </div>
              </div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  LaunchSite
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <DropdownLaunchSite/>
                </div>
              </div>
                <GetData/>
            </div>
        );
    }
}

export default App;
