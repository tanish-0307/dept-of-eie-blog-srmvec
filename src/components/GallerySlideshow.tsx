import { useState } from "react";
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GallerySlideshowProps {
  images: GalleryImage[];
  onImageRemove?: (index: number) => void;
}

const GallerySlideshow = ({ images, onImageRemove }: GallerySlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative bg-muted rounded-xl overflow-hidden">
          <div className="aspect-video flex items-center justify-center">
            <p className="text-muted-foreground">No images to display. Please upload gallery images.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <div className="relative bg-card rounded-xl overflow-hidden shadow-lg border">
        {/* Main Image */}
        <div className="relative aspect-video">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover animate-fade-in"
          />
          
          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-all"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100 transition-all"
                onClick={goToNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Delete Button */}
          {onImageRemove && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-4 right-4 opacity-80 hover:opacity-100"
              onClick={() => onImageRemove(currentIndex)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {/* Caption */}
        <div className="p-6 bg-background">
          <p className="text-center font-semibold text-lg text-foreground">
            {images[currentIndex].caption}
          </p>
        </div>
        
        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 pb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-accent w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySlideshow;
