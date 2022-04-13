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
          <p>Reach out using the form or email us at <b><a
            href="mailto:contact@doctorlawyerengineer.com?subject=DLE Contact Form&body=Message">
            contact@doctorlawyerengineer.com</a></b>!</p>
        </div>
        <div>
          <form netlify className="contact-form" method="POST" name="contact"><input type="hidden" name="form-name"
                                                                                     value="contact"></input><label
            htmlFor="name">Name</label> <input type="text" name="name" id="name" autoComplete="name"
                                               placeholder="Your name" title="Please enter your name"
                                               required=""></input>
            <label htmlFor="email">Email</label> <input type="email" name="email" id="email" autoComplete="email"
                                                        placeholder="Your email address"
                                                        title="The domain portion of the email address is invalid (the portion after the @)."
                                                        pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                                                        required=""></input> <label htmlFor="message">Message</label>
            <textarea
              name="message" id="message" placeholder="Write your message here" rows="7" required=""></textarea>
            <button className="contact-form__submit btn" type="submit" name="submit">Send Message</button>
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