import InformationsViewType from "@/app/components/types/InformationsViewType";

interface HatPageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default HatPageProps;
