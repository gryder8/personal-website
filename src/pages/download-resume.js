import * as React from "react";
import { Link } from "gatsby";
import resume from "../downloads/resume.pdf"; 
import Layout from "../components/layout";

const downloadResume = () => {
  return (
    <Layout pageTitle="Resume">
      {/* <p>Test page</p> */}
      <a href={resume} download="GavinRyderResume">
        Resume
      </a>
    </Layout>
  );
};

export default downloadResume;
