import React from "react";
import PropTypes from "prop-types";
import { LinkWrapper, NewsLink } from "./style";

const Link = ({ link }) => {
  const { description, url } = link;

  return (
    <LinkWrapper>
      <NewsLink>
        {description} {url}
      </NewsLink>
    </LinkWrapper>
  );
};

export default Link;
