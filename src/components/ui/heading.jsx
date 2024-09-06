import React from "react";
import PropTypes from "prop-types";

const Heading = ({ level, children, className, ...props }) => {
  const Tag = `h${level}`; // Dynamically set the heading level

  return (
    <Tag className={`text-gray-800 font-bold ${className}`} {...props}>
      {children}
    </Tag>
  );
};

// PropTypes for type checking
Heading.propTypes = {
  level: PropTypes.number.isRequired, // Heading level (1-6)
  children: PropTypes.node.isRequired, // Content inside the heading
  className: PropTypes.string, // Additional CSS classes
};

// Default props
Heading.defaultProps = {
  className: "",
};

export default Heading;
