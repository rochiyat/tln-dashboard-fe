import { Metadata } from "next";
import CvList from "@/components/user-cvs/CvList"; // file client component

export const metadata: Metadata = {
  title: "User CVs",
  description: "This is the User CVs page",
};

export default function Page() {
  return <CvList />;
}