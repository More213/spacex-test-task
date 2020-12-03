import React from "react";
import DropdownRocket from "./dropdownRocket";
import DropdownLaunchSite from "./dropdownLaunchSite";

export class Dropdowns extends React.Component<any>{

  render() {
    return (
      <form className="row">
            <DropdownRocket/>
            <DropdownLaunchSite/>
      </form>
    )
  }
}
