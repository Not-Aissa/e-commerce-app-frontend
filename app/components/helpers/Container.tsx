import React from "react";
import ContainerProps from "./interfaces/ContainerProps";

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <main className={`container mx-auto ${className}`} {...rest}>
      {children}
    </main>
  );
}

export default Container;
