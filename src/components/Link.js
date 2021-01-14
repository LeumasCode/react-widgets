import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <a onClick={onClick} href="" className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;
