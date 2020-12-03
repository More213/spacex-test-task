import React from "react";
import {connect} from "react-redux";
import {launchpadsFilterAction} from "../actions/filterForLaunchpads";

export class DropdownLaunchSite extends React.Component<any>{

  render() {
    return <div className="form-group col-4">
      <label htmlFor="FormSelect1">Launch Site</label>
      <select className="form-control" onChange={(e) => this.props.filter(e.target.value)} id="FormSelect1">
        <option value={''} selected>All</option>
        {this.props.launchpads.map((i: any) => {
          return (
            <option className="dropdown-item" key={i.id + '12'}
                    value={i.id}
            >{i.name}</option>
          )
        })}
      </select>
    </div>
  }
}

export const mapStateToProps = (state: any) => ({
  launchpads: state.launchpads
});

export const mapDispatchToProps = (dispatch: any) => ({
  filter: (id: string) => dispatch(launchpadsFilterAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownLaunchSite);
