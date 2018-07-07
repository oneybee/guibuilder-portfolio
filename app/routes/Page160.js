/**
 *
 * Page160
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Header } from "modules/Header";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";
import { Row, Column } from "modules/Layout";

class Page160 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{
            width: "90%",
            maxWidth: "960px",
            margin: "0 auto",
            fontFamily: "Roboto"
          }}
        >
          <Header style={{ marginTop: "15%", marginBottom: "15%" }}>
            <span
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontFamily: "Roboto",
                fontSize: "90px",
                fontWeight: 700,
                transitionTarget: "color"
              }}
              transition={{ Target: "color" }}
              color="pink"
            >
              Simple, clean and precise UI design. Follow me on{" "}
            </span>
            <a href="#" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#2963ff",
                  fontFamily: "Roboto",
                  fontSize: "90px",
                  fontWeight: 700
                }}
              >
                Dribbble
              </span>
            </a>
            <span
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontFamily: "Roboto",
                fontSize: "90px",
                fontWeight: 700,
                transitionTarget: "color"
              }}
              transition={{ Target: "color" }}
              color="pink"
            >
              .
            </span>
          </Header>
          <Menu
            style={{
              fontFamily: "Roboto",
              marginTop: "2%",
              marginBottom: "2%",
              color: "#969696",
              lineHeight: "24px"
            }}
          >
            <Link to="home">
              <Hover
                color="#222"
                style={{ color: "#969696", transitionDuration: "0.25s" }}
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    home
                  </span>
                </li>
              </Hover>
            </Link>
            <Link to="get-in-touch" style={{ textDecoration: "none" }}>
              <Hover
                color="#222"
                transition={{ target: "all" }}
                style={{ color: "#969696", transitionDuration: "0.25s" }}
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    get in touch
                  </span>
                </li>
              </Hover>
            </Link>
            <li
              style={{
                display: "inline-block",
                marginLeft: "10px",
                height: "40px"
              }}
            >
              <span
                style={{
                  fontFamily: "Roboto",
                  fontSize: "11px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginRight: "35px",
                  backgroundColor: "rgb(41, 99, 255)",
                  color: "rgb(255, 255, 255)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  borderRadius: "16px",
                  boxShadow: "0 5px 20px rgba(41, 99, 255, 0.30)",
                  cursor: "pointer"
                }}
              >
                work
              </span>
            </li>
            <a href="#">
              <Hover
                style={{ color: "#969696", transitionDuration: "0.25s" }}
                trainsition={{ target: "all" }}
                color="#222"
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    writings
                  </span>
                </li>
              </Hover>
            </a>
            <a href="#">
              <Hover
                transition={{ target: "all" }}
                style={{ color: "#969696", transitionDuration: "0.25s" }}
                color="#222"
              >
                <li
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    fontSize: "11px",
                    height: "40px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "11px",
                      marginRight: "35px",
                      fontWeight: 300,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      cursor: "pointer"
                    }}
                  >
                    photography
                  </span>
                </li>
              </Hover>
            </a>
          </Menu>
          <h5 style={{ marginTop: "15%", marginBottom: "5%" }} />
          <Row>
            <Column col={6}>
              <div style={{ marginBottom: "20%" }}>
                <Link style={{ display: "inline-block", marginBottom: "20px" }}>
                  <Hover
                    style={{
                      display: "inline-block",
                      transitionDuration: "0.25s",
                      cursor: "pointer"
                    }}
                    transition={{ target: "all" }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu.png"
                      style={{ width: "100%", maxWidth: "100%" }}
                    />
                  </Hover>
                </Link>
                <span
                  style={{
                    display: "block",
                    color: "#969696",
                    fontSize: "11px",
                    fontWeight: 400,
                    lineHeight: "17.6px"
                  }}
                >
                  JAN 2017
                </span>
                <Link>
                  <span
                    style={{
                      fontFamily: "Roboto Mono",
                      color: "#5A5A5A",
                      fontSize: "17px",
                      fontWeight: 300,
                      lineHeight: "27.2p",
                      cursor: "pointer"
                    }}
                  >
                    Chrome OS system menu
                  </span>
                </Link>
              </div>
            </Column>
            <Column col={6}>
              <div style={{ marginBottom: "20%" }}>
                <Link style={{ display: "inline-block", marginBottom: "20px" }}>
                  <Hover
                    style={{
                      display: "inline-block",
                      transitionDuration: "0.25s",
                      cursor: "pointer"
                    }}
                    transition={{ target: "all" }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-win.png"
                      style={{ width: "100%", maxWidth: "100%" }}
                    />
                  </Hover>
                </Link>
                <span
                  style={{
                    display: "block",
                    color: "#969696",
                    fontSize: "11px",
                    fontWeight: 400,
                    lineHeight: "17.6px"
                  }}
                >
                  SEP 2016
                </span>
                <Link>
                  <span
                    style={{
                      fontFamily: "Roboto Mono",
                      color: "#5A5A5A",
                      fontSize: "17px",
                      fontWeight: 300,
                      lineHeight: "27.2p",
                      cursor: "pointer"
                    }}
                  >
                    Chrome for Windows
                  </span>
                </Link>
              </div>
            </Column>
            <Column col={12}>
              <div style={{ marginBottom: "10%" }}>
                <Link style={{ display: "inline-block", marginBottom: "20px" }}>
                  <Hover
                    style={{
                      display: "inline-block",
                      transitionDuration: "0.25s",
                      cursor: "pointer"
                    }}
                    transition={{ target: "all" }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-macos.png"
                      style={{ width: "100%", maxWidth: "100%" }}
                    />
                  </Hover>
                </Link>
                <span
                  style={{
                    display: "block",
                    color: "#969696",
                    fontSize: "11px",
                    fontWeight: 400,
                    lineHeight: "17.6px"
                  }}
                >
                  JUL 2016
                </span>
                <Link>
                  <span
                    style={{
                      fontFamily: "Roboto Mono",
                      color: "#5A5A5A",
                      fontSize: "17px",
                      fontWeight: 300,
                      lineHeight: "27.2p",
                      cursor: "pointer"
                    }}
                  >
                    Chrome for MacOS
                  </span>
                </Link>
              </div>
            </Column>
            <Column col={6}>
              <div style={{ marginBottom: "20%" }}>
                <Link style={{ display: "inline-block", marginBottom: "20px" }}>
                  <Hover
                    style={{
                      display: "inline-block",
                      transitionDuration: "0.25s",
                      cursor: "pointer"
                    }}
                    transition={{ target: "all" }}
                    boxShadow="0 12px 65px 2px rgba(41,99,255,0.30), 0 1px 2px 1px rgba(41,99,255,0)"
                  >
                    <img
                      src="http://sebastien-gabriel.com/images/portfolio/chrome-os-system-menu.png"
                      style={{ width: "100%", maxWidth: "100%" }}
                    />
                  </Hover>
                </Link>
                <span
                  style={{
                    display: "block",
                    color: "#969696",
                    fontSize: "11px",
                    fontWeight: 400,
                    lineHeight: "17.6px"
                  }}
                >
                  JAN 2017
                </span>
                <Link>
                  <span
                    style={{
                      fontFamily: "Roboto Mono",
                      color: "#5A5A5A",
                      fontSize: "17px",
                      fontWeight: 300,
                      lineHeight: "27.2p",
                      cursor: "pointer"
                    }}
                  >
                    Chrome OS system menu
                  </span>
                </Link>
              </div>
            </Column>
          </Row>
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page160;
