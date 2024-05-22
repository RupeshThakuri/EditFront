import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import YourComponent from '@/components/Vacancy';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacancy page",
  description: "This is Vacancy Page for Edit Enterprises",
  // other metadata
};

const member = () => {
  return (
    <>
      <Breadcrumb
        pageName="Vacancy Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <YourComponent/>
    </>
  )
}

export default member