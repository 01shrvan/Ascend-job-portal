import React from "react";

const Separator = ({
  className,
  text = "OR",
  textColor = "text-gray-600",
  textWeight = "font-semibold",
  borderColor = "border-gray-300",
  ...props
}) => {
  return (
    <div
      className={`relative flex items-center my-4 ${className}`}
      {...props}
    >
      <div className={`flex-grow border-t ${borderColor}`} />
      <span className={`mx-2 ${textColor} ${textWeight}`}>{text}</span>
      <div className={`flex-grow border-t ${borderColor}`} />
    </div>
  );
};

export default Separator;