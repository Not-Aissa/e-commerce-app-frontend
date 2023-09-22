import FlexCol from "./helpers/FlexCol";
import FlexRow from "./helpers/FlexRow";
import IBasicViewProps from "./interfaces/IBasicViewProps";

function IBasicView({ name, brand, price }: IBasicViewProps) {
  return (
    <FlexCol className="gap-2 bg-white p-2">
      <FlexRow className="items-center justify-between">
        <p className="text-lg font-medium">{name}</p>

        <p className="text-sm font-bold">{brand}</p>
      </FlexRow>

      <p className="text-sm font-bold">${price}</p>
    </FlexCol>
  );
}

export default IBasicView;
