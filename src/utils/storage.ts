// Utility functions for managing blog posts and gallery images in localStorage

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  content: string;
  galleryImages?: string[];
}

export interface GallerySection {
  id: string;
  name: string;
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
}

export interface Achievement {
  id: string;
  studentName: string;
  achievement: string;
  date: string;
  image?: string;
}

const BLOG_POSTS_KEY = 'eie_blog_posts';
const GALLERY_SECTIONS_KEY = 'eie_gallery_sections';
const ACHIEVEMENTS_KEY = 'eie_achievements';

// Blog Post Functions
export const saveBlogPost = (post: BlogPost): void => {
  const posts = getBlogPosts();
  posts.unshift(post); // Add to beginning
  localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(posts));
};

export const getBlogPosts = (): BlogPost[] => {
  const posts = localStorage.getItem(BLOG_POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  const posts = getBlogPosts();
  return posts.find(post => post.id === id);
};

export const deleteBlogPost = (id: string): void => {
  const posts = getBlogPosts();
  const filtered = posts.filter(post => post.id !== id);
  localStorage.setItem(BLOG_POSTS_KEY, JSON.stringify(filtered));
};

// Gallery Section Functions
export const getGallerySections = (): GallerySection[] => {
  const sections = localStorage.getItem(GALLERY_SECTIONS_KEY);
  return sections ? JSON.parse(sections) : [
    { id: 'campus', name: 'Campus Life', images: [] },
    { id: 'labs', name: 'Laboratories & Facilities', images: [] },
    { id: 'events', name: 'Events & Workshops', images: [] },
    { id: 'achievements', name: 'Student Achievements', images: [] }
  ];
};

export const saveGallerySections = (sections: GallerySection[]): void => {
  localStorage.setItem(GALLERY_SECTIONS_KEY, JSON.stringify(sections));
};

export const addImageToSection = (sectionId: string, image: { src: string; alt: string; caption: string }): void => {
  const sections = getGallerySections();
  const section = sections.find(s => s.id === sectionId);
  if (section) {
    section.images.push(image);
    saveGallerySections(sections);
  }
};

export const removeImageFromSection = (sectionId: string, imageIndex: number): void => {
  const sections = getGallerySections();
  const section = sections.find(s => s.id === sectionId);
  if (section) {
    section.images.splice(imageIndex, 1);
    saveGallerySections(sections);
  }
};

export const updateSectionName = (sectionId: string, newName: string): void => {
  const sections = getGallerySections();
  const section = sections.find(s => s.id === sectionId);
  if (section) {
    section.name = newName;
    saveGallerySections(sections);
  }
};

// Achievement Functions
export const saveAchievement = (achievement: Achievement): void => {
  const achievements = getAchievements();
  achievements.unshift(achievement);
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
};

export const getAchievements = (): Achievement[] => {
  const achievements = localStorage.getItem(ACHIEVEMENTS_KEY);
  return achievements ? JSON.parse(achievements) : [];
};

export const deleteAchievement = (id: string): void => {
  const achievements = getAchievements();
  const filtered = achievements.filter(achievement => achievement.id !== id);
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(filtered));
};
