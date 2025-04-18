import { websiteOwner } from "@/constants";
import Link from "next/link";

export const WebsiteOwner = () => {
  return (
    <div className="flex-shrink-0">
      <Link href="/" className="text-2xl font-bold">
        {websiteOwner}
      </Link>
    </div>
  );
};
