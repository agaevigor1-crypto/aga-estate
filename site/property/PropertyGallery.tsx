"use client";

import { useState } from "react";

export default function PropertyGallery({ photos, title }: { photos: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const move = (step: number) => setActive((current) => (current + step + photos.length) % photos.length);

  return (
    <div className="space-y-3">
      <button type="button" onClick={() => setOpen(true)} className="block w-full overflow-hidden rounded-2xl bg-gray-100" aria-label="Увеличить фотографию">
        <img src={photos[active]} alt={`${title} — фото ${active + 1}`} className="h-[420px] w-full object-cover" />
      </button>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {photos.map((photo, index) => (
          <button key={photo} type="button" onClick={() => setActive(index)} className={`overflow-hidden rounded-lg border-2 ${active === index ? "border-[#8b304c]" : "border-transparent"}`} aria-label={`Показать фото ${index + 1}`}>
            <img src={photo} alt={`${title} — миниатюра ${index + 1}`} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setOpen(false)}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-6 top-5 text-4xl text-white" aria-label="Закрыть">×</button>
          <button type="button" onClick={(e) => { e.stopPropagation(); move(-1); }} className="absolute left-4 rounded-full bg-white/15 px-4 py-3 text-3xl text-white" aria-label="Предыдущее фото">‹</button>
          <img src={photos[active]} alt={`${title} — фото ${active + 1}`} onClick={(e) => e.stopPropagation()} className="max-h-[82vh] max-w-[85vw] rounded-lg object-contain" />
          <button type="button" onClick={(e) => { e.stopPropagation(); move(1); }} className="absolute right-4 rounded-full bg-white/15 px-4 py-3 text-3xl text-white" aria-label="Следующее фото">›</button>
          <p className="absolute bottom-5 text-sm text-white">{active + 1} / {photos.length}</p>
        </div>
      )}
    </div>
  );
}
