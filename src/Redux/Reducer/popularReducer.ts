import popular from "../State/popular";
import type {Popular,Action} from '../types'





export function PopularReducer(state:Popular=popular,action:Action):Popular{
let temp={...state}
    switch(action.type){
    case'SET-POPULAR-POP-MOV':
    temp.popMov=action.value
    break;
    case'SET-POPULAR-TOP-RATED':
    temp.TopRated=action.value
    break;
    case 'ADD-NEXT-PAGE-POP-MOV':
        let tmp=[...temp.popMov]
        tmp=[...tmp,...action.value]
        temp.popMov=tmp
        break;
    case 'ADD-NEXT-PAGE-TOP-RATED':
         let rated=[...temp.TopRated]
        rated=[...rated,...action.value]
        temp.TopRated=rated
        break;
    }
return temp
}