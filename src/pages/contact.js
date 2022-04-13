import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({
                       data: {
                         site
                       }
                     }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail"
             style={{ backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0 }}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Reach out using the form or email us at <b><a href="mailto:contact@doctorlawyerengineer.com?subject=DLE Contact Form&body=Message">
            contact@doctorlawyerengineer.com</a></b>!</p>
        </div>
        <div>
          <form className="form-container" name="contact" method="POST" data-netlify="true">
            <div>
              <label>Name <input type="text" name="name" /></label>
            </div>
            <div>
              <label>Email <input type="email" name="email" /></label>
            </div>
            <div>
              <label>Subject <input type="text" name="subject"/></label>
            </div>
            <div>
              <label>Message <textarea name="message"></textarea></label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input type="submit" className="button -primary" style={{ marginRight: 0 }} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
