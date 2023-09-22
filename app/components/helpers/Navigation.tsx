"use client";

import Cart from "../icons/Cart";
import Search from "../icons/Search";
import useSearch from "../../hooks/useSearch";
import Link from "next/link";
import FlexRow from "./FlexRow";
import Grid from "./Grid";
import FlexCol from "./FlexCol";

function Navigation() {
  const [searchQuery, handleSearchTyping] = useSearch();

  return (
    <FlexRow className="items-center justify-between bg-white p-4">
      <section>
        <Link href="/">
          <p className="text-lg font-bold">E-commerce app</p>
        </Link>
      </section>

      <FlexCol className="w-1/2 md:flex-row md:w-3/4" reverse>
        <FlexRow className="items-center justify-center py-2 border border-acc-grey-color cursor-pointer md:w-36 md:py-0 md:border-r-transparent">
          <Search className="!w-3.5 !h-3.5" />
        </FlexRow>

        <input
          className="outline-none border border-acc-grey-color py-0.5 px-2 w-full"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchTyping}
        />
      </FlexCol>

      <section>
        <Cart className="cursor-pointer" />
      </section>
    </FlexRow>
  );
}

export default Navigation;
