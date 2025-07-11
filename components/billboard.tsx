"use client";

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

function Billboard({ data }: BillboardProps): React.ReactElement {
  if (!data?.imageUrl) {
    console.log("No image URL found!");
    return (
      <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-gray-600">
              {data?.label || "No Billboard Data"}
            </div>
            <p className="text-gray-500 mt-4">Image not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
