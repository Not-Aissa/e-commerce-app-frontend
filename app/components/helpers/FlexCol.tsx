import classNames from "classnames";
import FlexProps from "./interfaces/FlexProps";

function FlexCol({ children, reverse, className, ...rest }: FlexProps) {
  return (
    <div className={classNames(`flex ${className}`, { "flex-col": !reverse, "flex-col-reverse": reverse })} {...rest}>
      {children}
    </div>
  );
}

export default FlexCol;
