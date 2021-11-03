import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";
import { topleft } from  "../components/alignment.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Gavin Ryder" classname = {topleft}>
      <p>Welcome to my website!</p>
    </Layout>
  );
};

export default IndexPage;
