import React from "react";
import {connect} from "react-redux";
import {getDataMissions} from "../actions/getDataMissions";
import '../App.css'
import {getDataRocket} from "../actions/getDataRocket";
import {getDataLaunchSite} from "../actions/getDataLaunchSite";
import moment from "moment";

export class GetData extends React.Component<any> {
    isData = true;
    componentDidMount() {
        this.props.onGetData();
        this.props.getGetRocket();
        this.props.getGetLaunchSite()
    }

    filteringRocketAndLaunchpad():any {
      const missions = this.props.missions.filter((obj: any) => obj.rocket === this.props.filterValue.dragonId)
        .filter((obj: any) => obj.launchpad === this.props.filterValue.launchpadId);
      return this.checkArrayLength(missions);
    }

    filteringLaunchpad():any {
      const missions = this.props.missions.filter((obj: any) => obj.launchpad === this.props.filterValue.launchpadId);
      return this.checkArrayLength(missions);
    }

    filteringRocket():any {
      const missions = this.props.missions.filter((obj: any) => obj.rocket === this.props.filterValue.dragonId)
      return this.checkArrayLength(missions);
    }

    checkArrayLength(arr: any) {
      if(arr.length === 0) {
        this.isData = false
      } else {
        this.isData = true;
        return arr
      }
    }

    isSortedArray() {
      if(this.props.filterValue.dragonId !== 'all' && this.props.filterValue.launchpadId !== 'all'){
        return this.filteringRocketAndLaunchpad();
      } else if (this.props.filterValue.dragonId !== 'all') {
        return this.filteringRocket()
      } else if (this.props.filterValue.launchpadId !== 'all') {
        return this.filteringLaunchpad();
      }
      this.isData = true;
      return this.props.missions;
    }

    formatData(fireDate: string): string {
      if(fireDate === null) {
        return "DD.MM.YYYY";
      } else {
        return moment(fireDate).format("DD.MM.YYYY");
      }
    }


    render() {
      const card = this.isSortedArray();
      if (this.isData) {

      return card.map((i: any) => {
        return (
          <div className="card mb-3 card-rocket col-8" key={i.id+i.name}>
            <div className="row no-gutters">
              <div className="col-md-3 wrap-img">
                <img src={i.links.patch.small} className='card-img' alt="mission_patch_small"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="cart-header row justify-content-between">
                    <h5 className="card-title">{i.name ? i.name : "Mission Name"}</h5>
                    <p className="card-text"><small className="text-muted">{this.formatData(i.static_fire_date_utc)}</small></p>
                  </div>
                  <p className="card-text">{i.details ? i.details : "No details"}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
        return (<h1>No data</h1>)
      }
    }

}

export const mapStateToProps = (state: any) => ({
  missions: state.missions,
  filterValue: state.filterValue
});

export const mapDispatchToProps = (dispatch: any) => ({
  onGetData: (): any => dispatch(getDataMissions()),
  getGetRocket: (): any => dispatch(getDataRocket()),
  getGetLaunchSite:(): any => dispatch(getDataLaunchSite())
});
export default connect(mapStateToProps, mapDispatchToProps)(GetData);
