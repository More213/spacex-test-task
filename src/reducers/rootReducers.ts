import { combineReducers } from "redux";
import { missions } from "./missionsReducer";
import { rockets } from "./rocketReducer";
import {launchpads} from "./launchpadReducer";
import {filterValue} from "./filterValue";

const rootReducer = combineReducers({
    missions,
    rockets,
    launchpads,
    filterValue
});
export default rootReducer
