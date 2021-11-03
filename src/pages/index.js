import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { withPrefix } from "gatsby";

const IndexPage = () => {
  return (
    <Layout pageTitle="Gavin Ryder">
      <p>Welcome to my website!</p>
    </Layout>
  );
};

export default IndexPage;
