import trending from "../State/trending";
import type {Trending,Action} from '../types'





export function trendingReducer(state:Trending=trending,action:Action):Trending{
let temp={...state}
    switch(action.type){
    case'SET-TRENDING-TODAY':
    temp.today=action.value
    break;
    case'SET-TRENDING-INTHEATER':
    temp.inTheater=action.value
    break;
    case 'ADD-NEXT-PAGE-TODAY':
        temp.today=[...temp.today,...action.value]
        break;
    case 'ADD-NEXT-PAGE-INTHEATER':
        temp.inTheater=[...temp.inTheater,...action.value]
        break;
    }
return temp
}