import * as React from "react";
import { Link, navigate } from "gatsby";
import resume from "../downloads/resume.pdf"; 

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  gradientButton,
} from "./layout.module.css";
import styled from "styled-components";

const MainSiteTitle = styled.h1`
  font-size: 60px;
  background: linear-gradient(to right, #f4822a, #f8c464);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1px;
`;



const LinkButton = styled.button`
  color: #0000ff;
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <MainSiteTitle>{"Gavin Ryder"}</MainSiteTitle>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <button onClick={() => navigate("/")} className={gradientButton}>
              Home
            </button>
          </li>
          <li className={navLinkItem}>
            <button
              onClick={() => navigate("/about")}
              className={gradientButton}
            >
              About Me
            </button>
          </li>
          <li className={navLinkItem}>
            <LinkButton className={gradientButton}>
              <a href={resume} download="GavinRyderResume">
                Resume
              </a>
            </LinkButton>
          </li>
          <li className={navLinkItem}>
            <LinkButton className={gradientButton}>
              <a
                href="https://www.github.com/gryder8"
                target="_blank"
                rel="noopener norefferer"
              >
                GitHub
              </a>
            </LinkButton>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
