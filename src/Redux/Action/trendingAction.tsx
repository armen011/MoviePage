
import axios from "axios"
import { Dispatch } from 'redux';

import {Action,Movie} from "../types"
//<======================Import Of Populare On TV=======================>

export function addMoviesOfTrendingToday(value:[Movie]):Action{
    return{
        type:"SET-TRENDING-TODAY",
        value
    }

}

export function setTrendingToday(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfTrendingToday(r.data.results))
        })      
    }
}
//<======================TRENDING  INTHEATER=======================>

export function addMoviesOfTrendingInTheater(value:[Movie]):Action{
    return{
        type:"SET-TRENDING-INTHEATER",
        value
    }

}

export function setTrendingInTheaters(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfTrendingInTheater(r.data.results))
        })      
    }
}

//<=======================UPDATE DATA OF TRENDING==========================>
function addNextPageToday(value:[Movie]):Action{
    return {
        type:'ADD-NEXT-PAGE-TODAY',
        value
    }

}
function addNextPageInTheater(value:[Movie]):Action{
    return{
        type:'ADD-NEXT-PAGE-INTHEATER',
        value
    }
}
export function addMoviesToTrending(field:string,page:number){
    return function(dispatch:Dispatch){
        if(field==='Trending'){
            if(page<=500){
                console.log('ok')
                axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextPageToday(r.data.results))
                }) 
            }

        }else if(field==='inTheater'){
            if(page<=442){
                console.log('ok')

                axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextPageInTheater(r.data.results))
                }) 
            }
        }
    }
}