import InformationsViewType from "@/app/components/types/InformationsViewType";

interface PhonePageProps {
  params: {
    id: string;
  };
  searchParams: {
    view: InformationsViewType;
  };
}

export default PhonePageProps;
