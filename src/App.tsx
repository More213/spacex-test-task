import React from 'react';
import './App.css';
import GetData from "./components/missionsComponent";
import {Dropdowns} from "./components/dropdowns";

class App extends React.Component {
    render() {
        return (
            <div className="wrap-body">
              <h1>Launches</h1>
                <Dropdowns/>
                <GetData/>
            </div>
        );
    }
}

export default App;
