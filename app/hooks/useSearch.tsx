import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

function useSearch(queryValue?: string) {
  const [searchQuery, setSearchQuery] = useState(queryValue ? queryValue : "");

  const router = useRouter();

  function handleSearchTyping(e: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value);

    router.push(`?search=${e.target.value}`);
  }

  return [searchQuery, handleSearchTyping] as const;
}

export default useSearch;
