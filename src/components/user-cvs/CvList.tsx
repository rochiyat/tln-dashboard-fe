'use client';

import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import TableCvList from "@/components/user-cvs/TableCvList";
import Pagination from "@/components/tables/Pagination";
import { Metadata } from "next";
import React, { useState } from "react";

export const metadata: Metadata = {
  title: "User CVs",
  description:
    "This is the User CVs page",
};


export default function CvList() {

  const [currentPage, setCurrentPage] = useState(Number(1));
  const [totalPages, setTotalPages] = useState(Number(1));
  const [searchTerm, setSearchTerm] = useState("");
  const [key, setKey] = useState("");
  const [totalItems, setTotalItems] = useState(Number(0));

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

  const onTotalItemsChange = (total: number) => {
    setTotalItems(total);
  }

  return (
    <div>
      <PageBreadcrumb pageTitle="User CVs" />
      <div className="space-y-6">
        <ComponentCard title="User CVs">
        {/* Form Pencarian */}
        <div className="mb-4 flex flex-wrap items-center gap-4 justify-end">
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
          onTotalItemsChange={onTotalItemsChange}
          />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={totalItems}
        />
        </ComponentCard>
      </div>
    </div>
  );
}
