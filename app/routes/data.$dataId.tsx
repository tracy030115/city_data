import { Suspense } from "react";
import Map from "../components/map.client";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getData } from "~/data";


export const loader = ({ params }: LoaderFunctionArgs) => {
    invariant(params.dataId, "Missing dataId param");
    const data = getData(params.dataId);
    if (!data) {
      throw new Response("Not Found", { status: 404 });
    }
    return json({ data, mapboxToken: process.env.MAPBOX_ACCESS_TOKEN });
  };

export default function Data() {
  const { data, mapboxToken } = useLoaderData<typeof loader>();
  if (!mapboxToken) {
    throw new Error("Mapbox token is not defined");
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map mapboxToken={mapboxToken} data={data} />
    </Suspense>
  );
}
