import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { maxWidth, space, themeGet } from "styled-system";

// Wrapper takes up all available width.
// It does not have padding, only top and bottom margins.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${space};
`;

// The Limiter takes up all available width up to a maximum width.
// What looks like the Container's padding on small screens is actually the Limiter's padding.
const Limiter = styled.div`
  color: ${({ debug }) => (debug ? themeGet("colors.inverseText") : "inherit")};
  background-color: ${({ debug }) =>
    debug ? themeGet("colors.inverseBackground") : "inherit"};
  width: 100%;
  height: 100%;
  ${maxWidth};
  ${space};
`;

const Container = ({
  children,
  debug,
  maxWidth: mxWidth,
  mt,
  mb,
  pt,
  pb,
  px
}) => (
  <Wrapper mt={mt} mb={mb}>
    <Limiter debug={debug} maxWidth={mxWidth} px={px} pt={pt} pb={pb}>
      {children}
    </Limiter>
  </Wrapper>
);

Container.propTypes = {
  debug: PropTypes.bool,
  ...maxWidth.propTypes,
  mt: space.propTypes.mt,
  mb: space.propTypes.mb,
  pt: space.propTypes.pt,
  pb: space.propTypes.pb,
  px: space.propTypes.px
};

Container.defaultProps = {
  debug: false,
  mt: 0,
  mb: 0,
  pt: 0,
  pb: 0,
  px: [2, 3]
};

export default Container;