import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      <Link to="/">
        <div className="logo">
          <h1>What's up! I'm Ichiro</h1>
          <p>Thank you for visiting my website!</p>
        </div>
      </Link>
      <Link to="/blogs">
        <div className="blogs">
          <h1>BLOGS</h1>
          <p>Check out my engineering blogs!</p>
        </div>
      </Link>
      <div className="aboutme">
        <h1>ABOUT ME</h1>
        <p>My experiences, hobbies and more!</p>
      </div>
      <Link to="/connect">
        <div className="connect">
          <h1>CONNECT</h1>
          <p>I want to connect with you on LinkedIn, GitHub and X!</p>
        </div>
      </Link>
      <div className="others">
        <h1>OTHERS</h1>
        <p>More things coming up!</p>
      </div>
    </div>
  );
}

export default Home;
