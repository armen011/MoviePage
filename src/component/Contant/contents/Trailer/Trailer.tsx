import { Link } from 'react-router-dom'
import './trailer.scss'
import type {State} from './../../../../Redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { bringTrailerId } from '../../../../Redux/Action/sliderAction'
export function Trailer(props:any){
    const dispatch=useDispatch()
    const movieId=props.location.state
    useEffect(()=>{
        dispatch(bringTrailerId(movieId))
        
    },[])
    const trailerId=useSelector((state:State)=>state.slider.trailerId)
    return <div className='trailer'>
        <div className='cover'>
        </div>
        <div className='videoComp'>
        <Link to='./' className='exit'>x</Link>
            <iframe
                width="1200"
                height="700"
                src={`https://www.youtube.com/embed/${trailerId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
           />
        </div>
    </div>
}