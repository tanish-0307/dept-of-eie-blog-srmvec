import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ImagePlus, X } from "lucide-react";
import { saveBlogPost } from "@/utils/storage";

const NewPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    content: "",
  });
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.author || !formData.content) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!coverImage) {
      toast.error("Please upload a cover image");
      return;
    }

    // Create excerpt from content (first 150 characters)
    const excerpt = formData.content.substring(0, 150) + (formData.content.length > 150 ? "..." : "");

    // Save blog post
    const blogPost = {
      id: Date.now().toString(),
      title: formData.title,
      excerpt,
      author: formData.author,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: formData.category,
      image: coverImage,
      content: formData.content,
      galleryImages: galleryImages
    };

    saveBlogPost(blogPost);
    toast.success("Post published successfully!");
    navigate("/");
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setGalleryImages([...galleryImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeGalleryImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <h1 className="font-serif text-4xl font-bold text-primary mb-4">
              Create New Post
            </h1>
            <p className="text-muted-foreground">
              Share your research, insights, and innovations with the community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-[var(--shadow-card)] border">
            <div>
              <Label htmlFor="title">Post Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your post title"
                className="mt-2"
              />
            </div>

            {/* Cover Image Section */}
            <div>
              <Label htmlFor="coverImage">Cover Image *</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Upload a cover image for your blog post
              </p>
              <div className="mt-2">
                {coverImage ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-dashed border-border">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setCoverImage(null)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label
                    htmlFor="coverImage"
                    className="flex flex-col items-center justify-center aspect-video rounded-lg border-2 border-dashed border-border hover:border-accent cursor-pointer transition-colors bg-muted/30"
                  >
                    <ImagePlus className="h-12 w-12 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload cover image
                    </span>
                    <input
                      id="coverImage"
                      type="file"
                      accept="image/*"
                      onChange={handleCoverImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g., Research, Technology"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="author">Author Name</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                className="mt-2 min-h-[300px]"
              />
            </div>

            {/* Gallery Images Section */}
            <div>
              <Label htmlFor="galleryImages">Gallery Images (Optional)</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Upload multiple images to create a gallery/carousel in your blog post
              </p>
              <div className="mt-2">
                {galleryImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-1 right-1"
                          onClick={() => removeGalleryImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <label
                  htmlFor="galleryImages"
                  className="flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed border-border hover:border-accent cursor-pointer transition-colors bg-muted/30"
                >
                  <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Click to add more images to gallery
                  </span>
                  <input
                    id="galleryImages"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryImagesChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" size="lg" className="flex-1">
                Publish Post
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewPost;
