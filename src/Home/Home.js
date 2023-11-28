import "./Home.css";
import "./Navbar.css";
import React from "react";
import Form from "../Form/Form";
import AboutImage from "../Asset/People About.png";
import HTML from "../Asset/HTML.svg";
import JAVA from "../Asset/JAVA.svg";
import PHP from "../Asset/PHP.svg";
import UIUX from "../Asset/UIUX.svg";

function SkillCard({ name, image }) {
  return (
    <div className="card-skill">
      <img src={image} alt={name} />
      <div className="font-normal">{name}</div>
    </div>
  );
}

function SkillBar({ name, percent }) {
  return (
    <div className="bar padding-bottom-16">
      <div className="bar-top">
        <div className="font-normal">{name}</div>
        <div className="font-normal">{percent}%</div>
      </div>
      <div className="bar-input">
        <div className="bar-output" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <nav>
        <div className="navbar">
          <div className="nav-logo">MyWebsite</div>
          <div className="nav-list">
            <a className="nav-text" href="/">
              Home
            </a>
            <a className="nav-text" href="#section-about">
              About
            </a>
            <a className="nav-text" href="#section-skill">
              Skill
            </a>
            <a className="nav-text" href="#section-contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header>
        <div className="hero-section">
          <div className="grid-left">
            <p>Hello,</p>
            <p>
              I am <strong>Vincent Tjong</strong>
            </p>
            <p>Software Enginner</p>
            <a href="#section-contact">
              <button className="button-primary">Contact Me &#62;</button>
            </a>
          </div>
          <div className="grid-right">
            <img src="" alt="" />
          </div>
        </div>
      </header>

      <section id="section-about">
        <div className="section-titile">
          <div className="section-title-1">About</div>
          <div className="section-title-2">Me</div>
        </div>
        <div className="section-content">
          <div className="grid-left">
            <img src={AboutImage} alt={AboutImage} />
          </div>
          <div className="grid-right">
            <div className="font-about">
              <div className="font-bold padding-bottom-16">Vincent Tjong</div>
              <div className="font-light padding-bottom-16">
                I'm a student at Bina Nusantara University. I'm Binusian 2025
                and undertaking a major in Master of Information Technology. I'm
                interested in technology and passionate about programming and
                design.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-skill">
        <div className="section-titile">
          <div className="section-title-1">My</div>
          <div className="section-title-2">Skills</div>
        </div>
        <div className="section-content">
          <div className="grid-left">
            <div className="font-left">
              <div className="font-bold padding-bottom-16">
                My Skills Included
              </div>
              <div className="font-light padding-bottom-16">
                Lörem ipsum kvasida hybridkrig dma trafficking. Demitopi platta
                till kurvan datalektiker för om vovis.
              </div>
              <div className="bar padding-bottom-16">
                <SkillBar name={"Figma"} percent={80} />
                <SkillBar name={"Adobe Photoshop"} percent={60} />
                <SkillBar name={"Visual Studio Code"} percent={90} />
              </div>
            </div>
          </div>
          <div className="grid-right">
            <div className="card-skill-section">
              <SkillCard name={"HTML"} image={HTML} />
              <SkillCard name={"UIUX"} image={UIUX} />
              <SkillCard name={"JAVA"} image={JAVA} />
              <SkillCard name={"PHP"} image={PHP} />
            </div>
          </div>
        </div>
      </section>

      <section id="section-contact">
        <Form />
      </section>
    </>
  );
}

export default Home;
