import {
    BrowserRouter,
    Route,
  } from "react-router-dom";
import Content from "./component/Contant/Content";
import { Trailer } from "./component/Contant/contents/Trailer/Trailer";
import MoviePage from "./component/MoviePage/MoviePage";
  export function Router(){
      return<BrowserRouter>
        <Route path='/' exact component={Content}/>
        <Route path='/Trailer' exact component={Content}/>
        <Route path='/Trailer' exact component={Trailer}/>
        <Route path='/movie/:id' component={MoviePage}/>
        <Route path='/movie/:id/Trailer' exact component={Trailer}/>
      </BrowserRouter>
  }