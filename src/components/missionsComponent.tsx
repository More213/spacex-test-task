import React from "react";
import {connect} from "react-redux";
import {getDataMissions} from "../actions/getDataMissions";
import '../App.css'
import {getDataRocket} from "../actions/getDataRocket";

export class GetData extends React.Component<any> {
    componentDidMount() {
        this.props.onGetData();
        this.props.getDataRocket();
    }

    render() {
        const card = this.props.dataMissions;
          return card.map((i: any) => {
            return (
              <div className="card mb-3 card-rocket">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={i.links.patch.small} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{i.name}</h5>
                      <p className="card-text">{i.details}</p>
                      <p className="card-text"><small className="text-muted">{i.static_fire_date_utc}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
    }

}

export const mapStateToProps = (state: any) => ({
  dataMissions: state.dataMissions
});

export const mapDispatchToProps = (dispatch: any) => ({
  onGetData: (): any => dispatch(getDataMissions()),
  getDataRocket: (): any => dispatch(getDataRocket())
});
export default connect(mapStateToProps, mapDispatchToProps)(GetData);
