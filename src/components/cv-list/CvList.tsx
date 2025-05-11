'use client';

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import Pagination from "@/components/tables/Pagination";
import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "CV List",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};


export default function CvList() {

  const [currentPage, setCurrentPage] = useState(Number(1));
  const [totalPages, setTotalPages] = useState(Number(1));
  
  const onChange = async () => {
      setCurrentPage(2);
      setTotalPages(2)
      return currentPage;
  };


  return (
    <div>
      <PageBreadcrumb pageTitle="CV List" />
      <div className="space-y-6">
        <ComponentCard title="CV List">
        <BasicTableOne />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onChange}
        />
        </ComponentCard>
      </div>
    </div>
  );
}
