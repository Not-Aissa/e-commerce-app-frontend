import axios from "axios";
import Container from "@/app/components/helpers/Container";
import FlexCol from "@/app/components/helpers/FlexCol";
import InformationsView from "@/app/components/InformationsView";
import IBasicView from "@/app/components/IBasicView";
import IAdvancedView from "@/app/components/IAdvancedView";
import Phone from "./interfaces/Phone";
import PhonePageProps from "./interfaces/PhonePageProps";

async function PhonePage({ params, searchParams }: PhonePageProps) {
  const graphicsCard: Phone = (await axios.get(`http://localhost:5555/products-api/electronics/phones/${params.id}`))
    .data;

  const view = searchParams.view ? searchParams.view : "basic";

  return (
    <Container className="mt-4">
      <InformationsView view={view} />

      <FlexCol className="gap-2 mt-2">
        <p className="font-bold">Informations</p>

        {view === "basic" ? (
          <IBasicView name={graphicsCard.name} brand={graphicsCard.brand} price={graphicsCard.price} />
        ) : (
          <IAdvancedView name={graphicsCard.name} brand={graphicsCard.brand} price={graphicsCard.price} />
        )}
      </FlexCol>

      <FlexCol className="gap-2 mt-2">
        <p className="font-bold">Description</p>

        <div className="bg-white p-2">
          <p className="text-sm font-semibold">
            Lorem Ipsum is simply dummy p of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy p ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </FlexCol>
    </Container>
  );
}

export default PhonePage;
