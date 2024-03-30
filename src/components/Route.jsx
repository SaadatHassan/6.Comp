import React from "react";
import { useNavigationContext } from "../hooks/use-navigation-context";

export const Route = ({ path, children }) => {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }
  return null;
};
