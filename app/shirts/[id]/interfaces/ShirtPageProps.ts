import InformationsViewType from "@/app/components/types/InformationsViewType";

interface ShirtPageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default ShirtPageProps;
