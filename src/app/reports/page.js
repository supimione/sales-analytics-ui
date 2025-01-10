"use client"; // Required for UI manipulation or using any React hook

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Report</h1>
        <button className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700">
          + Add Sales
        </button>
      </div>
    </div>
  );
}
