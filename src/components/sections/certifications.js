import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertSection = styled.section`
  max-width: 700px;
  margin: 0 auto 100px;

  .inner {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 300px));
    padding: 0;
    margin: 20px 0 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '➤';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: 14px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 480px) {
    .inner {
      grid-template-columns: 1fr;
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
      <h2 className="numbered-heading">Certifications</h2>
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
