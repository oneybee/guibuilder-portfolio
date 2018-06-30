/**
 *
 * Page133
 *
 */

import React, { Component } from "react";

import { Container } from "modules/Container";
import { Header } from "modules/Header";
import { Menu } from "modules/Menu";
import { Link } from "modules/Router";
import { Hover } from "modules/Animations";

class Page133 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Container
          style={{ width: "90%", maxWidth: "960px", margin: "0 auto" }}
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
              Want to chat? Hit me up on{" "}
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
                Twitter
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
              ,{" "}
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
                Messenger{" "}
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
              or drop me an{" "}
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
                email
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
            <Link to="home" style={{ textDecoration: "none" }}>
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
                    home
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
                get in touch
              </span>
            </li>
            <Link to="work">
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
                    work
                  </span>
                </li>
              </Hover>
            </Link>
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
        </Container>

      </div>
    ); // eslint-disable-line
  }
}

export default Page133;
