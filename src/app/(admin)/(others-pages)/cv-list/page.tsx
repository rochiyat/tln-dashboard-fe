import { Metadata } from "next";
import CvList from "@/components/cv-list/CvList"; // file client component

export const metadata: Metadata = {
  title: "CV List",
  description: "This is the CV List page",
};

export default function Page() {
  return <CvList />;
}