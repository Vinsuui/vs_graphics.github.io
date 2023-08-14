import "./portfolio.css";
import {
  Container,
  Row,
  Col,
  Carousel,
  Modal,
  ModalTitle,
} from "react-bootstrap";
import { useState } from "react";

import Typewriter from "typewriter-effect";
import Topbar from "../components/navbar/navbar";
import Image from "../assets/image.png";
import Ionic from "../assets/ionic.png";
import Js from "../assets/js.png";
import Mui from "../assets/mui.png";
import React from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import Frontend from "../assets/Frontend.png";
import Graphic from "../assets/graphic designer.png";
import Ui from "../assets/ui.png";

import {
  BiBuilding,
  BiCalendar,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoBehance,
} from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

//thumbnails
import Graphics1 from "../assets/Graphics/FaceOfTheTeam.jpg";
import Graphics2 from "../assets/Graphics/Nbaposter.jpg";
import Graphics3 from "../assets/Graphics/ESPORTS POSTER 1.jpg";

import UI1 from "../assets/UI/bp1.png";
import HealthApp from "../assets/UI/HealthApp.png";
import UI3 from "../assets/UI/Travel App 1.png";

import OP from "../assets/Web/OP1.png";
import VEP from "../assets/Web/VEP1.png";
import Tele from "../assets/Web/Teleconsult.png";

//esports poster
import Esports1 from "../assets/Graphics/ESPORTS POSTER 2.jpg";
import Esports2 from "../assets/Graphics/ESPORTS POSTER 3.jpg";

//nba face of the team poster
import NBA1 from "../assets/Graphics/NBAF1.jpg";
import NBA2 from "../assets/Graphics/NBAF2.jpg";

//Bank portal
import bp2 from "../assets/UI/bp2.png";
import bp3 from "../assets/UI/bp3.png";

//Health app
import HA1 from "../assets/UI/HA1.png";
import HA2 from "../assets/UI/HA2.png";
import HA3 from "../assets/UI/HA3.png";

//Travel app
import TA1 from "../assets/UI/TA1.png";
import TA2 from "../assets/UI/TA2.png";
import TA3 from "../assets/UI/TA3.png";

