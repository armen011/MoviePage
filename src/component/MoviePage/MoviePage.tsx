import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bringDets } from '../../Redux/Action/moviAction'
import { Persentage } from '../Tools/percentage'
import { State} from './../../Redux/types'
import './moviePage.scss'
function MoviePage(props:any){
    function changeData(data:number):string{
        let hr=0
        let min=0
        if(data>=60){
            hr=Math.floor(data/60)
            min=data-60*hr
            return hr+'hr '+min+'min' 
        }else{
            
            return data+'min'
            
        }
    }
    const backgroundUrl='https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/'
    const imgUrl='https://www.themoviedb.org/t/p/w220_and_h330_face/'
    const actorImgUrl='https://www.themoviedb.org/t/p/w138_and_h175_face'
    const dispatch=useDispatch()
    const movie=useSelector((state:State)=>state.movie.details)
    const movieId=props.match.params.id
    const crew=useSelector((state:State)=>state.movie.crew)
    const cast=useSelector((state:State)=>state.movie.cast)
    const [limit,setLimit]=useState(10)
    const background={'background':`url(${backgroundUrl+movie.backdrop_path})`}
    useEffect(()=>{
        dispatch(bringDets(movieId))
    },[])
    return <div className='moviePage'  >
                <div className='about' style={background}>
                        <div className='cover'>
                            <div className='img'>
                                <img src={imgUrl+movie.poster_path} width='300'/>
                            </div>
                            <div className='content'>
                                <h1>{movie.title}<span>(2021)</span></h1>
                                <ul className='info'>
                                    <li>{movie.release_date} ({'US'})</li>
                                    <li className='withDisk'>{movie.genres.map((elm,i)=>{
                                        return <a>{elm.name},</a>
                                    })}</li>
                                    <li className='withDisk'>{changeData(movie.runtime)}</li>
                                </ul>
                                <ul className='btns'>
                                    <li className='scale'>
                                        <Persentage size='60' perc={movie.vote_average*10} />
                                    </li>
                                    <li className='userScore'>User<br/> Score</li>
                                    <li className='circul'><i className="fas fa-list"></i></li>
                                    <li className='circul'><i className="fas fa-heart"></i></li>
                                    <li className='circul'><i className="fas fa-bookmark"></i></li>
                                    <li className='circul'><i className="fas fa-star"></i></li>
                                    <Link to={{pathname:`/movie/${movieId}/Trailer`,
                                                state:`${movieId}`
                                                        }}>
                                    <li className='play'><i className="fas fa-play"></i> Play Trailer </li></Link>
                                </ul>
                                <h4 className='tagline'>{movie.tagline}</h4>
                                <h3 className='overview'>Overview</h3>
                                <p className='overviewText'>{movie.overview}</p>
                                <table className='team'>
                                    
                                    <tr>
                                        <td>Craig Gillespie<br/><sub>Director</sub></td>
                                        <td>Craig Gillespie<br/><sub>Director</sub></td>
                                        <td>Craig Gillespie<br/><sub>Director</sub></td>
                                    </tr>
                                    <tr>
                                        <td>Craig Gillespie<br/><sub>Director</sub></td>
                                    </tr>
                                </table>
                            </div>
                            

                        </div>

                </div>
                <div className='infoDesk'>
                    <div className='info'>
                        <h3>Series Cast</h3>
                        <div className='cast' onScroll={(e:any)=>{
                                const scrollLeft=e.target.scrollLeft
                                const offsetWidth=e.target.offsetWidth
                                const scrollWidth=e.target.scrollWidth
                                if(scrollLeft+offsetWidth>=scrollWidth-1){
                                    setLimit(limit+5)
                                    }
                                }}>
                            {cast.map((elm,i)=>{
                                if(i<limit){
                                    let photo=elm.profile_path?<img src={actorImgUrl+elm.profile_path} width='140' alt="actorPhoto" />:<img src='https://4elements.md/images/detailed/89/no-image-available-sign-vector-id922962354_6562-40.jpg' width='140' height='174' alt="actorPhoto" />;

                                return <div className='actor' key={i}>
                                                {photo}
                                            <div className='name'>
                                                <h5>{elm.name}</h5>
                                                <p>{elm.character}</p>
                                            </div>
                                    </div>
                                }
                            })}
                            
                            

                        </div>

                    </div>
                    <div className='contact'>
                        <ul className='icons'>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li className='line'></li>
                            <li><i className="fas fa-link"></i></li>

                        </ul>
                        <h5>Facts</h5>
                        <ul>
                          <li><h6>Status</h6></li>  
                          <li><p>{movie.status}</p></li>  
                        </ul>
                        <ul>
                            <li> <h6>Network</h6></li>    
                            <li><p>Returning Series</p></li>    
                        </ul>
                       
                        <ul>
                            <li><h6>Type</h6></li>
                            <li> <p>Miniseries</p></li>
                        </ul>
                        
                       <ul>
                            <li><h6>Original Language</h6></li>
                            <li><p>English</p></li>
                       </ul>
                        
                        

                    </div>
                </div>
            </div>
}
export default MoviePage