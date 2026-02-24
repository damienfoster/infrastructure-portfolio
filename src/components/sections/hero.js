import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
.hero-buttons {
  display: flex;
  align-items: center;
  gap: 20px; /* This adds the space you are looking for */
  margin-top: 50px;

  a {
      ${({ theme }) => theme.mixins.bigButton};
    }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    }
  }
  
      li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        color: var(--slate);

        &:before {
          content: '➤';
          position: absolute;
          left: 0;
          color: var(--green);
          font-size: 14px;
        }
      }
    }

    @media (max-width: 600px) {
      ul {
        grid-template-columns: 1fr;
      }
    }
  }
  
  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Damien Foster.</h2>;
  const three = <h3 className="big-heading">I build and secure network infrastructure.</h3>;
  const four = (
      <p>
        I’m a network engineer specializing in designing, deploying and securing mission-critical
        infrastructure. Currently, I’m focused on optimizing network performance and implementing
        robust security protocols for enterprise environments.
      </p>
  );
  const five = (
    <div className="hero-buttons">
     <a
      className="email-link"
      href="https://www.linkedin.com/in/damien-foster123"
      target="_blank"
      rel="noreferrer">
      LinkedIn
     </a>
     <a
       className="email-link" 
       href="/resume.pdf" 
       target="_blank" 
       rel="noreferrer">
       Resume
      </a>
     </div>
  );
  const six = (
    <StyledLabStatus>
      <span>✓ Website Status: Online</span> — Hosted and Protected by Cloudflare | Automated Deployment via GitHub CI/CD
    </StyledLabStatus>
  );
  
  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
const StyledLabStatus = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 30px;
  padding: 12px 20px;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  background-color: rgba(100, 255, 218, 0.1);
  color: var(--white);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 10px 15px;
  }

  span {
    color: var(--green);
    font-weight: bold;
    margin-right: 8px;
    white-space: nowrap;
  }
`;


