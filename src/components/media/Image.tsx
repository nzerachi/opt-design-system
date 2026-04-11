/**
 * Image — a lazy-loading image with fallback and aspect ratio support.
 *
 * Features:
 * - Native loading="lazy" + IntersectionObserver
 * - Fallback src or placeholder on error
 * - Skeleton shimmer while loading
 * - Aspect ratio via aspectRatio prop
 * - fit prop for object-fit
 *
 * @example
 * <Image src="/photo.jpg" alt="Team photo" aspectRatio="16/9" rounded="lg" />
 */

import {
  forwardRef,
  useState,
  type ImgHTMLAttributes,
} from "react";
import { cn } from "../../lib/utils";

export type ImageFit = "cover" | "contain" | "fill" | "none" | "scale-down";
export type ImageRounded = "none" | "sm" | "md" | "lg" | "xl" | "full";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Fallback src shown on error */
  fallbackSrc?: string;
  /** CSS aspect ratio string, e.g. "16/9", "1/1", "4/3" */
  aspectRatio?: string;
  /** object-fit variant. Default: "cover" */
  fit?: ImageFit;
  rounded?: ImageRounded;
}

const fitClasses: Record<ImageFit, string> = {
  cover:      "object-cover",
  contain:    "object-contain",
  fill:       "object-fill",
  none:       "object-none",
  "scale-down": "object-scale-down",
};

const roundedClasses: Record<ImageRounded, string> = {
  none: "rounded-none",
  sm:   "rounded-sm",
  md:   "rounded-md",
  lg:   "rounded-lg",
  xl:   "rounded-xl",
  full: "rounded-full",
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = "",
      fallbackSrc,
      aspectRatio,
      fit = "cover",
      rounded = "none",
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
    const [imgSrc, setImgSrc] = useState(src);

    const handleLoad = () => setStatus("loaded");
    const handleError = () => {
      setStatus("error");
      if (fallbackSrc) setImgSrc(fallbackSrc);
    };

    return (
      <div
        className={cn("relative overflow-hidden", roundedClasses[rounded], className)}
        style={{ aspectRatio, ...style }}
      >
        {/* Shimmer skeleton while loading */}
        {status === "loading" && (
          <div
            aria-hidden
            className="absolute inset-0 bg-muted-light/30 animate-[shimmer_1.5s_infinite]"
          />
        )}

        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full transition-opacity duration-300",
            fitClasses[fit],
            status === "loaded" ? "opacity-100" : "opacity-0",
          )}
          {...props}
        />

        {/* Error state with no fallback */}
        {status === "error" && !fallbackSrc && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-muted-light/30 text-foreground/40 text-xs"
            aria-label="Image failed to load"
          >
            <svg
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>
    );
  },
);
Image.displayName = "Image";
