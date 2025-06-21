import { Metadata } from "next";
import CvList from "@/components/user-cvs/CvList"; // file client component

export const metadata: Metadata = {
  title: "CV List",
  description: "This is the CV List page",
};

export default function Page() {
  return <CvList />;
}