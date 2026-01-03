export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, and secure payment processing. Implemented real-time inventory tracking and order management system.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/munir/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Portfolio CMS",
    description: "Headless CMS for creative professionals to showcase their work",
    longDescription: "Developed a flexible content management system specifically designed for photographers and designers. Features include drag-and-drop gallery management, customizable themes, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    featured: true
  },
  {
    id: "3",
    title: "Real-Time Chat Application",
    description: "Scalable messaging platform with WebSocket support",
    longDescription: "Created a real-time chat application supporting group conversations, file sharing, and video calls. Implemented WebSocket connections for instant messaging and utilized Redis for session management.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Socket.io", "Express", "Redis"],
    githubUrl: "https://github.com/munir/chat-app",
    featured: false
  },
  {
    id: "4",
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence",
    longDescription: "Built an interactive analytics dashboard providing real-time insights into business metrics. Features customizable charts, data export functionality, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    featured: true
  },
  {
    id: "5",
    title: "Task Management System",
    description: "Collaborative project management tool for teams",
    longDescription: "Developed a comprehensive task management system with features like kanban boards, time tracking, team collaboration, and progress reporting. Integrated with popular tools via REST APIs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["Angular", "NestJS", "MongoDB", "GraphQL"],
    githubUrl: "https://github.com/munir/task-manager",
    featured: false
  },
  {
    id: "6",
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool",
    longDescription: "Integrated AI models to generate creative content including blog posts, social media captions, and product descriptions. Features prompt optimization and multi-language support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["React", "Python", "OpenAI", "Docker"],
    liveUrl: "https://example.com",
    featured: true
  }
];
