import React, { useRef, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Saul Goodman",
    quote: "You don't need a criminal lawyer... you need a *criminal* lawyer. And this site is totally legit, I swear!",
    img: "/saul.jpg",
    audio: "/hi-im-saul-goodman.mp3",
  },
  {
    name: "Jesse Pinkman",
    quote: "Yo, this site is tight, bitch! Donate or I’ll science you into next week.",
    img: "/jesse.jpg",
    audio: "/he-cant-keep-getting-away.mp3",
  },
  {
    name: "Skyler White",
    quote: "I am not in danger. I am the wife. And I approve this fundraiser.",
    img: "/skyler.jpg",
    audio: "/my-name-is-skyler-white-yo.mp3",
  },
  {
  name: "Tuco Salamanca",
  quote: "We worked with this guy — IT WAS A BLAST! 💥 Tight tight tight!",
  img: "/tuco.jpg",
  audio: "/tuco-tight-tight-tight.mp3",
}
];

const Testimonials = () => {
  const audioRefs = useRef([]);

  useEffect(() => {
    const unlock = () => {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.play().catch(() => {});
          audio.pause();
          audio.currentTime = 0;
        }
      });

      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('touchstart', unlock); // for mobile
  }, []);

 const handleHover = (index) => {
  audioRefs.current.forEach((audio, i) => {
    if (audio && i !== index) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  const audio = audioRefs.current[index];
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(err => console.log("Autoplay blocked:", err));
  }
};

  return (
    <div className="testimonials-container">
      <h1 className="testimonial-heading">Testimonials 💬</h1>
      <div className="testimonial-grid">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="testimonial-card"
            onMouseEnter={() => handleHover(idx)}
            onClick={() => handleHover(idx)} // also allow manual click
          >
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <h2>{t.name}</h2>
            <p>"{t.quote}"</p>
            <audio
              preload="auto"
              ref={(el) => (audioRefs.current[idx] = el)}
              src={t.audio}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
