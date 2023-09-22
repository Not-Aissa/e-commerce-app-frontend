import InformationsViewType from "@/app/components/types/InformationsViewType";

interface MonitorPageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default MonitorPageProps;
