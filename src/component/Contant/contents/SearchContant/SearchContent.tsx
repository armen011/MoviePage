import { useEffect, useState } from 'react'
import './style.scss'
function SearchContent(){
    
    const [bgImgs,setbgImgs]=useState([
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/7VrRna8S3x6xbijooeBmxqvHXiu.jpg',
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg',
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/r2NcIZ1FPMlxCty3vRITVTgGNVS.jpg',
        'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kSNojkWwSZWsYv0Xj1gcq88okzY.jpg',
    ])
    const [bgImg,setBgImg]=useState(bgImgs[0])
    useEffect(()=>{
        const interval =setTimeout(function(){ 
            let index=bgImgs.indexOf(bgImg)
            if(index ==bgImgs.length-1 ){
                index=0
            }else{
                index+=1
            }
            setBgImg(bgImgs[index])
         }, 3000); 
        } ,[bgImg])
    return<div className='searchContent' style={{background:`url('${bgImg}')`,transition:'1s'}}>

        <div className='title'>
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className='searchBar'>
            <input type='text' placeholder='Search for a movie ,tv show,person......'></input>
            <button className='btnhover'>Search</button>
        </div>
        
    </div>
}
export default SearchContent