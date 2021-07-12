import "./joincomp.scss";
function Joincom() {
  return (
    <div className="joincom">
      <h2>Join Today </h2>
      <div className="info">
        <div className="infoBig">
          <p>
            Get access to maintain your own custom personal lists, track what
            <br />
            you've seen and search and filter for what to watch next—
            <br />
            regardless if it's in theatres, on TV or available on popular
            <br />
            streaming services like .
          </p>
          <button>Sign Up</button>
        </div>
        <ul className="infoSmall">
          <li>Enjoy TMDb ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>
            Filter by your subscribed streaming services and find <br />
            something to watch
          </li>
          <li>Log the movies and TV shows you've seen</li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
        </ul>
      </div>
    </div>
  );
}
export default Joincom;
