import Link from "next/link";
import ProductProps from "./interfaces/ProductProps";
import FlexRow from "./helpers/FlexRow";
import Image from "next/image";

function Product({ _id, name, brand, price, imageUrl, target }: ProductProps) {
  return (
    <Link href={`/${target}/${_id}`} className="bg-white p-4">
      <Image
        src={imageUrl ? imageUrl : "/graphics-cards/gt710-2gb-main.png"}
        alt={`${brand}-${name}`}
        width={500}
        height={500}
      />

      <p className="text-lg font-bold">{name}</p>

      <FlexRow className="items-center justify-between mt-2">
        <p className="text-sm font-bold">{brand}</p>

        <p className="text-sm font-bold">${price}</p>
      </FlexRow>
    </Link>
  );
}

export default Product;
