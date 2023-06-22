import React from 'react';
import styled from 'styled-components';
import { media } from '../../includes/breakpoints';
import { colors } from '../../includes/style';
import Container from './Container';

const FooterStyle = styled.footer`
  background: #333333;
  color: white;
  text-align: center;
  font-size: 14px;
  line-height: 1.25em;

  ${Container}{
    padding: 20px;
  }

  a {
    color: white;
    text-decoration: underline;
  }

  a:hover {
    color: ${colors.orange};
  }

  .footer-links {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: block;

      ${media.tablet`
        display: inline-block;
        &:not(:last-child)::after{
          content: '|';
          margin: 0 1em;
        }
      `}
    }
  }
`;

//     <footer id="footer">
//       <div className="container">
//         © {new Date().getFullYear()}, Built with{` `}<a href="https://www.gatsbyjs.com">Gatsby</a>
//       </div>
//     </footer>

export default function Footer() {
  return (
    <FooterStyle id="footer">
      <Container>
        <ul className="footer-links">
          <li key="contact-us" data-key="contact-us">
            <a href="https://crometrics.com/contact/">Contact Us</a>
          </li>
          <li key="follow-us" data-key="follow-us">
            We post interesting stuff on <a href="https://www.linkedin.com/company/crometrics" target="_blank" rel="noreferrer">LinkedIn. Follow Us</a>.
          </li>
          <li key="copyright" data-key="copyright">
            Cro Metrics © {new Date().getFullYear()}
          </li>
        </ul>
      </Container>
    </FooterStyle>
  );
}
