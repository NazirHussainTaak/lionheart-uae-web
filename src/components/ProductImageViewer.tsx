import { useState, useEffect, createElement } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ProductImage {
  url: string;
  altText: string | null;
  is3D?: boolean;
}

interface ProductImageViewerProps {
  images: ProductImage[];
  productTitle: string;
}

export default function ProductImageViewer({ images, productTitle }: ProductImageViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setIsFullscreen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const selectedImage = images[selectedIndex];

  return (
    <div className="space-y-4">
      {/* Main Image Viewer */}
      <div className="relative aspect-square rounded-lg overflow-hidden bg-white dark:bg-white group">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {selectedImage?.is3D ? (
              <div className="w-full h-full flex items-center justify-center relative">
                {createElement('model-viewer', {
                  src: selectedImage.url,
                  alt: selectedImage.altText || productTitle,
                  'auto-rotate': true,
                  'camera-controls': true,
                  ar: true,
                  'ar-modes': "webxr scene-viewer quick-look",
                  'environment-image': "neutral",
                  'shadow-intensity': "1",
                  style: { width: "100%", height: "100%" }
                })}
                <Badge className="absolute top-4 left-4 bg-primary/90">3D Model</Badge>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Zoom>
                  <img
                    src={selectedImage?.url}
                    alt={selectedImage?.altText || productTitle}
                    className="max-w-full max-h-full object-contain p-8 cursor-zoom-in"
                    loading="lazy"
                  />
                </Zoom>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Fullscreen Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
          onClick={() => setIsFullscreen(true)}
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
      </div>

      {/* Thumbnail Carousel */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all bg-white dark:bg-white ${
                selectedIndex === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-transparent hover:border-primary/50"
              }`}
            >
              {image.is3D ? (
                <div className="w-full h-full bg-secondary/40 flex items-center justify-center">
                  <Badge variant="secondary" className="text-xs">3D</Badge>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.altText || `${productTitle} thumbnail ${index + 1}`}
                    className="max-w-full max-h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {selectedImage?.is3D ? (
                createElement('model-viewer', {
                  src: selectedImage.url,
                  alt: selectedImage.altText || productTitle,
                  'auto-rotate': true,
                  'camera-controls': true,
                  ar: true,
                  'ar-modes': "webxr scene-viewer quick-look",
                  'environment-image': "neutral",
                  'shadow-intensity': "1",
                  style: { width: "90vw", height: "90vh" }
                })
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={selectedImage?.url}
                    alt={selectedImage?.altText || productTitle}
                    className="max-w-full max-h-[90vh] object-contain p-8 bg-white rounded-lg"
                  />
                </div>
              )}

              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={handleNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
