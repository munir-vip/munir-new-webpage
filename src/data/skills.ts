export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const developmentSkills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "GSAP", level: 87 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 93 }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 83 },
      { name: "Webpack", level: 80 },
      { name: "Vite", level: 88 }
    ]
  }
];

export const photographySkills = [
  {
    category: "Equipment",
    items: [
      "Sony A7 IV",
      "Sony FE 24-70mm f/2.8 GM II",
      "Sony FE 70-200mm f/2.8 GM OSS",
      "DJI Mavic 3 Pro",
      "Godox AD200 Pro"
    ]
  },
  {
    category: "Specializations",
    items: [
      "Landscape Photography",
      "Portrait Photography",
      "Architectural Photography",
      "Street Photography",
      "Drone Photography",
      "Night Photography"
    ]
  },
  {
    category: "Software",
    items: [
      "Adobe Lightroom",
      "Adobe Photoshop",
      "Capture One",
      "DaVinci Resolve",
      "Final Cut Pro"
    ]
  }
];
