import { combineReducers } from "redux";
import { dataMissions } from "./missionsReducer";
import { dataDragons } from "./rocketReducer";

const rootReducer = combineReducers({
    dataMissions,
    dataDragons
});
export default rootReducer
