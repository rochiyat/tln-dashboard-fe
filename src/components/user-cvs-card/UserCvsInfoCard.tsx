"use client";
import React from "react";
import { UserCvsInfoCardProps } from "@/entities/user-cvs";

export default function UserCvsInfoCard({
  displayName,
  applyCount,
  beratBadan,
  celanaDiatasMataKaki,
  ciriFisikCatatan,
  ciriFisikJenggot,
  ciriFisikJenisRambut,
  ciriFisikPanjangRambut,
  ciriFisikWajah,
  ciriFisikWarnaKulit,
  ciriFisikWarnaRambut,
  ciriFisikByAdmin,
}: UserCvsInfoCardProps) {
  
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Display Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {displayName}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Apply Count
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {applyCount}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Berat Badan
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {beratBadan}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Celana Diatas Mata Kaki
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {celanaDiatasMataKaki}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Catatan
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikCatatan}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Jenggot
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikJenggot}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Jenis Rambut
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikJenisRambut}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Panjang Rambut
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikPanjangRambut}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Wajah
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikWajah}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Warna Kulit
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikWarnaKulit}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik Warna Rambut
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikWarnaRambut}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Ciri Fisik By Admin
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {ciriFisikByAdmin}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
