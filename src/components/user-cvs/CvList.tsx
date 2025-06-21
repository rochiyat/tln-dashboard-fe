'use client';

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TableCvList from "@/components/user-cvs/TableCvList";
import Pagination from "@/components/tables/Pagination";
import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "CV List",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};


export default function CvList() {

  const [currentPage, setCurrentPage] = useState(Number(1));
  const [totalPages, setTotalPages] = useState(Number(1));
  const [searchTerm, setSearchTerm] = useState("");
  const [key, setKey] = useState("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onTotalPagesChange = (totalPages: number) => {
    setTotalPages(totalPages);
  }

  const handleSearchTerm = (value: string) => {
    setCurrentPage(1);
    setSearchTerm(value);
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="CV List" />
      <div className="space-y-6">
        <ComponentCard title="CV List">
        {/* Form Pencarian */}
        <div className="mb-4 flex flex-wrap items-center gap-4">
            <input
              type="text"
              placeholder="Cari nama & public uuid..."
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm w-60"
            />
            <button
              onClick={() => handleSearchTerm(key)} // reset page saat search
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Search
            </button>
          </div>
        <TableCvList
          page={currentPage}
          onTotalPagesChange={onTotalPagesChange}
          searchTerm={searchTerm}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        </ComponentCard>
      </div>
    </div>
  );
}
