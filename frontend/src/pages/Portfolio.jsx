import React from "react";
import Layout from "../components/Layout";
import NeutralButton from "../components/ButtonNeutral/NeutralButton";
//import SectionImage from "../components/SectionImage/SectionImage";

export default function Portfolio() {
  return (
    <div>
      <Layout>
        <h1>Portfolio</h1>

        <div className = 'portfolio-page-container'>


          {/* <SectionImage src={project.url} title ={project.title} text = {project.description} /> */}

          <NeutralButton text="VIEW PROJECT"  />

        </div>

      </Layout>
    </div>
  );
}
