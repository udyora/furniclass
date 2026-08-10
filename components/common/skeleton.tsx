import React from "react";

export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="animate-pulse border-b border-border-light">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="py-4 px-4">
          <div className="h-4 bg-bg-card rounded-md w-full"></div>
        </td>
      ))}
    </tr>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-5 border border-border-light rounded-lg bg-white animate-pulse space-y-3">
      <div className="h-4 bg-bg-card rounded w-1/3"></div>
      <div className="h-8 bg-bg-card rounded w-1/2"></div>
    </div>
  );
}
