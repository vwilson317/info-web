import './flyer.css';

export default function Flyer() {
    return (
<>
<div className="parallax">
    <div className="overlay">
      <div className="container">
        <h1>Welcome to Rio Hackathon!</h1>
        <p>Join us for an exciting hackathon event in Rio de Janeiro, Brazil. Whether you're a beginner or an
          experienced developer, everyone is welcome!</p>
        <p>Start Time: Thursday, March 28th, 6:00 PM</p>
        <p>End Time: Sunday, March 31st</p>
        <p>The location will be determined based on turnout, so stay tuned for updates.</p>
        <a href="#" className="btn">Register Now</a>
      </div>
    </div>
  </div>

  <footer>
    <a href="#">Contact Us</a>
    <a href="#">Support Us</a>
    <a href="#">Submit Feedback</a>
  </footer>
</>
    );
}