function Portfolio() {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [details, setDetails] = useState("");
  const [link, setLink] = useState("");

  async function showImg(img1, img2, img3, details, _link) {
    setDetails(details);
    setLink(_link);
    setImage1(img1);
    setImage2(img2);
    setImage3(img3);
    setShow(true);
  }

  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const showAll = selectedCategory === "All Projects";
  const showGraphic = selectedCategory === "Graphic";
  const showUi = selectedCategory === "UI";
  const showWeb = selectedCategory === "Web";

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container
      fluid="true"
      className="m-0 p-0 App"
      style={{
        background: "white",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      {/* topbar row */}
      <Row>
        <Col>
          <Topbar />
        </Col>
      </Row>
      {/* end of topbar row */}

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        style={{ "--width": "max-content" }}
      >
        <Modal.Header closeButton>
          <ModalTitle>
            <a
              className="linkFont"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              {details}
            </a>
          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Carousel slide={false} data-bs-theme="dark">
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img className="carouselImage" src={image1} alt="Image 1" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img className="carouselImage" src={image2} alt="Image 2" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img className="carouselImage" src={image3} alt="Image 3" />
              </div>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
      {/* end of modal */}

      {/* first section */}
      <Row
        id="about"
        style={{
          padding: "0% 5% 0% 5%",
          height: "max-content",
          marginTop: "100px",
        }}
        className="reverseCol"
      >
        <Col
          sm="12"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className="firstTitle">
            <Typewriter
              options={{
                strings: ["I am Vince,"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="secondTitle">Front-end Developer</p>
          <p className="normalTxt">
            Currently a 4th year Computer Science Student working as an Intern
            Software Developer at LegionTech Inc. and Freelance Graphics
            Designer
          </p>

          {/* <div className="centerBtn">
            <Button
              style={{
                background: "#00A8CC",
                borderRadius: "10px",
                boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.25)",
                border: "none",
                padding: "10px 30px 10px 30px",
                marginRight: "10px",
              }}
            >
              Contact Me
            </Button>

            <Button
              style={{
                border: "1px solid #00A8CC ",
                background: "transparent",
                color: "black",
                borderRadius: "10px",
                padding: "10px 30px 10px 30px",
              }}
            >
              Get CV
            </Button>
          </div> */}
        </Col>

        <Col
          sm="12"
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center", // Center contents vertically
          }}
        >
          <img src={Image} className="imageStyle"/>
        </Col>
      </Row>

      {/* end of first section */}

      {/* second section */}
      <Row
        id="tech-stack"
        style={{
          padding: "0px",
          height: "max-content",
          marginBottom: "5%",
          marginTop: "100px",
        }}
      >
        <Col md="12">
          <p className="techstackTxt">My Tech Stack</p>
          <p className="technologiesTxt">
            Technologies I’ve been working with recently
          </p>
        </Col>
        <Col
          md="12"
          style={{
            width: "100%",
            background: "#EDF7FA",
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            justifyContent: "space-around", // Add equal spacing between images
            alignItems: "center",
          }}
        >
          <img src={Js} className="techImage hoverImage"></img>
          <img src={React} className="techImage hoverImage"></img>
          <img src={Bootstrap} className="techImage hoverImage"></img>
          <img src={Ionic} className="techImage hoverImage"></img>
          <img src={Mui} className="techImage hoverImage"></img>
        </Col>
      </Row>

      {/* end of second section */}

      {/* third section */}

      <Row
        id="experiences"
        style={{
          padding: "0% 5% 0% 5%",
          height: "max-content",
          marginTop: "100px",
        }}
      >
        <Col md="5">
          <p className="servicesTxt">The services I offer and Experiences</p>
          <p className="hireTxt">
            Why Hire Me For Your
            <br />
            Next <span style={{ color: "#00A8CC" }}>Project?</span>
          </p>
          <p className="descriptionTxt">
            I’m specialist in UI/UX Design. My passion is designing & solving
            problems <br />
            through user experience and research.
          </p>
        </Col>
        <Col md="7" style={{ height: "max-content" }}>
          <p className="experiencesTxt">Experiences</p>
          <div className="line"></div>
          <Row className="rowWidth">
            <Col md="6">
              <p className="workTitle">Software Developer</p>
            </Col>
            <Col md="6">
              <div className="workPosition">Internship</div>
            </Col>
            <Col md="4">
              <p className="infoTxt">
                <BiBuilding style={{ fontSize: "16px", marginRight: "3px" }} />
                LegionTech Inc.
              </p>
            </Col>
            <Col md="3">
              <p className="infoTxt">
                <CiLocationOn
                  style={{ fontSize: "16px", marginRight: "3px" }}
                />
                Philippines
              </p>
            </Col>
            <Col md="5">
              <p className="infoTxt infoRight">
                <BiCalendar style={{ fontSize: "16px", marginRight: "3px" }} />
                September 2022 - Present
              </p>
            </Col>
          </Row>
          <div className="lineLight"></div>
          <div className="line"></div>

          <Row className="rowWidth">
            <Col md="6">
              <p className="workTitle">Graphics Designer</p>
            </Col>
            <Col md="6">
              <div className="workPosition">Freelance</div>
            </Col>
            <Col md="4">
              <p className="infoTxt">
                <BiBuilding style={{ fontSize: "16px", marginRight: "3px" }} />
                Armada
              </p>
            </Col>
            <Col md="3">
              <p className="infoTxt">
                <CiLocationOn
                  style={{ fontSize: "16px", marginRight: "3px" }}
                />
                Philippines
              </p>
            </Col>
            <Col md="5">
              <p className="infoTxt infoRight">
                <BiCalendar style={{ fontSize: "16px", marginRight: "3px" }} />
                June 2021 - September 2021
              </p>
            </Col>
          </Row>

          <div className="lineLight"></div>
        </Col>
        <Col md="12" style={{ height: "max-content" }}>
          <div className="skillContainer">
            <div>
              <img
                src={Frontend}
                className="hoverImage"
                style={{ marginBottom: "15px" }}
              />
              <p className="skillStyles">Web Development</p>
              <p className="skillDescription">
                Coding interactive <br />
                website interfaces.
              </p>
            </div>
            <div>
              <img
                src={Ui}
                className="hoverImage"
                style={{ marginBottom: "15px" }}
              />
              <p className="skillStyles">UI UX Design</p>
              <p className="skillDescription">
                Crafting user-centric <br />
                digital experiences.
              </p>
            </div>
            <div>
              <img
                src={Graphic}
                className="hoverImage"
                style={{ marginBottom: "15px" }}
              />
              <p className="skillStyles">Graphic Design</p>
              <p className="skillDescription">
                Visual communication through <br />
                creative imagery.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* end of third section */}

      {/* fourth section */}

      <Row
        id="projects"
        style={{
          padding: "0% 5% 0% 5%",
          height: "max-content",
          marginTop: "100px",
        }}
      >
        <Col md="12">
          <p className="hireTxt">
            My Creative Works
            <br />
            Latest <span style={{ color: "#00A8CC" }}>Projects</span>
          </p>
          <p className="descriptionTxt">
            I have selected and mentioned here some of <br />
            my latest projects.
          </p>

          <Row>
            <Col md="auto">
              <p
                className={`projectsChoices ${showAll ? "selected" : ""}`}
                onClick={() => handleCategoryClick("All Projects")}
              >
                Featured
              </p>
            </Col>
            <Col md="auto">
              <p
                className={`projectsChoices ${showWeb ? "selected" : ""}`}
                onClick={() => handleCategoryClick("Web")}
              >
                Web Applications
              </p>
            </Col>
            <Col md="auto">
              <p
                className={`projectsChoices ${showUi ? "selected" : ""}`}
                onClick={() => handleCategoryClick("UI")}
              >
                UI/UX Design
              </p>
            </Col>
            <Col md="auto">
              <p
                className={`projectsChoices ${showGraphic ? "selected" : ""}`}
                onClick={() => handleCategoryClick("Graphic")}
              >
                Graphic Design
              </p>
            </Col>
          </Row>

          {/* all projects row */}
          {showAll && (
            <Row>
              <Col md="auto">
                <img className="projectThumbnail" src={Tele} />
                <p className="projectName">Teleconsult App</p>
              </Col>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(HA1, HA2, HA3, "", "")}
              >
                <img className="projectThumbnail" src={HealthApp} />
                <p className="projectName">Health App</p>
              </Col>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(Graphics3, Esports1, Esports2, "", "")}
              >
                <img className="projectThumbnail" src={Graphics3} />
                <p className="projectName">Esports Poster</p>
              </Col>
            </Row>
          )}
          {/* end of all projects row */}

          {/* Graphic Design Row */}
          {showGraphic && (
            <Row>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(Graphics3, Esports1, Esports2, "", "")}
              >
                <img className="projectThumbnail" src={Graphics3} />
                <p className="projectName">Esports Poster</p>
              </Col>
              <Col
                className="pointer"
                md="auto"
                onClick={() =>
                  showImg(
                    Graphics1,
                    NBA1,
                    NBA2,
                    "See project",
                    "https://www.behance.net/gallery/136635973/NBA-FACE-OF-THE-TEAM-2022"
                  )
                }
              >
                <img className="projectThumbnail" src={Graphics1} />
                <p className="projectName">FoT(NBA)</p>
              </Col>
              <Col md="auto">
                <img className="projectThumbnail" src={Graphics2} />
                <p className="projectName">NBA Poster</p>
              </Col>
            </Row>
          )}
          {/* end of all graphic design row */}

          {/* UI/UX Design Row */}
          {showUi && (
            <Row>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(UI1, bp2, bp3, "", "")}
              >
                <img className="projectThumbnail" src={UI1} />
                <p className="projectName">Bank Portal</p>
              </Col>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(HA1, HA2, HA3, "", "")}
              >
                <img className="projectThumbnail" src={HealthApp} />
                <p className="projectName">Health App</p>
              </Col>
              <Col
                className="pointer"
                md="auto"
                onClick={() => showImg(TA1, TA2, TA3, "", "")}
              >
                <img className="projectThumbnail" src={UI3} />
                <p className="projectName">Travel App</p>
              </Col>
            </Row>
          )}
          {/* end of all UI/UX design row */}

          {/* Web applications Row */}
          {showWeb && (
            <Row>
              <Col md="auto">
                <img className="projectThumbnail" src={Tele} />
                <p className="projectName">Teleconsult App</p>
              </Col>
              <Col md="auto">
                <img className="projectThumbnail" src={OP} />
                <p className="projectName">Ordering Platform</p>
              </Col>
              <Col md="auto">
                <img className="projectThumbnail" src={VEP} />
                <p className="projectName">Virtual Event Platform</p>
              </Col>
            </Row>
          )}
          {/* end of all web applications row */}
        </Col>
      </Row>
      {/* end of fourth section */}

      {/* fifth row */}
      <Row
        id="contact"
        style={{
          padding: "0% 5% 0% 5%",
          height: "max-content",
          marginTop: "100px",
          marginBottom: "150px",
        }}
      >
        <Col>
          <p className="fifthRowTxt1">Connect with me</p>
          <p className="fifthRowTxt2">For inquiries message me at:</p>
          <p className="fifthRowTxt3">vincepamplona11@gmail.com</p>
        </Col>
      </Row>

      <footer className="footerStyles">
        <div>
          <div className="centerContents">
            <div className="colDiv">
              <a
                href="https://www.linkedin.com/in/vince-frondozo-419723207/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <BiLogoLinkedinSquare className="iconSizes" />
              </a>
            </div>
            <div className="colDiv">
              <a
                href="https://www.behance.net/vincepamplona"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <BiLogoBehance className="iconSizes" />
              </a>
            </div>
            <div className="colDiv">
              <a
                href="https://github.com/Vinsuui"
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <BiLogoGithub className="iconSizes" />
              </a>
            </div>
          </div>
          <p className="footerTxt">Copyright ©2023 | All rights reserved</p>
        </div>
      </footer>
    </Container>
  );
}

export default Portfolio;
