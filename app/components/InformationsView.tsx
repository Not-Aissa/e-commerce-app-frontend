import FlexCol from "./helpers/FlexCol";
import Grid from "./helpers/Grid";
import Link from "next/link";
import classNames from "classnames";
import InformationsViewProps from "./interfaces/InformationsViewProps";

function InformationsView({ view }: InformationsViewProps) {
  return (
    <FlexCol className="gap-2">
      <p className="font-bold">Informations view</p>

      <Grid className="grid-cols-2 gap-2">
        <Link
          href="?view=basic"
          className={classNames("relative bg-white p-2 before:absolute before:duration-300 before:bg-black", {
            "before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-1 before:h-0 hover:before:h-full":
              view === "advanced",
            "before:top-0 before:left-0 before:w-1 before:h-full": view === "basic",
          })}
        >
          <p className="text-sm font-bold">Basic view</p>
        </Link>

        <Link
          href="?view=advanced"
          className={classNames("relative bg-white p-2 before:absolute before:duration-300 before:bg-black", {
            "before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-1 before:h-0 hover:before:h-full":
              view === "basic",
            "before:top-0 before:left-0 before:w-1 before:h-full": view === "advanced",
          })}
        >
          <p className="text-sm font-bold">Advanced view</p>
        </Link>
      </Grid>
    </FlexCol>
  );
}

export default InformationsView;
