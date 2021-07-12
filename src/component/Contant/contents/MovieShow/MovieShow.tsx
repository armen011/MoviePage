import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPopularTopRated, setPopularpopMov, addMoviesToPopular } from '../../../../Redux/Action/popularAction'
import { addMoviesToTrending, setTrendingInTheaters, setTrendingToday } from '../../../../Redux/Action/trendingAction'
import { State,Props,Movie } from '../../../../Redux/types'
import './style.scss'
import { Persentage } from '../../../Tools/percentage'
const  imgUrl:string='https://image.tmdb.org/t/p/w220_and_h330_face'
let bool:boolean=true
function MovieShow(props:Props){
    const [version,setVersion]=useState([{first:'',second:''},{first:'',second:''}])
    const versions={
        popular:[{first:'Popular',second:'Top Rated'},{first:'Whats Popular',second:'TopRated'},{first:'Whats Popular',second:''}],
        trending:[{first:'Today',second:'In Theaters'},{first:'Trending',second:'inTheater'},{first:'Trending',second:''}]
    }
    useEffect(()=>{
        switch(props.type){
            case 'popular':
                setVersion(versions.popular)
                break;
            
            case 'trending':
                setVersion(versions.trending)
                break;
        } 
    },[])
    
    
    const dispatch=useDispatch()
    const today=useSelector((state:State)=>state.trending.today)
    const inTheater=useSelector((state:State)=>state.trending.inTheater)
    const popular=useSelector((state:State) => state.popular.popMov)
    const topRated=useSelector((state:State) => state.popular.TopRated)
    let first:Movie[]  
    let second:Movie[]    

    if(props.type==='popular'){
            first=popular
            second=topRated
        }else{
            first=today
            second=inTheater
        }
    const [popBtn,setPopBtn]=useState({})
    const [topBtn,setTopBtn]=useState({})
    const [popularMovies,setPopularMovies]=useState(first)
    const [movie,setMovie]=useState({type:'',count:1})
    function show(type:string){
      
            switch(type){
                case version[1].first:
                    if(props.type==='popular'){
                        dispatch(setPopularpopMov())
                    }else{
                        dispatch(setTrendingToday())
                    }
                    setPopBtn({'backgroundColor':'black','color':'#c0fecf'})
                    setTopBtn({'backgroundColor':'white','color':'black'})
                    break;
                case  version[1].second:
                    if(props.type==='popular'){
                        dispatch(setPopularTopRated())
                    }else if(props.type==='trending'){
                        dispatch(setTrendingInTheaters())
                    }
                    setTopBtn({'backgroundColor':'black','color':'#c0fecf'})
                    setPopBtn({'backgroundColor':'white','color':'black'})
                 break;
    
            }
        
       
    }
    useEffect(()=>{
            show(version[1].first)
            bool=false
    },[])
    
    useEffect(()=>{
        setPopularMovies(first)
        const count=first.length
        setMovie({type:version[1].first,count})
    },[first])
    useEffect(()=>{
        setPopularMovies(second)
        const count=second.length
        setMovie({type:version[1].second,count})
    },[second])
    
    return <div className='movieShow'>

        <div className='titlebutton'>
            <h2 className='title'>{version[1].first}</h2>
            <div className='buttonToSwitch'>
                <button style={popBtn} onClick={()=>show(version[1].first)}>
                         {version[0].first}
                </button>
                <button style={topBtn} onClick={()=>show(version[1].second)}>
                        {version[0].second}
                </button>
            </div>
        </div>
        <div className='movieBar' onScroll={(e:any)=>{
            const scrollLeft=e.target.scrollLeft
            const offsetWidth=e.target.offsetWidth
            const scrollWidth=e.target.scrollWidth
            if(scrollLeft+offsetWidth>=scrollWidth-1){
                const page=movie.count/20+1
                if(props.type==='popular'){
                    
                    dispatch(addMoviesToPopular(movie.type,page))
                }else if(props.type==='trending'){
                    dispatch(addMoviesToTrending(movie.type,page))
                }
            }
        }} >
            
         {popularMovies.map((elm,index)=>{
                return  <Link to={'/movie/'+elm.id}> 
                            <div key={index} className='movies'>
                                <img width='150' height='225' src={imgUrl+elm.poster_path}/>
                                <div className='voteAverage'> 
                                     <Persentage size='40' perc={elm.vote_average*10} />
                                </div>
                                <h2>{elm.title}</h2>  
                                <p>{elm.release_date}</p> 
                            </div>
                        </Link>
            })}
        </div>

    </div>
}
export default MovieShow