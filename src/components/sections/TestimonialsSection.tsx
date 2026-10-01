import React from "react";
import { Container } from "../layout/Container";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Batik tulis FuRi Valentine Parang Kusumo memiliki kedalaman warna soga yang luar biasa. Jatuh kain sutranya sangat megah saat dikenakan pada jamuan kenegaraan.",
      author: "Dra. Siti Nurhaliza Wardani",
      role: "Kolektor Seni Tradisi & Budayawan",
      city: "Jakarta",
    },
    {
      quote:
        "Edisi Valentine Silk Scarf dengan motif Truntum menjadi hadiah pernikahan paling berkesan bagi istri saya. Detail cantingnya sangat presisi dan halus sekali.",
      author: "Ir. Hendra Kusuma, M.B.A.",
      role: "Managing Director",
      city: "Surabaya",
    },
    {
      quote:
        "Potongan kemeja formal batik cap dan matching motifnya sempurna. Tidak ada sambungan yang meleset. Kualitas tailoring setara dengan rumah mode haute couture dunia.",
      author: "Bramantyo Wicaksono",
      role: "Diplomat & Pemerhati Wastra Nusantara",
      city: "Den Haag / Jakarta",
    },
  ];

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Apresiasi & Testimoni
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-stone-900 sm:text-4xl">
            Dipercaya Para Kolektor & Tokoh Nusantara
          </h2>
          <p className="mt-3 text-sm text-stone-600">
            Kepercayaan pecinta wastra nusantara adalah kebanggaan terbesar kami dalam merawat keaslian tradisi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all hover:border-amber-700/30 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-amber-800/20 mb-3" />
                <p className="text-sm text-stone-700 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-stone-100 pt-4">
                <p className="text-sm font-bold text-stone-900">{t.author}</p>
                <p className="text-xs text-amber-800 font-medium">{t.role}</p>
                <p className="text-[11px] text-stone-400">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
