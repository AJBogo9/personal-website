"use client";

import { websiteOwner } from "@/constants";
import ReactCountryFlag from "react-country-flag";
import { Nav, Navbar } from "rsuite";

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">{websiteOwner}</Navbar.Brand>
      <Nav>
        <Nav.Item href="#about">About</Nav.Item>
        <Nav.Item href="#experience">Experience</Nav.Item>
        <Nav.Item>Contact</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Menu title="Language">
          <Nav.Item
            icon={
              <ReactCountryFlag
                countryCode="FI"
                svg
                style={{ width: "1em", height: "1em" }}
              />
            }
          >
            Finnish
          </Nav.Item>
          <Nav.Item
            icon={
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: "1em", height: "1em" }}
              />
            }
          >
            English
          </Nav.Item>
        </Nav.Menu>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
