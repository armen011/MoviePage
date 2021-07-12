import "./style.scss";
function Footer() {
  return <footer className="footer">
    <div className='logoBtn'>
      <img width='130' height='93' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' />
      <button >JOIN THE COMMUNITY</button>
    </div>
    <div className='basics'>
      <ul>
        <li><h3>THE BASICS</h3></li>
        <li>About TMDb</li>
        <li>Contact Us</li>
        <li>Support Forums</li>
        <li>Api</li>
        <li>System Status</li>
      </ul>
    </div>
    <div className='involved'>
    <ul>
        <li><h3>GET INVOLVED</h3></li>
        <li>Contribution Bible</li>
        <li>3d Party Applications</li>
        <li>Add New Movie</li>
        <li>Add New TV Show</li>
      </ul>
    </div>
    <div className='community'>
    <ul>
        <li><h3>COMMUNITY</h3></li>
        <li>Guidelines</li>
        <li>Discussions</li>
        <li>Leaderboard</li>
        <li>Twitter</li>
      </ul>
    </div>
    <div className='legal'>
    <ul>
        <li><h3>LEGAL</h3></li>
        <li>Terms of Use</li>
        <li>API Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

  </footer>;
}
export default Footer;
