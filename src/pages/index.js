import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import { mainText } from  "../components/paragraph.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h1 className={mainText}>Welcome to my website! Click the buttons above to visit my GitHub, download my resume, or read a little about me!</h1>
    </Layout>
  );
};

export default IndexPage;
