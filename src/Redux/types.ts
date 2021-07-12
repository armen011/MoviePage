import { type } from "os"

type Movie={
  id:number;
  title:string;
  adult:boolean;
  backdrop_path:string;
  overview:string;
  popularity:number;
  poster_path:string;
  original_language:string;
  original_title:string;
  release_date:string;
  video:boolean;
  vote_average:number;
  vote_count:number;
  genre_ids:any;
  key:string;
}
type Details={
  id:number;
  title:string;
  tagline:string;
  poster_path:string;
  backdrop_path:string;
  vote_average:number;
  release_date:string;
  overview:string;
  homepage:string;
  runtime:number;
  genres:Genres[];
  status:string;
}
type Cast={
  id:number;
  adult:boolean;
  name:string;
  character:string;
  original_name:string;
  job:string;
  department:string;
  profile_path:'string'
}
type Genres={
  id:number;
  name:string;
}
type CompanyArr={
  id:number;
  logo_path:string;
  name:string;
  origin_country:string;
}

type Popular={
    popMov:Movie[];
    TopRated:Movie[];
}
type Trending={
  today:Movie[];
  inTheater:Movie[];
}
type Slider={
    popMov:Movie[];
    TopRated:Movie[];
    trailerId:string;
}
type Action={
  type:string;
  value:[Movie];
}
type MovieAction={
  type:string;
  value:{
    data:Details;
    cast:Cast[];
    crew:Cast[];

  };
}
type State={
  popular:Popular;
  slider:Slider;
  trending:Trending;
  movie:MovieDet;
}
type StringAction={
  type:string;
  value:string;
}
type MoviType={
  type:string;
  count:number
}
type Props={
  type:string;
}

type des={
  first:string;
  second:string;
}
type Version={
  popular:[des],
  trending:[des]
}
type MovieDet={
  details:Details;
  cast:Cast[];
  crew:Cast[];
}
export type{Popular,Action,MovieAction,Details,Movie,State,MoviType,Cast,Slider,StringAction,Props,Version,Trending,MovieDet}
