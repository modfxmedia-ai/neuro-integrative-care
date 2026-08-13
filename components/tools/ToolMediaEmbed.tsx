import type { ToolMedia } from "@/content/tools";

interface ToolMediaEmbedProps {
  media: ToolMedia;
  toolName: string;
}

export default function ToolMediaEmbed({ media, toolName }: ToolMediaEmbedProps) {
  if (media.kind === "placeholder") {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-rule bg-paper-2">
        <div className="px-6 text-center">
          <p className="font-mono font-medium text-[12px] uppercase tracking-[0.18em] text-muted">
            Media Pending
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-muted">
            Clinic to provide procedure/demo media for {toolName}.
          </p>
        </div>
      </div>
    );
  }

  if (media.kind === "vimeo") {
    return (
      // THIRD-PARTY MEDIA — embedded via Vimeo, not re-hosted.
      // Confirm Erchonia/Myndlift have given written permission to use on this site before launch.
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-rule/60 bg-ink">
        <iframe
          src={`https://player.vimeo.com/video/${media.vimeoId}?title=0&byline=0&portrait=0`}
          title={media.title}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    // THIRD-PARTY MEDIA — embedded via YouTube, not re-hosted.
    // Confirm Erchonia/Myndlift have given written permission to use on this site before launch.
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-rule/60 bg-ink">
      <iframe
        src={`https://www.youtube.com/embed/${media.youtubeId}`}
        title={media.title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
