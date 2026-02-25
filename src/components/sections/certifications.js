import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertSection = styled.section`
  max-width: 900px; /* Increased from 700px to match Experience section width */
  margin: 0 auto;
  padding: 100px 0; /* Adds significant vertical breathing room */

 .degree-info {
    margin-bottom: 40px;
    
    h3 {
      color: var(--white);
      font-size: var(--fz-xl);
      margin-bottom: 5px;
    }
    
    p {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
    }
  }

  .inner {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 420px));
    padding: 0;
    margin: 40px 0 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      color: var(--slate);

      &:before {
        content: '➤';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: 14px;
        line-height: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .inner {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
`;

const Certifications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledCertSection id="certifications" ref={revealContainer}>
      <h2 className="numbered-heading">Education & Certifications</h2>

    <div className="degree-info">
      <h3>Bachelor of Science in Network Operations and Security</h3>
      <p>[Western Governors University] — [2022]</p>
    </div>
    
    <ul className="inner">
        <li>Cisco Certified Network Associate</li>
        <li>AWS Certified SysOps Administrator</li>
        <li>CompTIA Network+</li>
        <li>CompTIA Security+</li>
        <li>CompTIA Cloud Essentials</li>
        <li>CompTIA A+</li>
        <li>CompTIA Project+</li>
        <li>Linux Essentials</li>
        <li>ITIL Foundations</li>
      </ul>
    </StyledCertSection>
  );
};

export default Certifications;
