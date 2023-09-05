import type { Metadata } from "next";
import { FC } from "react";

import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";


export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free & open-source text similarity API",
};

const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl mt-12 ">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs/>
      </div>
    </div>
  );
};

export default page;
