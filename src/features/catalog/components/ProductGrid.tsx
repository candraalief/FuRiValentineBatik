import React from "react";
import { BatikProduct } from "@/types";
import { ProductCard } from "./ProductCard";
import { Sparkles } from "lucide-react";

interface ProductGridProps {
  products: BatikProduct[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = "Tidak ada koleksi batik yang cocok dengan pencarian Anda.",
}) => {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-amber-900/20 bg-amber-50/30 p-12 text-center">
        <Sparkles className="h-10 w-10 text-amber-600/50 mb-3" />
        <h4 className="text-base font-semibold text-stone-800">Koleksi Tidak Ditemukan</h4>
        <p className="mt-1 text-sm text-stone-500 max-w-md">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
