import Footer from "../Footer/footer";
import Joincom from "./contents/JoinComp/Joincomp";
import MovieShow from "./contents/MovieShow/MovieShow";
import Slider from "./contents/Slider/Slider";
import SearchContent from "./contents/SearchContant/SearchContent"
import "./style.scss";
function Content() {
  return (
    <main className="main">
      <SearchContent/>
      <MovieShow type='popular'/>
      <Slider />
      <MovieShow type='trending'/>
      <Joincom />
    </main>
  );
}
export default Content;
