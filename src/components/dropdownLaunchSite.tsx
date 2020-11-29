import React from "react";
import {connect} from "react-redux";
import {launchpadsFilterAction} from "../actions/filterForLaunchpads";

export class DropdownLaunchSite extends React.Component<any>{

  render() {
    const card = this.props.launchpads
    return card.map((i: any) => {
      return (
        <button className="dropdown-item" key={i.id + '12'}
                onClick={() => this.props.filter(i.id)}
        >{i.name}</button>
      )
    })
  }
}

export const mapStateToProps = (state: any) => ({
  launchpads: state.launchpads
});

export const mapDispatchToProps = (dispatch: any) => ({
  filter: (id: string) => dispatch(launchpadsFilterAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownLaunchSite);
