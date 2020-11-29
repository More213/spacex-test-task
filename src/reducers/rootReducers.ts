import { combineReducers } from "redux";
import { dataMissions } from "./missionsReducer";
import { dataDragons } from "./rocketReducer";
import {launchpads} from "./launchpadReducer";

const rootReducer = combineReducers({
    dataMissions,
    dataDragons,
    launchpads
});
export default rootReducer
