import { useRef, useState } from "react";
import "./animatePage1.css";
import { scroller } from "react-scroll";
import char from "../assets/gamezone_Images/nier char.png";
import char2 from "../assets/gamezone_Images/2_ELDEN-RING CHARACTER.png";
import char3 from "../assets/gamezone_Images/MORTAL COMBAT CHARACTER.png";
import character1bg from "../assets/gamezone_Images/nier full.jpg";

function AnimatedPage1() {
  const animatedElement = useRef(null);
  const animatedElement2 = useRef(null);
  const animatedElement3 = useRef(null);
  const page = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const [direction, setDirection] = useState("");
  const [embeded, setEmbeded] = useState("");

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const itemInView = (element, offset = 0) => {
    if (!element) return;
    const itemTop = element.getBoundingClientRect().top;
    return (
      itemTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  const openTrailer1 = () => {
    setEmbeded("wJxNhJ8fjFk");
    document.querySelector(".animated-page-modal").style.top = "0";
  };

  const openTrailer2 = () => {
    setEmbeded("AKXiKBnzpBQ");
    document.querySelector(".animated-page-modal").style.top = "0";
  };

  const openTrailer3 = () => {
    setEmbeded("jSi2LDkyKmI");
    document.querySelector(".animated-page-modal").style.top = "0";
  };

    

  const handleScrollAnimation = () => {
    animatedElement.current.style.transform = `rotateX(40deg)`;
    animatedElement3.current.style.transform = `rotateX(0deg)`;
    animatedElement2.current.style.transform = `rotateX(0deg)`;
    img1.current.style.marginTop = "-120px";
    clearInterval(aniInt);
    aniInt = 0;
  };

  const handleScrollAnimation2 = () => {
    animatedElement2.current.style.transform = `rotateX(40deg)`;
    animatedElement3.current.style.transform = `rotateX(0deg)`;
    animatedElement.current.style.transform = `rotateX(0deg)`;
    img2.current.style.marginTop = "-130px";
    clearInterval(aniInt);
    aniInt = 0;
  };

  const handleScrollAnimation3 = () => {
    animatedElement3.current.style.transform = `rotateX(40deg)`;
    animatedElement2.current.style.transform = `rotateX(0deg)`;
    animatedElement.current.style.transform = `rotateX(0deg)`;
    img3.current.style.marginTop = "-216px";
    clearInterval(aniInt);
    aniInt = 0;
  };

  const handleScrollUpAnimation = () => {
    if (itemInView(animatedElement.current, -100)) {
      animatedElement.current.style.transform = `rotateX(0deg)`;
      img1.current.style.marginTop = "-55px";
    }
  };

  const handleScrollUpAnimation2 = () => {
    if (itemInView(animatedElement2.current, -100)) {
      animatedElement2.current.style.transform = `rotateX(0deg)`;
      img2.current.style.marginTop = "-65px";
    }
  };

  const handleScrollUpAnimation3 = () => {
    if (itemInView(animatedElement3.current, -100)) {
      animatedElement3.current.style.transform = `rotateX(0deg)`;
      img3.current.style.marginTop = "-157px";
    }
  };

  let aniInt = null;

  aniInt = setInterval(() => {
    if (!page.current) return;
    if (!page2.current) return;
    const itemDim = page.current.getBoundingClientRect();
    const itemDim2 = page2.current.getBoundingClientRect();
    const itemDim3 = page3.current.getBoundingClientRect();
    if (itemDim.top == window.innerHeight) {
      // console.log("in port")
      handleScrollUpAnimation();
      animatedElement.current.style.transform = "skew(0deg)";
      animatedElement2.current.style.transform = "skew(0deg)";
      animatedElement3.current.style.transform = "skew(0deg)";
    }
    if (
      itemDim.top < parseInt(window.innerHeight / 2) &&
      itemDim.top > 0 - window.innerHeight / 2
    ) {
      handleScrollAnimation();
    } else {
      handleScrollUpAnimation();
    }

    if (
      itemDim2.top < parseInt(window.innerHeight / 2) &&
      itemDim2.top > 0 - window.innerHeight / 2
    ) {
      //console.log("in port")
      handleScrollAnimation2();
    } else {
      //console.log("not in port")
      handleScrollUpAnimation2();
    }

    if (
      itemDim3.top < parseInt(window.innerHeight / 2) &&
      itemDim3.top > 0 - window.innerHeight / 2
    ) {
      handleScrollAnimation3();
    } else {
      handleScrollUpAnimation3();
    }
  }, 100);

  const closeTrailer = () => {
    document.querySelector(".animated-page-modal").style.top = "-100vh";
  };

  window.addEventListener(
    "scroll",
    () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollTop) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );

  return (
    <>
      <div className="sep1" id="sep1">
        <div className="sep-1">
          <h5 className="date-released">Date Released</h5>
          <h1 className="day">07</h1>
          <h4 className="month">March</h4>
          <h3 className="year">2022</h3>
        </div>
        <div className="animated-page-1" id="animated-page-1" ref={page}>
          <div className="hmmm">
            <div className="box" id="box1" ref={animatedElement}></div>
            <button className="see-more-btn" id="more1" onClick={openTrailer1}>
              More Info...
            </button>
            <img className="overlay-img" src={char} ref={img1} />
            <p className="game-text">
              NIER <br></br>
              <span className="val">AUTOMATA</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sep2">
        <div className="sep-1">
          <h5 className="date-released">Date Released</h5>
          <h1 className="day">07</h1>
          <h4 className="month">March</h4>
          <h3 className="year">2022</h3>
        </div>
        <div className="animated-page-2" id="animated-page-2" ref={page2}>
          <div className="hmmm">
            <div className="box" id="box2" ref={animatedElement2}></div>
            <button className="see-more-btn" onClick={openTrailer2}>More Info...</button>
            <img className="overlay-img-2" src={char2} ref={img2} />
            <p className="game-text">
              ELDEN <br></br>
              <span className="val">RING</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sep3">
        <div className="sep-1">
          <h5 className="date-released">Date Released</h5>
          <h1 className="day">07</h1>
          <h4 className="month">March</h4>
          <h3 className="year">2022</h3>
        </div>
        <div className="animated-page-3" id="animated-page-3" ref={page3}>
          <div className="hmmm">
            <div className="box" id="box3" ref={animatedElement3}></div>
            <button className="see-more-btn" onClick={openTrailer3}>More Info...</button>
            <img className="overlay-img-3" src={char3} ref={img3} />
            <p className="game-text">
              MORTAL <br></br>
              <span className="val">KOMBAT</span>
            </p>
          </div>
        </div>
      </div>

      <div className="animated-page-modal" onClick={closeTrailer}>
        <div className="animated-page-trailer">
          <iframe
            className="videoFrameAnimated"
            src={`https://www.youtube.com/embed/${embeded}`}
            allowFullScreen="allowfullscreen"
            frameBorder="0"
            title={"Nier Automata"}
          ></iframe>
          <div className="less-info-btn">
            <button className="see-less-btn" onClick={closeTrailer}>
              Less Info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedPage1;
