import React from "react";
import { MainContainer, About, Contact, Personal } from "./FooterCSS";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <MainContainer>
      <About>
        <h3>@MojoPlanner</h3>
        <div className="mojoplanner_info">
          <em>
            <p>
              Web application for users to plan, organize, and keep track in a
              simple manner
            </p>
            <p>
              Mojoplanner helps users have ability to stay effective in any
              aspects of life
            </p>
          </em>
        </div>
      </About>
      <Contact>
        <h3>Contact</h3>
        <div className="contact_info">
          <h5>
            <MailOutlineIcon />
            <em>williamvelichko2003@gmail.com</em>
          </h5>
          <h5>
            <LocalPhoneIcon />
            <em>(916)-882-6630</em>
          </h5>
        </div>
      </Contact>
      <Personal>
        <h3>Hi I'm William Velichko</h3>
        <em>
          <p>
            Full Stack Web Developer who is passionate about impacting people’s
            lives through the technology industry.
          </p>
        </em>
        <div className="socials">
          <a href="https://www.linkedin.com/in/williamvelichko/">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/WilliamVelichko">
            <TwitterIcon />
          </a>
          <a href="https://github.com/williamvelichko">
            <GitHubIcon />
          </a>
        </div>
      </Personal>
    </MainContainer>
  );
}

export default Footer;
