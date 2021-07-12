import slider from '../State/slider'
import type {Action, Slider} from '../types'
export function sliderReducer(state:Slider=slider,action:Action):Slider{
    let temp={...state}
    switch(action.type){
    case'SET-SLIDER-POP-MOV':
    temp.popMov=action.value
    break;
    case'SET-SLIDER-TOP-RATED':
    temp.TopRated=action.value
    break;
    case 'ADD-NEXT-PAGE-SLIDER-POP-MOV':
        let tmp=[...temp.popMov]
        tmp=[...tmp,...action.value]
        temp.popMov=tmp
        break;
    case 'ADD-NEXT-PAGE-SLIDER-TOP-RATED':
         let rated=[...temp.TopRated,...action.value]
        temp.TopRated=rated
        break;
    case 'SET-TRAILER-ID':
        console.log('ok')
        temp.trailerId=action.value[0].key
    }
return temp
}