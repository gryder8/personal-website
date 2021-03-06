import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { mainText } from "../components/paragraph.css";


const AboutPage = () => {
    return (
        <Layout pageTitle = "About Me">
            <h1 className={mainText}>Hey there, I'm Gavin. I'm a student at Santa Clara University studying Computer Science and Engineering.</h1>
            <h1 className={mainText}>I'm super passionate about iOS developement and using mobile applications to make everyday life easier.</h1>
        </Layout>
    )
}

export default AboutPage;