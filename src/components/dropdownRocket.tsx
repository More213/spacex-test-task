import React from "react";
import {connect} from "react-redux";

export class DropdownRocket extends React.Component<any> {
  render() {
    return <div>jjj</div>
    const card = this.props.dataMissions;
    // return card.map((i: any) => {
    //   return (
    //     <option value="1">{i.rocket}</option>
    //   )
    // })
  }
}
export const mapStateToProps = (state: any) => ({
  dataMissions: state.dataMissions
});

export const mapDispatchToProps = (dispatch: any) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownRocket);
