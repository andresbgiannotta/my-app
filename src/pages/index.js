import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
         <div className="HeroGroup">
            <h1>Give a Digital Voice to your Brand.</h1>
            <h2>In 2020, the most influencial companies are offering premium digital experiences to their users.</h2>
            <Link to="/page-2/">Find how</Link>
         </div>
      </div>
      <div className="BrandCharacter">
         <div className="BrandCharacterGroup">
            <h2>What is Brand Character?</h2>
            <p>Together we can build something great to reflect your real company value trough your brand.</p>
            <p>Create a consistent Internal Design Process and clear live Documentation trough Cloud Design Systems for improve performance working as a interdisciplinary remote team.</p>
            
            <Link to="/page-2/">Learn more</Link>
         </div>
      </div>
      
      <p>Together we can build something great to reflect your real company value trough your brand.</p>
      <p>Create a consistent Internal Design Process and clear live Documentation trough Cloud Design Systems for improve performance working as a interdisciplinary remote team.</p>
      <h2>Set your Company Design Foundations.</h2>
      <p>Worlwide companies are using now Internet as the main channel for research, communication, support to partners, customers, associates and stakeholders.</p>
    </div>
       
  </Layout>
)

export default IndexPage
