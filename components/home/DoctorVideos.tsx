import Reveal from "@/components/Reveal";

// THIRD-PARTY MEDIA — embedded via YouTube, not re-hosted.
const VIDEOS = [
  { id: "RmnsE5J6NPM", title: "Podcast Episode #11: Neurofeedback with Erin Meldrum" },
  { id: "T_jJNkeTWP8", title: "Podcast Episode #4: Inflammation and Autoimmune" },
] as const;

export default function DoctorVideos() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-[13px] font-medium uppercase tracking-[0.18em] text-amber">
              In His Own Words
            </h2>
            <span aria-hidden="true" className="hidden h-px flex-1 bg-rule lg:block" />
          </div>
          <p className="mt-6 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            More from Dr. Santucci.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.id} delay={120 + i * 120} offset={24}>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-rule/60 bg-ink shadow-[0_20px_40px_-24px_rgba(11,18,32,0.4)]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
