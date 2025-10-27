import { useState } from "react";
import { Plus, X, Pencil, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import GallerySlideshow from "./GallerySlideshow";

interface GallerySectionCardProps {
  sectionId: string;
  sectionName: string;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  onImageAdd: (sectionId: string, image: { src: string; alt: string; caption: string }) => void;
  onImageRemove: (sectionId: string, imageIndex: number) => void;
  onNameEdit: (sectionId: string, newName: string) => void;
}

const GallerySectionCard = ({ 
  sectionId, 
  sectionName, 
  images, 
  onImageAdd,
  onImageRemove,
  onNameEdit
}: GallerySectionCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [altText, setAltText] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(sectionName);

  const handleNameSave = () => {
    if (editedName.trim() && editedName !== sectionName) {
      onNameEdit(sectionId, editedName.trim());
      toast.success("Section name updated!");
    }
    setIsEditingName(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!imageFile || !caption || !altText) {
      toast.error("Please fill in all fields");
      return;
    }

    onImageAdd(sectionId, {
      src: imageFile,
      alt: altText,
      caption: caption
    });

    toast.success("Image added successfully!");
    setIsDialogOpen(false);
    setImageFile(null);
    setCaption("");
    setAltText("");
  };

  return (
    <div className="bg-card rounded-xl border shadow-lg overflow-hidden">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isEditingName ? (
            <div className="flex items-center gap-2">
              <Input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="font-serif text-2xl font-bold h-auto py-1"
                onKeyDown={(e) => e.key === 'Enter' && handleNameSave()}
              />
              <Button size="sm" variant="ghost" onClick={handleNameSave}>
                <Check className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-bold text-foreground">{sectionName}</h3>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={() => {
                  setIsEditingName(true);
                  setEditedName(sectionName);
                }}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              size="sm" 
              className="gap-2"
              variant="secondary"
            >
              <Plus className="h-4 w-4" />
              Add Image
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Image to {sectionName}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor={`image-${sectionId}`}>Image</Label>
                {imageFile ? (
                  <div className="relative mt-2 aspect-video rounded-lg overflow-hidden border">
                    <img src={imageFile} alt="Preview" className="w-full h-full object-cover" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setImageFile(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label
                    htmlFor={`image-${sectionId}`}
                    className="flex flex-col items-center justify-center mt-2 aspect-video rounded-lg border-2 border-dashed border-border hover:border-accent cursor-pointer transition-colors bg-muted/30"
                  >
                    <Plus className="h-10 w-10 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">Click to upload</span>
                    <input
                      id={`image-${sectionId}`}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div>
                <Label htmlFor={`caption-${sectionId}`}>Caption</Label>
                <Input
                  id={`caption-${sectionId}`}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter image caption"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor={`alt-${sectionId}`}>Alt Text</Label>
                <Input
                  id={`alt-${sectionId}`}
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  placeholder="Describe the image"
                  className="mt-2"
                />
              </div>

              <Button onClick={handleSubmit} className="w-full">
                Add to Gallery
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Gallery Content */}
      <div className="p-6">
        {images.length > 0 ? (
          <GallerySlideshow 
            images={images} 
            onImageRemove={(index) => onImageRemove(sectionId, index)}
          />
        ) : (
          <div className="aspect-video flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed">
            <div className="text-center p-8">
              <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No images yet. Click "Add Image" to get started.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySectionCard;
