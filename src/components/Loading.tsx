import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
    </div>
  );
}
