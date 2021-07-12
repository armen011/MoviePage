import { Details, MovieAction ,Cast} from "../types";
import { Dispatch} from 'redux';
import axios from "axios"



function addMovieData(value:{data:Details,cast:Cast[],crew:Cast[]}):MovieAction{
    return{
        type:'ADD-DATA-OF-MOVIE',
        value
    }
}
function addMovieCrew(value:{data:Details,cast:Cast[],crew:Cast[]}):MovieAction{
    return{
        type:'ADD-CAST-OF-MOVIE',
        value
    }
}

export function bringDets(id:number){
    return function(dispatch:Dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US`) 
        .then(r=>{
            const data ={data:r.data,cast:[],crew:[]}
            dispatch(addMovieData(data))
        }) 
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US`) 
        .then(r=>{
            dispatch(addMovieCrew(r.data))

        })
        
    }
}