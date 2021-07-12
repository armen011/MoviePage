import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'
function Header(){
    useEffect(()=>{
        document.body.addEventListener('wheel' ,(e: WheelEvent)=>{
            if(e.deltaY>0){
                setHeaderStyle({height:'0px',transition:'0.5s',overflow:'hidden'})
            }else{
                setHeaderStyle({height:'64px',transition:'0.5s'})
            }
        
        });
    },[])
    const [headerStyle,setHeaderStyle]=useState({})
    
    return<header className='header' style={headerStyle}>
        <div className='firstPart'>
            <a 
                href='/'>
                <div className='Logo'>
                    <img width="154" height="20" src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'/>
                </div>
            </a>

            <div className="container" >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className='containerHover customHover'>
                    <li><a href='https://www.themoviedb.org/movie'>Movies</a></li>
                    <li><a href='https://www.themoviedb.org/movie/now-playing'>Popular</a></li>
                    <li><a href='https://www.themoviedb.org/movie/upcoming'>Tv Shows</a></li>
                    <li><a href='https://www.themoviedb.org/movie/top-rated'>People</a></li>
                </ul>
            </div>
            <div className='navMenu'>
                <ul className='menuUl'>
                    <li className='movies custNavMen'>Movies
                    <ul className='moveisHoverDiv customHover'>
                        <li><a href='https://www.themoviedb.org/movie'>Popular</a></li>
                        <li><a href='https://www.themoviedb.org/movie/now-playing'>Now Playing</a></li>
                        <li><a href='https://www.themoviedb.org/movie/upcoming'>Upcoming</a></li>
                        <li><a href='https://www.themoviedb.org/movie/top-rated'>Top Rated</a></li>
                    </ul>
                    </li>
                    
                    <li className='tvShows custNavMen'>Tv Shows
                    <ul className='tvShowsHoverDiv customHover'>
                        <li><a href='https://www.themoviedb.org/tv'>Popular</a></li>
                        <li><a href='https://www.themoviedb.org/tv/airing-today'>Airing Today</a></li>
                        <li><a href='https://www.themoviedb.org/tv/on-the-air'>On Tv</a></li>
                        <li><a href='https://www.themoviedb.org/tv/top-rated'>Top Rated</a></li>
                    </ul>
                    </li>
                    <li className='people custNavMen'>People
                    <ul className='peopleHoverDiv customHover'>
                        <li><a href='https://www.themoviedb.org/person'>Popular People</a></li>
                        
                    </ul>
                    </li>
                    <li className='more custNavMen'>More
                    <ul className='moreHoverDiv customHover'>
                        <li><a href='https://www.themoviedb.org/discuss'>Discussions</a></li>
                        <li><a href='https://www.themoviedb.org/leaderboard'>Leaderboard</a></li>
                        <li><a href='https://www.themoviedb.org/talk'>Support</a></li>
                        <li><a href='https://www.themoviedb.org/documentation/api'>Api</a></li>
                    </ul>

                    </li>
                </ul>
                
            </div>

        </div>
        <div className='secondPart'>
            <ul className='loginUl'>
               <li><img width='22' height='22' src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg'></img></li>
               <li className='loginLang'>En</li>
               <li><a href='https://www.themoviedb.org/login'>Login</a></li>
               <li><a href='https://www.themoviedb.org/signup'>Join TMDb</a></li>
               <li><img width='29' height='29' src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg'></img></li>
            </ul>
            
        </div>
    </header>
}
export default Header