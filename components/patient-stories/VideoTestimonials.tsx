"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

interface VideoItem {
  id: string;
  poster: string;
  src?: string;
  youtubeId?: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: "1",
    poster: "/images/patient-videos/patient-story-1.jpg",
    src: "/videos/patient-stories/patient-story-1.mp4",
  },
  {
    id: "2",
    poster: "/images/patient-videos/patient-story-2.jpg",
    src: "/videos/patient-stories/patient-story-2.mp4",
  },
  {
    id: "3",
    poster: "/images/patient-videos/patient-story-3.jpg",
    src: "/videos/patient-stories/patient-story-3.mp4",
  },
  {
    id: "4",
    poster: "/images/patient-videos/patient-story-4.jpg",
    src: "/videos/patient-stories/patient-story-4.mp4",
  },
  {
    id: "5",
    poster: "/images/patient-videos/patient-story-5.jpg",
    src: "/videos/patient-stories/patient-story-5.mp4",
  },
  {
    id: "6",
    poster: "https://img.youtube.com/vi/QzUGtPe2pxU/hqdefault.jpg",
    youtubeId: "QzUGtPe2pxU",
  },
];

export default function VideoTestimonials() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = VIDEOS.find((v) => v.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => (
          <li key={video.id}>
            <button
              type="button"
              onClick={() => setActiveId(video.id)}
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-rule/60 bg-ink shadow-[0_20px_40px_-24px_rgba(11,18,32,0.4)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail + local posters, no next/image benefit here */}
              <img
                src={video.poster}
                alt="Patient video testimonial"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-70"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 h-6 w-6 fill-ink text-ink" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
        onClick={() => setActiveId(null)}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm transition-opacity duration-300 ${
          active ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={() => setActiveId(null)}
            aria-label="Close video"
            className="absolute -top-11 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-paper transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="aspect-video overflow-hidden rounded-xl bg-black">
            {active?.src && (
              <video
                key={active.id}
                src={active.src}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              />
            )}
            {active?.youtubeId && (
              <iframe
                key={active.id}
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title="Patient video testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
