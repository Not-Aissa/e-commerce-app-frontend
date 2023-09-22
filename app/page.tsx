import Link from "next/link";
import Container from "./components/helpers/Container";
import FlexRow from "./components/helpers/FlexRow";
import Products from "./components/Products";

// For test
// Fix this

export type ProductsFilter = "all" | "hats" | "shirts" | "monitors" | "graphicsCards" | "processors" | "phones";

interface HomePageProps {
  params?: {};
  searchParams: {
    filter: ProductsFilter;
  };
}

function HomePage({ searchParams }: HomePageProps) {
  const filter: ProductsFilter = searchParams.filter ? searchParams.filter : "all";

  return (
    <Container className="my-4">
      <section className="space-y-2 mb-4">
        <p className="font-bold">Products Filter</p>

        <FlexRow className="items-center justify-between">
          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=all">
            <p className="text-sm font-bold">All products</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=hats">
            <p className="text-sm font-bold">Hats</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=shirts">
            <p className="text-sm font-bold">Shirts</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=monitors">
            <p className="text-sm font-bold">Monitors</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=graphicsCards">
            <p className="text-sm font-bold">Graphics cards</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=processors">
            <p className="text-sm font-bold">Processors</p>
          </Link>

          <Link className="bg-white py-0.5 px-2 rounded" href="?filter=phones">
            <p className="text-sm font-bold">Phones</p>
          </Link>
        </FlexRow>
      </section>

      <Products filter={filter} />
    </Container>
  );
}

export default HomePage;
