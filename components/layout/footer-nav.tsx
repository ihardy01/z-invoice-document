import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

interface FooterNavProps {
  prev?: NavItem;
  next?: NavItem;
}

export function FooterNav({ prev, next }: FooterNavProps) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col items-start gap-1 p-4 border border-gray-200 rounded-lg hover:border-black transition-colors"
        >
          <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            <ChevronLeft size={12} /> Previous
          </span>
          <span className="font-medium text-black group-hover:text-blue-600">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 p-4 border border-gray-200 rounded-lg hover:border-black transition-colors text-right"
        >
          <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            Next <ChevronRight size={12} />
          </span>
          <span className="font-medium text-black group-hover:text-blue-600">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
