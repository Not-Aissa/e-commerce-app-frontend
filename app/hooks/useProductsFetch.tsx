import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/interfaces/Product";

function useProductsFetch(url: string) {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function handleFetch() {
    try {
      const axiosResponse = await axios.get(url);

      setData(axiosResponse.data);

      setIsLoading(false);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return [data, isLoading] as const;
}

export default useProductsFetch;
