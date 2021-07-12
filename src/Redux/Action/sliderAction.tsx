
import axios from "axios"
import { Dispatch } from 'redux';

import {Action,Movie, StringAction} from "../types"
//<======================Import Of Slider Popular Movies=======================>

export function addMoviesOfSliderpopMov(value:[Movie]):Action{
    return{
        type:"SET-SLIDER-POP-MOV",
        value
    }

}

export function setSliderrpopMov(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfSliderpopMov(r.data.results))
        })      
    }
}
//<======================Import Slider Top Rated=======================>

export function addMoviesOfSliderTopRated(value:[Movie]):Action{
    return{
        type:"SET-SLIDER-TOP-RATED",
        value
    }

}

export function setSliderTopRated(){
    return function(dispatch: Dispatch){
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page=1') 
        .then(r=>{
            dispatch(addMoviesOfSliderTopRated(r.data.results))
        })      
    }
}

//<=======================UPDATE DATA OF SLIDER==========================>
function addNextSliderpopMov(value:[Movie]):Action{
    return {
        type:'ADD-NEXT-PAGE-SLIDER-POP-MOV',
        value
    }

}
function addNextPageSliderTopRated(value:[Movie]):Action{
    return{
        type:'ADD-NEXT-PAGE-SLIDER-TOP-RATED',
        value
    }
}
export function addMoviesToSlider(field:string,page:number){
    return function(dispatch:Dispatch){
        if(field==='popMov'){
            if(page<=500){
                axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextSliderpopMov(r.data.results))
                }) 
            }

        }else if(field==='TopRated'){
            if(page<=442){
                axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US&page='+`${page}`) 
                .then(r=>{
                    dispatch( addNextPageSliderTopRated(r.data.results))
                }) 
            }
        }
    }
}
//<================================BRING TRAILER ID=============================>
function setTrailerId(value:[Movie]):Action{
    return{
        type:'SET-TRAILER-ID',
        value
    }

}
export function bringTrailerId(id:string){
    return function(dispatch:Dispatch){
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5393ab67b32e965ad1b4f68429761e4c&language=en-US`)
        .then(r=>{
            console.log(id)
            dispatch(setTrailerId(r.data.results))

        })
    }

}