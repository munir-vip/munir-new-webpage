export interface Photo {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  camera?: string;
  lens?: string;
  settings?: string;
  instagramUrl?: string;
}

export const photos: Photo[] = [
  {
    id: "1",
    title: "Dubai Skyline at Sunset",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=1200&fit=crop",
    location: "Dubai, UAE",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8",
    settings: "f/8, 1/250s, ISO 100"
  },
  {
    id: "2",
    title: "Desert Dunes",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&h=1200&fit=crop",
    location: "Liwa Desert, UAE",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8",
    settings: "f/11, 1/500s, ISO 200"
  },
  {
    id: "3",
    title: "Sheikh Zayed Mosque",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&h=1200&fit=crop",
    location: "Abu Dhabi, UAE",
    camera: "Sony A7 IV",
    lens: "16-35mm f/2.8",
    settings: "f/8, 1/125s, ISO 400"
  },
  {
    id: "4",
    title: "Urban Reflections",
    category: "Street",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=1200&fit=crop",
    location: "Dubai Marina, UAE",
    camera: "Sony A7 IV",
    lens: "50mm f/1.4",
    settings: "f/2.8, 1/1000s, ISO 100"
  },
  {
    id: "5",
    title: "Traditional Souk",
    category: "Street",
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&h=800&fit=crop",
    location: "Old Dubai, UAE",
    camera: "Sony A7 IV",
    lens: "35mm f/1.8",
    settings: "f/2.0, 1/250s, ISO 800"
  },
  {
    id: "6",
    title: "Palm Jumeirah Aerial",
    category: "Aerial",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1200&h=800&fit=crop",
    location: "Dubai, UAE",
    camera: "DJI Mavic 3 Pro",
    settings: "f/2.8, 1/500s, ISO 100"
  },
  {
    id: "7",
    title: "Burj Khalifa Night",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1200&fit=crop",
    location: "Downtown Dubai, UAE",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8",
    settings: "f/5.6, 10s, ISO 1600"
  },
  {
    id: "8",
    title: "Mountain Sunrise",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    location: "Hatta, UAE",
    camera: "Sony A7 IV",
    lens: "70-200mm f/2.8",
    settings: "f/11, 1/60s, ISO 200"
  },
  {
    id: "9",
    title: "Cityscape Lights",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=800&fit=crop",
    location: "Abu Dhabi, UAE",
    camera: "Sony A7 IV",
    lens: "24-70mm f/2.8",
    settings: "f/8, 20s, ISO 800"
  }
];

export const photoCategories = ["All", "Landscape", "Architecture", "Street", "Aerial"];
