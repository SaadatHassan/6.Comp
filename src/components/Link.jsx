import React from "react";
import { useNavigationContext } from "../hooks/use-navigation-context";
import classNames from "classnames";

export const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500 hover:text-blue-800",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    // href attribute is used for opening links in a new tab (default browser behavior)
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
