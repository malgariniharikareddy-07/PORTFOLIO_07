import profile from "../assets/niharika.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">
        <h3>👋 Hello, It's Me</h3>

        <h1>
          Niharika <span>✨</span>
        </h1>

        <h2>🚀 Front-End React Developer</h2>

        <p>
          I create modern, responsive, and user-friendly web applications
          using React, JavaScript, HTML, and CSS. Passionate about building
          beautiful digital experiences and continuously learning new
          technologies.
        </p>

        
        
      </div>

      <div className="hero-image">
        <img src={profile} alt="Niharika" />
      </div>

    </section>
  );
}

export default Hero;