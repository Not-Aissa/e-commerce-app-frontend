import FlexProps from "./interfaces/FlexProps";

function Grid({ children, className, ...rest }: FlexProps) {
  return (
    <div className={`grid ${className}`} {...rest}>
      {children}
    </div>
  );
}

export default Grid;
