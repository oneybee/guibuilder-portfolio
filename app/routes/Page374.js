/**
 *
 * Page374
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";
import { Footer } from "modules/Footer";

class Page374 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{
            width: "90%",
            margin: "0 auto",
            maxWidth: "960px",
            fontFamily: "Roboto",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "24px"
          }}
        >
          <Container style={{ paddingTop: "4%", paddingBottom: "4%" }}>
            <div
              style={{
                display: "inline",
                marginBottom: "10%",
                fontFamily: "Roboto Mono"
              }}
            >
              <Link
                to="work"
                style={{
                  color: "#969696",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: "20.8px",
                  textDecoration: "none"
                }}
              >
                <span>↤ Work /</span>
              </Link>
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: 400,
                  color: "rgba(0,0,0,70)",
                  lineHeight: "40px"
                }}
              >
                {" "}Chrome for Chrome OS
              </span>
            </div>
            <p
              style={{
                fontFamily: "Roboto",
                paddingTop: "3%",
                paddingBottom: "3%",
                lineHeight: "30px",
                marginBottom: "25px",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)"
              }}
            >
              <span style={{ display: "block" }}>
                Chrome 50 for desktop saw one of the its biggest revamp in 4 years. This project that spanned across an entire year and for which I was the visual lead consisted in redesigning Chrome core UI from the ground up for all desktop platforms. Starting with Chrome OS, we entirely rethought the way Chrome is implemented, starting by removing any type of bitmap assets such as .png to entirely render it programmatically, which removed a total of ~1200 pngs. Chrome should now scale way better across PPIs, including on Windows when it will be deployed.
              </span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>
                In addition, we brought Material motion to the core UI with complex morphing ripples and bubbles burst on the icons. We also created two different layout: One mouse optimized layout and a more spaced-out one that we are calling "hybrid", which will be deployed by default on touch-enabled Chromebooks. The goal of the layout is to enable better touchability without comprimising layout density and productivity.
              </span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span>
                Also new with Chrome, we introduced a fully re-themed Incognito mode, sporting a beautiful black layout from the tabs to the toolbar and even the NTP and omnibox dropdown.
              </span>
            </p>
            <div
              style={{
                display: "inline",
                fontFamily: "Roboto Mono",
                marginTop: "2%"
              }}
            >
              <span
                style={{
                  fontSize: "25px",
                  fontWeight: 400,
                  color: "rgba(0,0,0,70)",
                  lineHeight: "40px"
                }}
              >
                {" "}Chrome normal layout
              </span>
            </div>
            <span style={{ display: "block" }}>br</span>
            <p
              style={{
                fontFamily: "Roboto",
                paddingBottom: "3%",
                lineHeight: "30px",
                marginBottom: "25px",
                fontSize: "15px",
                fontWeight: 400,
                color: "rgba(0,0,0,70)"
              }}
            >
              <span style={{ display: "block" }}>
                The Chrome normal layout is the default Chrome UI we've known over the years. Optimized for mouse-only input, it is currently deployed on all desktop platforms. Starting with non-touchscreen Chromebooks, the new Chrome Material version will bring a complete visual refresh to this layout.
              </span>
            </p>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-01.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              Chrome normal layout, in default mode.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-02.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              Chrome normal layout, in incognito mode.
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-03.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              Chrome Material design with dev tools (dev tools designer{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Max Walker) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-04.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              Chrome icognito layout omnibox dropdown
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-cros/chrome-cros-05.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              Chrome normal layout omnibox dropdown
            </span>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-02.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-03.png"
              style={{ maxWidth: "100%" }}
            />
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-04.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The new history page, designed by{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Alan Bettes) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-05.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The new history page, designed by{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Alan Bettes) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-06.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              The inspector in MacOS, work of{" "}
            </span>
            <a
              href="#"
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#B4B4B4",
                fontSize: "12px",
                fontFamily: "Roboto Mono"
              }}
            >
              <span>Max Walker) </span>
            </a>
          </Container>
          <Container style={{ marginBottom: "2%", marginTop: "8%" }}>
            <img
              src="http://sebastien-gabriel.com/images/portfolio/chrome-macos/chrome-macos-07.png"
              style={{ maxWidth: "100%" }}
            />
            <span
              style={{
                color: "#B4B4B4",
                fontSize: "12px",
                lineHeight: "19.2px",
                paddingBottom: "5%",
                fontFamily: "Roboto Mono"
              }}
            >
              An excerpt of some of the spec used to implement the new design
            </span>
          </Container>
          <Footer
            style={{
              textAlign: "center",
              marginTop: "10%",
              borderTop: "1px solid #e6e6e6"
            }}
          >
            <span
              style={{
                fontSize: "14px",
                lineHeight: "30px",
                paddingTop: "5%",
                display: "block",
                marginBottom: "25px",
                color: "#969696",
                textTransform: "uppercase"
              }}
            >
              THANKS FOR watching
            </span>
            <Link to="work">
              <span
                style={{
                  fontSize: "12px",
                  lineHeight: "38px",
                  marginBottom: "10px",
                  textTransform: "uppercase",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  letterSpacing: "1px",
                  display: "inline-block",
                  color: "rgb(41, 99, 255)",
                  fontWeight: 600,
                  border: "1px solid #2963ff",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                back to work
              </span>
            </Link>
          </Footer>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page374;
