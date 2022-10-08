import React from "react";
import "./landing.css";
import src from "../assets/img1.png";
import vid from "../assets/vid.mp4";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import four from "../assets/four.png";
import systemFirst from "../assets/systemFirst.png";
import systemSecond from "../assets/systemSecond.png";
import systemThird from "../assets/systemThird.png";
import systemFour from "../assets/systemFour.png";
import systemFive from "../assets/systemFive.png";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import GridViewIcon from "@mui/icons-material/GridView";
import calFrontImage from "../assets/calFrontImage.png";
import clientApparel from "../assets/clientApparel.png";
import clientNishat from "../assets/clientNishat.png";
import clientCrescent from "../assets/clientCresent.png";
import clientGulAhmad from "../assets/clientGulAhmad.png";
import clientInterLoop from "../assets/clientInterloop.png";
import calbackfirst from "../assets/calbackfirst.png"
import calbacksecond from "../assets/calbacksecond.png"
import dots from '../assets/dots.png'

const LandingPage = () => {
  return (
    <div className="landingContainer">
      <div className="innerContainer">


        {/* Intro Part */}
        <div className="introContainer">
          <img src={dots} style={{position:'absolute',right:0,top:200}} alt="" />
          <img src={dots} style={{position:'absolute',left:0,top:670}} alt="" />
          <img src={dots} style={{position:'absolute',right:0,top:830}} alt="" />
          <img src={dots} style={{position:'absolute',left:0,top:1450}} alt="" />
          <img src={dots} style={{position:'absolute',left:0,top:1900}} alt="" />
          <img src={dots} style={{position:'absolute',right:0,top:3000}} alt="" />
          <div className="intro">
            <div className="introTitle">INDUSTRY 4.0</div>
            <div className="introHeading">Industrial Data Intelligence</div>
            <div className="introPara">
              Optimize your productivity by using state-of-the-art Internet of
              Things (IoT0 Technology to transform the traditional way of
              production line control into a fully-automated system by
              streamlining the factory management and payroll processes.
            </div>
            <div className="introButton">Let’s discuss business</div>
          </div>
          <div className="introimage">
            <img height={300} src={src} alt="image" />
          </div>
        </div>

        {/* Video Part */}
        <div className="vidContainer">
          <div className="video">
            <video className="vid" src={vid}></video>
            <PlayCircleFilledWhiteIcon
            className="vidIcon"
              sx={{
                color: "#399B43",
                width: "55px",
                height: "55px",
                marginLeft: "-29px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="vidSideContainer">
            <div className="vidSideTitle">
              Easy to Use Server Based Factory Management Systems
            </div>
            <div className="vidSideBtn">Learn More..</div>
          </div>
        </div>

        {/* Features Part */}
        <div className="featuresContainer">
          <div className="featureHeader">Features</div>
          <div className="featureCardsContainer">
            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={first} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Front End</div>
                <div className="featureItemCardPara">
                  Our front-ends are customised to the core and are alighned to
                  csustomer requiremenets
                </div>
                <div className="featureItemCardLink">Read More</div>
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={second} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Connectivity</div>
                <div className="featureItemCardPara">
                  Our 2.4 GHz mesh network protocol enables our customer to
                  connect with 100 of devices
                </div>
                <div className="featureItemCardLink">Read More</div>
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={third} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Databases</div>
                <div className="featureItemCardPara">
                  You can have data without information, but you cannot have
                  information without data
                </div>
                <div className="featureItemCardLink">Read More</div>
              </div>
            </div>

            <div className="featureItemContainer">
              <div className="featureItemImg">
                <img src={four} alt="" />
              </div>
              <div className="featureItemCard">
                <div className="featureItemCardHeader">Hardware</div>
                <div className="featureItemCardPara">
                  Our hardwares are built around customer problems and not other
                  way around.
                </div>
                <div className="featureItemCardLink">Read More</div>
              </div>
            </div>
          </div>
        </div>

        {/* system Part */}
        <div className="systemsContainer">
          <div className="systemHeader">Our Factory Management Systems</div>
          <div className="systemCardsContainer">
            <div className="systemItems">
              <div className="numberContainer">01</div>
              <div className="systemItemImgContainer">
                <img src={systemFirst} alt="" />
              </div>
              <div className="systemBottmHeading">RRT</div>
              <div className="systemBottomPara">
                Real time, WIP Management of Rolls
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">02</div>
              <div className="systemItemImgContainer">
                <img src={systemSecond} alt="" />
              </div>
              <div className="systemBottmHeading">SPTS</div>
              <div className="systemBottomPara">
                Smart Production Tracking System
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">03</div>
              <div className="systemItemImgContainer">
                <img src={systemThird} alt="" />
              </div>
              <div className="systemBottmHeading">SQMS</div>
              <div className="systemBottomPara">
                Smart Quality Management System
              </div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">04</div>
              <div className="systemItemImgContainer">
                <img src={systemFour} alt="" />
              </div>
              <div className="systemBottmHeading">MEASURE PRO</div>
              <div className="systemBottomPara">Garment Measuring System</div>
            </div>

            <div className="systemItems">
              <div className="numberContainer">05</div>
              <div className="systemItemImgContainer">
                <img src={systemFive} alt="" />
              </div>
              <div className="systemBottmHeading">MEMS</div>
              <div className="systemBottomPara">Machine Efficiency System</div>
            </div>
          </div>
        </div>

        
        {/* Caluculation Part */}
        <div className="calContainer">
          <div className="calContainerInner">
            <div className="calLeftContainer">
              <div className="calLeftHeader">
                Calculate maximum productivity & efficiency with some clicks
              </div>
              <div className="calLeftPara">
                It is important to stay focused while achieving the targets. We
                help you monitor your production efficiency so you can easily
                spot and cut any unnecessary expenses.
              </div>
              <div className="calLeftLine">
                Simply join today to get started!
              </div>
              <div className="calLeftIconContainer">
                <ShopTwoIcon sx={{ marginRight: "20px" }} />
                <GridViewIcon />
              </div>
            </div>

            <div className="calRightContainer">
              <div className="frontcalimg"><img src={calFrontImage} alt="" /></div>
              <div className="firstcalimg"><img src={calbackfirst} alt="" /></div>
              <div className="secondcalimg"><img src={calbacksecond} alt="" /></div>                          
            </div>
          </div>
        </div>


        {/* client Part */}

        <div className="clientContainer">
          <div className="clientHeader">OUR CLIENTS</div>
          <div className="clientItemsContainer">
            <div className="clientItem">
              <img src={clientNishat} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientApparel} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientCrescent} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientGulAhmad} alt="" />
            </div>
            <div className="clientItem">
              <img src={clientInterLoop} alt="" />
            </div>
          </div>
        </div>


        {/* Contact Part */}
        <div className="contactContainer">
          <div className="contactContainerInner">
            <div className="contactLeft">
              <div className="contactLeftHeader">
                Let’s discuss business on a coffee table.{" "}
              </div>
              <div className="contactLeftPara">
                Questions or concerns? Just fill out the form below and our
                support team will get back to you within 24 hours
              </div>
            </div>
            <div className="contactRight">
              <form className="contactForm" action="">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Email Address" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <button type="submit">SUBMIT NOW</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
