import classNames from "classnames";
import FlexProps from "./interfaces/FlexProps";

function FlexRow({ children, reverse, className, ...rest }: FlexProps) {
  return (
    <div className={classNames(`flex ${className}`, { "flex-row": !reverse, "flex-row-reverse": reverse })} {...rest}>
      {children}
    </div>
  );
}

export default FlexRow;
