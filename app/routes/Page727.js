/**
 *
 * Page727
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Link } from "modules/Router";

class Page727 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{ width: "90%", margin: "0 auto", maxWidth: "960px" }}
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
                  lineHeight: "20.8px"
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
                {" "}Chrome OS system menu
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
                The Chrome OS system menu is one of the key part of all Chromebook. It is the quick access point to the most essential parts of the operationg system, akin to the quick settings menu on Android. Always avaialbe, this transient UI enables the user to control the core features of the OS such as WiFi, tethering, data, brightness, volume, VPN, Bluetooth, etc...
              </span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>br</span>
              <span style={{ display: "block" }}>
                The System menu is also the parent of various other system panels, all of which are attached to the shelf, providing the user quick access to all the system features he might need at the right time. In ChromeOS M56, this UI surface was redesigned in depth to bring a clean, balanced UI as well as new features. We made a point of delivering pixel perfect implementation based on thorough and well documented specs and mock-ups which you can discover below.
              </span>
            </p>
          </Container>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page727;
