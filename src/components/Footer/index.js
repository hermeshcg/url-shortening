import React from 'react';

import { Container } from './styles';

import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  return (
    <Container>
      <h1>Shortly</h1>
      <section className="summary">
        <div className="features">
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="company">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </section>
      <section className="social-medias">
        <FaFacebookSquare className="sm" color="#fff" />
        <FaTwitter className="sm" color="#fff" />
        <FaPinterest className="sm" color="#fff" />
        <FaInstagram className="sm" color="#fff" />
      </section>
    </Container>
  );
}

export default Footer;
