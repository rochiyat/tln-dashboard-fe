import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { startCase, toLower } from "lodash";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { userCvsList } from "@/services/user-cvs";
import CvView from "./cv-view";

interface Order {
  id: number;
  userId: number;
  firestoreDocId: string;
  nama: string;
  cvPublishState: string;
  cvPublishExpiry: string;
  cvPendingExpiry: number;
  uid: string;
  publicUid: string;
}

// Define the table data using the interface
export default function TableCvList({
  page,
  onTotalPagesChange,
  searchTerm,
}: {
  page: number;
  onTotalPagesChange: (total: number) => void;
  searchTerm: string;
}) {

  const [tableData, setTableData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [publicUid, setPublicUid] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const limit = 10;
      const response = await userCvsList({ limit:limit, page: page, key: searchTerm });
      if (response.success) {
        setTableData(response.data.data);
        if (onTotalPagesChange) {
          onTotalPagesChange(Math.ceil(response.data.count / limit));
        }
      } else {
        setError(response.error || 'Failed to fetch data');
      }
      setLoading(false);
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleView = async (publicUid: string) => {
    setPublicUid(publicUid);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
              <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  No
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nama
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Publish State
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Publish Expiry
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Public Uuid
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.length === 0 && (
                <TableRow>
                  <TableCell className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col items-center">
                      <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-lg font-medium">No CV data found</p>
                      <p className="text-sm">Try adjusting your search criteria</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                  <TableCell className="px-4 py-8">{""}</TableCell>
                </TableRow>
              )}
              {tableData.length > 0 && (
                tableData.map((order: Order, index: number) => (
                <TableRow key={order.id}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {index + 1 + (page - 1) * 10}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {startCase(toLower(order.nama))}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.cvPublishState}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {dayjs(order.cvPublishExpiry).format("YYYY-MM-DD HH:mm:ss")}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.publicUid}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    <button className="text-brand-500" onClick={() => handleView(order.publicUid)}>View</button>
                  </TableCell>
                </TableRow>
              )))}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Tampilkan modal jika publicUid di-set */}
      {publicUid && <CvView 
      publicUid={publicUid} 
      onClose={() => setPublicUid(null)}/>}
    </div>
  );
}
