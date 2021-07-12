import movieDet from '../State/moviDet'
import type {MovieDet,MovieAction} from '../types'





export function MovieReducer(state:MovieDet=movieDet,action:MovieAction):MovieDet{
    let temp={...state}
    switch(action.type){
        case 'ADD-DATA-OF-MOVIE':
            temp.details=action.value.data
            break;
        case 'ADD-CAST-OF-MOVIE':
            temp.cast=action.value.cast
            temp.crew=action.value.crew

            break;
    }
    
return temp
}