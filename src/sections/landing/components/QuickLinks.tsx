import React from "react";
import styled from "styled-components";

import copy from "~assets/copy";

import IconLink from "./IconLink";

const Container = styled.div`
  position: absolute;
  bottom: 10vh;
`;

const QuickLinks = () => (
  <Container>
    <IconLink
      iconName="file-text"
      color="red"
      href={copy.mainLandingSection.links.resume}
      size={36}
    >
      resume
    </IconLink>

    <IconLink
      iconName="github"
      color="blue"
      href={copy.mainLandingSection.links.github}
      size={36}
    >
      github
    </IconLink>

    <IconLink
      iconName="send"
      color="green"
      href={copy.mainLandingSection.links.mail}
      size={36}
    >
      email
    </IconLink>
  </Container>
);

export default QuickLinks;
