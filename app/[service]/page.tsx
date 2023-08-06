import { ServicePage } from "@/components";
import { ServiceFeatures as ServiceConstants } from "@/constants";
import { ServicePageType } from "@/types";

import { Metadata } from "next";

type Props = {
  params: { service: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const service = ServiceConstants.find(
    (service) => service.route === `/${params.service}`
  ) as ServicePageType;

  return {
    title: `Service - ${service.heroTopTitle}`,
    description: service.bodyTitle,
  };
};

export default function Service() {
  return <ServicePage />;
}
