import { combineReducers } from "redux";
import { dataMissions } from "./missionsReducer";
import { dataDragons } from "./rocketReducer";
import {launchpads} from "./launchpadReducer";
import {filterValue} from "./filterValue";

const rootReducer = combineReducers({
    dataMissions,
    dataDragons,
    launchpads,
    filterValue
});
export default rootReducer
