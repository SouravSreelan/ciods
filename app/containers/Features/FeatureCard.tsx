import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import proteo from "../../../public/proteo.png";
import Image from "next/image";
import { FeatureCards } from "@/app/constants";
import Link from "next/link";

const FeatureCard = () => {
  return (
    <>
      <div className="mt-32">
        <center>
          {" "}
          <h1 className="text-6xl font-bold">Tools & Databases</h1>
        </center>
      </div>
      <div className="w-full xl:w-130 xl:h-40 flex justify-center mt-20 flex-col lg:flex-row xs:h-full xs:w-full lg:w-200">
        {FeatureCards.map((item, index) => (
          <Card className="py-4 mx-5 mt-5 mb-5 xs:mt-5 xs:mb-5" key={item.id}>
            <Link href={item.url} target="blank">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{item.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <p className="w-64 lg:w-50 xl:w-64">{item.desc}</p>
              </CardBody>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
