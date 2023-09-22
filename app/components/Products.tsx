"use client";

import useProductsFetch from "../hooks/useProductsFetch";
import { ProductsFilter } from "../page";
import Product from "./Product";
import FlexRow from "./helpers/FlexRow";
import Grid from "./helpers/Grid";
import Loader from "./helpers/Loader";

// For test
// Fix this

interface ProductsProps {
  filter: ProductsFilter;
}

const productsFilterRole: Record<ProductsFilter, string> = {
  all: "http://localhost:5555/products-api/products",
  hats: "http://localhost:5555/products-api/clothes/hats",
  shirts: "http://localhost:5555/products-api/clothes/shirts",
  monitors: "http://localhost:5555/products-api/electronics/monitors",
  graphicsCards: "http://localhost:5555/products-api/electronics/graphicsCards",
  processors: "http://localhost:5555/products-api/electronics/processors",
  phones: "http://localhost:5555/products-api/electronics/phones",
};

function Products({ filter }: ProductsProps) {
  const [data, isLoading] = useProductsFetch(productsFilterRole[filter]);

  return isLoading ? (
    <FlexRow className="items-center justify-center">
      <Loader />
    </FlexRow>
  ) : (
    <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {data.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </Grid>
  );
}

export default Products;
