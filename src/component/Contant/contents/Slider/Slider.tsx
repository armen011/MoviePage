import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMoviesToSlider, setSliderrpopMov, setSliderTopRated } from "../../../../Redux/Action/sliderAction";
import { State } from "../../../../Redux/types";
import { Trailer } from "../Trailer/Trailer";
import "./style.scss";
let bool:boolean=true
const bgImgUrl='https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/'
const imgUrl='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/'





function Slider() {
  const dispatch=useDispatch()
  const popMov=useSelector((state:State) => state.slider.popMov)
  const TopRated=useSelector((state:State) => state.slider.TopRated)
  const [popBtn,setPopBtn]=useState({})
  const [topBtn,setTopBtn]=useState({})
  const [popularMovies,setPopularMovies]=useState(popMov)
  const [movie,setMovie]=useState({type:'',count:1})


  function show(type:string){
    if(type==='popMov'){
        dispatch(setSliderrpopMov())
        setPopBtn({'backgroundColor':'#37dbaf','color':'#c0fecf'})
        setTopBtn({})

    }else if(type==='TopRated'){
        dispatch(setSliderTopRated())

        setTopBtn({'backgroundColor':'#37dbaf','color':'#c0fecf'})
        setPopBtn({})
    }
}
useEffect(()=>{
  if(bool){
      show('popMov')
      bool=false
  }
},[])

useEffect(()=>{
  setPopularMovies(popMov)
  const count=popMov.length
  setMovie({type:'popMov',count})
},[popMov])
useEffect(()=>{
  setPopularMovies(TopRated)
  const count=TopRated.length
  setMovie({type:'TopRated',count})
},[TopRated])

  
  const [bgImg,setBgImg]=useState('')
  return (
    <div className="slider" style={{background:bgImg,transition:'0.5s'}}>
      <div className='cover'>
      <div className="title">
        <h2>Latest Trailers</h2>
        <div className="toSwitch">
        <button style={popBtn} onClick={()=>show('popMov')}>
                    Popular
                </button>
                <button style={topBtn} onClick={()=>show('TopRated')}>
                    Top Rated
                </button>
        </div>
      </div>
      <div className="sliderComp"  
          onScroll={(e:any)=>{
            const scrollLeft=e.target.scrollLeft
            const offsetWidth=e.target.offsetWidth
            const scrollWidth=e.target.scrollWidth
            if(scrollLeft+offsetWidth>=scrollWidth-1){
                const page=movie.count/20+1
                dispatch(addMoviesToSlider(movie.type,page))
            }
        }} 
      
      >

        {
          popularMovies.map((elm,index)=>{
            return<Link to={{
              pathname:'/Trailer',
              state:`${elm.id}`
            }}>
            <div onMouseEnter={()=>{
                      setBgImg(`url(${bgImgUrl+elm.poster_path})`)
                                    }
                              } 
                  key={index} >
                      <img
                        width="300"
                        height="168"
                  src={imgUrl+elm.poster_path}
                      />
                      <p className='playBtn'></p>
                
                      <h2>{elm.title}</h2>
              <p>Official Trailer</p>
                    </div>
                    </Link>
            

          })
        }
        
      
       
      </div>
      </div>
    </div>

  );
}
export default Slider;
