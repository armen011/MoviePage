import './style.scss'
export function Persentage(props:any){
    const size=props.size
    const perc=props.perc



    return<div className='persentage' style={{width:`${size}px`}}>
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path className="circle-bg" d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"/>
                 <path className="circle"  strokeDasharray={`${perc},100`} d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="16" y="22.35" className="percentage">{perc}</text> 
                <text x="23" y="18.35" className='icon' >%</text> 
            
            </svg>
        </div>

    </div>
}