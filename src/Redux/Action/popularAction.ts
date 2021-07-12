
import axios from "axios"
import { Dispatch } from 'redux';

import {Action,Movie} from "../types"
//<======================Import Of Populare On TV=======================>

export function addMoviesOfPopularpopMov(value:[Movie]):Action{
    return{
        type:"SET-POPULAR-POP-MOV",
        value
    }

}

export function setPopularpopMov(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfPopularpopMov(r.data.results))
        })      
    }
}
//<======================Import Of Populare On TV=======================>

export function addMoviesOfPopularTopRated(value:[Movie]):Action{
    return{
        type:"SET-POPULAR-TOP-RATED",
        value
    }

}

export function setPopularTopRated(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfPopularTopRated(r.data.results))
        })      
    }
}

//<=======================UPDATE DATA OF POPULAR==========================>
function addNextPagepopMov(value:[Movie]):Action{
    return {
        type:'ADD-NEXT-PAGE-POP-MOV',
        value
    }

}
function addNextPageTopRated(value:[Movie]):Action{
    return{
        type:'ADD-NEXT-PAGE-TOP-RATED',
        value
    }
}
export function addMoviesToPopular(field:string,page:number){
    return function(dispatch:Dispatch){
        if(field==='Whats Popular'){
            if(page<=500){
                axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextPagepopMov(r.data.results))
                }) 
            }

        }else if(field==='TopRated'){
            if(page<=442){
                axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextPageTopRated(r.data.results))
                }) 
            }
        }
    }
}