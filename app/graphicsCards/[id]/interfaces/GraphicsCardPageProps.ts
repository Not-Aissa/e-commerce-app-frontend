import InformationsViewType from "@/app/components/types/InformationsViewType";

interface GraphicsCardPageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default GraphicsCardPageProps;
