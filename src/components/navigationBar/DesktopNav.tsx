import { navigationPaths } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopNav = () => {
  const pathName = usePathname();
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-4">
        {navigationPaths.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathName === item.href
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-blue-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
