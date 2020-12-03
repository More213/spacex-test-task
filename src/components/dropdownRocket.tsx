import React from "react";
import {connect} from "react-redux";
import {dragonsFilterAction} from "../actions/filterForRockets";

export class DropdownRocket extends React.Component<any> {

  render() {
    return <div className="form-group col-4">
      <label htmlFor="FormSelect2">Rocket</label>
      <select className="form-control" onChange={(e) => this.props.filter(e.target.value)} id="FormSelect2" defaultValue={'all'}>
        <option value={'all'}>All</option>
        {this.props.rockets.map((i: any) => {
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
  rockets: state.rockets
});

export const mapDispatchToProps = (dispatch: any) => ({
  filter: (id: string) => dispatch(dragonsFilterAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownRocket);
