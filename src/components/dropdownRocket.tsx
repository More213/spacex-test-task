import React from "react";
import {connect} from "react-redux";
import {dragonsFilterAction} from "../actions/filterForRockets";

export class DropdownRocket extends React.Component<any> {

  render() {
    return this.props.dataDragons.map((i: any) => {
      return (
        <button className="dropdown-item" key={i.id + '12'}
        onClick={() => this.props.filter(i.id)}
        >{i.name}</button>
      )
    })
  }
}
export const mapStateToProps = (state: any) => ({
  dataDragons: state.dataDragons
});

export const mapDispatchToProps = (dispatch: any) => ({
  filter: (id: string) => dispatch(dragonsFilterAction(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownRocket);
