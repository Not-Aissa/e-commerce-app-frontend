import { HTMLAttributes, PropsWithChildren } from "react";

interface FlexProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  reverse?: true;
}

export default FlexProps;
