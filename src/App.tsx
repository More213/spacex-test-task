import React from 'react';
import './App.css';
import GetData from "./components/missionsComponent";
import  DropdownRocket from "./components/dropdownRocket";
import  DropdownLaunchSite from "./components/dropdownLaunchSite";

class App extends React.Component {
    render() {
        return (
            <div className="wrap-body">
                <div className="btn-group" role="group">
                    <section>
                        <select className="">
                          <option value="hide">Rocket</option>
                          <DropdownRocket/>
                        </select>
                    </section>
                </div>
              <div className="btn-group" role="group">
                <section>
                  <select className="">
                    <option value="hide">Launch Site</option>
                    <DropdownLaunchSite/>
                  </select>
                </section>
              </div>
                <GetData/>
            </div>
        );
    }
}

export default App;
