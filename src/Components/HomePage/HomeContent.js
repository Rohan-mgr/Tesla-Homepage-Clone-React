import React, { useEffect } from "react";
import "./HomeContent.css";
import { MdExpandMore } from "react-icons/md";
import Footer from "../Footer/Footer";
import { Fade } from "react-awesome-reveal";

function HomeContent({
  Car,
  CarImg,
  IsTwo,
  BtnName1,
  BtnName2,
  ShowExpandBtn,
  Desc,
  ShowFooter,
}) {
  // function handleScroll() {
  // if (
  //   document.getElementsByClassName("home__content")[0].parentElement
  //     .scrollY > 10
  // ) {
  //   console.log("scrolled");
  // }
  // console.log(
  //   document.getElementsByClassName("home__content")[0].parentElement.scrollY
  // );
  // console.log(window.scrollY);
  // setShow(0);
  // }
  // useEffect(() => {
  //   document
  //     .getElementsByClassName("home__content")[0]
  //     .parentElement.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document
  //       .getElementsByClassName("home__content")[0]
  //       .parentElement.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  function handleClick() {
    document
      .getElementsByClassName("home__content")[0]
      .parentElement.scroll(0, 577);
  }
  return (
    <div
      className="home__content"
      style={{ backgroundImage: `url(${CarImg})` }}
    >
      {/* <img
        src={CarImg}
        alt="teslacarimg"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "auto",
          minHeight: "100vh",
        }}
      /> */}
      <div className="home__banner__contents" style={{ textAlign: "center" }}>
        <div className="home__banner__header">
          <Fade cascade direction="up" triggerOnce>
            <h1>{Car}</h1>
            <p>{Desc}</p>
          </Fade>
        </div>
        <div className="home__banner__buttons">
          <Fade
            direction={ShowFooter ? "bottom" : "left"}
            triggerOnce
            delay={1000}
          >
            <button>{BtnName1}</button>
          </Fade>
          {IsTwo && (
            <Fade direction="right" triggerOnce delay={1000}>
              <button
                style={{
                  background: "#F4F4F4A6",
                  color: "#000",
                }}
              >
                {BtnName2}
              </button>
            </Fade>
          )}
        </div>
      </div>
      {ShowExpandBtn && (
        <button className="expand__More__btn" onClick={handleClick}>
          <Fade direction="down" delay={1600}>
            <MdExpandMore />
          </Fade>
        </button>
      )}
      {ShowFooter && <Footer />}
    </div>
  );
}

export default HomeContent;
