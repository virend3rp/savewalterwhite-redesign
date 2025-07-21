import React, { useEffect, useState } from 'react';
import './Donate.css';

const Donate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const audio = new Audio("/say-my-name.mp3");
    audio.play();

    const prevCount = parseInt(localStorage.getItem("heisenbergCount")) || 0;
    const newCount = prevCount + 1;
    localStorage.setItem("heisenbergCount", newCount);
    setCount(newCount);
  }, []);

  return (
    <div className="donate-container">
      <div className="donate-content">
        <h1 className="donate-heading">💥 You Just Got Heisenberged 💥</h1>

        <div className="heisenberg-counter">
          <span className="counter-label">Victims so far:</span>
          <span className="counter-number">{count}</span>
        </div>

        <p className="donate-subtext">
          Your money has been used to buy <span className="blue-sky">Blue Sky</span>.
        </p>
        <p className="donate-description">
          Instead of donating, you’ve triggered a Level 5 DEA alert. Skyler is on the phone.
          Jesse is screaming in the RV. It’s chaos.
        </p>

        <img
          src="/WALTER-MONEY.jpg"
          alt="Walter White"
          className="walter-gif"
        />

        {/* Personal Note */}
        <div className="creator-note">
          <h3>👨‍🔬 A Note from the Creator</h3>
          <p>
            Built this as a chaotic tribute to Breaking Bad and to sharpen my React chops.
            If this made you laugh or scream, my job here is done.
          </p>
          <p className="contact-info">
            Contact me: <a href="mailto:viruwork1@gmail.com">viruwork1@gmail.com</a> <br />
            or talk to me professionally on <a href="https://www.linkedin.com/in/virender-parasariya-8320631b6/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
