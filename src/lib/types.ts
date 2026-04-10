export interface GalleryItem {
  type: 'image' | 'video'
  src: string
  caption: string
}

export interface Work {
  id: string
  title: string
  subtitle: string
  category: string
  featured: boolean
  emoji: string
  shortDesc: string
  fullDesc?: string
  tags?: string[]
  tools?: string[]
  gallery?: GalleryItem[]
  videoUrl?: string
  thumbnail?: string
}

export interface Experience {
  company: string
  role: string
  year: string
  desc: string
}

export interface Expertise {
  icon: string
  name: string
  desc: string
}

export interface SiteData {
  profile: {
    name: string
    role: string
    bio: string
    photo: string
    resumeUrl: string
    education: { school: string; detail: string; year: string }
    contact: { email: string; whatsapp: string; linkedin: string }
  }
  expertise: Expertise[]
  skills: string[]
  tools: string[]
  experience: Experience[]
  works: Work[]
}
