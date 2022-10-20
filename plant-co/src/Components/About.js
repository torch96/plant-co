import { useEffect } from "react";
import Divider from "./Divider";
import AboutImage from "../Media/about-image.jpeg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us - The Company of House Plants";
  });
  return (
    <>
      <div className="about-page">
        <div className="section-title">About Us</div>

        <div className="about-page-content">
          <img src={AboutImage} alt="The Company of House Plants" />
          <div className="about-page-text">
            Living in the company of house plants is a wonderful thing.
            <br />
            <br />
            Whether your goal is to explore new species, or learn to care for
            ones you have..
            <br />
            We're here to make that process as simple as possible.
            <br />
            <br />
            All information on this site comes from the House Plants Expert.
            <br />
            If you want to learn more information about any of the species
            displayed here, there is a link for more information on every
            species page!
            <br />
            <br />
            Happy house plant hunting!
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default About;
