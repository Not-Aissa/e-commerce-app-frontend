import InformationsViewType from "@/app/components/types/InformationsViewType";

interface ProcessorPageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default ProcessorPageProps;
