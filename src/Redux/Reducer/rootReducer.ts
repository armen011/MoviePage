import { combineReducers } from "redux";
import { MovieReducer } from "./movieReducer";
import { PopularReducer } from "./popularReducer";
import { sliderReducer } from "./sliderReducer";
import { trendingReducer } from "./trendingReducer";
export default combineReducers({
    popular:PopularReducer,
    slider:sliderReducer,
    trending:trendingReducer,
    movie:MovieReducer
})