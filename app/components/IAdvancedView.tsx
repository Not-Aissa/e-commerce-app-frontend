import FlexCol from "./helpers/FlexCol";
import FlexRow from "./helpers/FlexRow";
import IAdvancedViewProps from "./interfaces/IAdvancedViewProps";

function IAdvancedView({ name, brand, price }: IAdvancedViewProps) {
  return (
    <FlexCol className="gap-2 bg-white p-2">
      <FlexRow className="items-center justify-between">
        <p className="font-medium">Name</p>

        <p className="text-sm font-bold">{name}</p>
      </FlexRow>

      <FlexRow className="items-center justify-between">
        <p className="font-medium">Brand</p>

        <p className="text-sm font-bold">{brand}</p>
      </FlexRow>

      <FlexRow className="items-center justify-between">
        <p className="font-medium">Price</p>

        <p className="text-sm font-bold">${price}</p>
      </FlexRow>
    </FlexCol>
  );
}

export default IAdvancedView;
