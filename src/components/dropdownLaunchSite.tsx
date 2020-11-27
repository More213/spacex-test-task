import React from "react";
import {connect} from "react-redux";

export class DropdownLaunchSite extends React.Component<any>{

  render() {
    return <div>jjj</div>
    const card = this.props.dataMissions
    // // const newCard = card;
    // // console.log(card);
    // return card.map((i: any) => {
    //   return (
    //     <option value="1">{i.launchpad}</option>
    //   )
    // })
  }
}

export const mapStateToProps = (state: any) => ({
  dataMissions: state.dataMissions
});

export const mapDispatchToProps = (dispatch: any) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownLaunchSite);
