"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Globe, Github, Upload } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  website?: string;
  github?: string;
  media?: string;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    website: 'https://ecommerce-example.com',
    github: 'https://github.com/username/ecommerce-platform',
    media: 'https://placehold.co/600x400?text=E-commerce+Platform',
  },
  {
    id: '2',
    name: 'Weather App',
    description: 'A responsive weather application that provides real-time weather data and forecasts.',
    techStack: ['Vue.js', 'OpenWeatherMap API', 'Tailwind CSS'],
    website: 'https://weather-app-demo.com',
    github: 'https://github.com/username/weather-app',
    media: 'https://placehold.co/600x400?text=Weather+App',
  },
  {
    id: '3',
    name: 'Task Management System',
    description: 'A collaborative task management tool for teams with real-time updates and analytics.',
    techStack: ['Angular', 'Firebase', 'RxJS', 'NgRx'],
    website: 'https://task-manager-demo.com',
    github: 'https://github.com/username/task-management',
    media: 'https://placehold.co/600x400?text=Task+Management+System',
  },
  {
    id: '4',
    name: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    website: 'https://portfolio-example.com',
    github: 'https://github.com/username/portfolio',
    media: 'https://placehold.co/600x400?text=Portfolio+Website',
  },
  {
    id: '5',
    name: 'Fitness Tracker',
    description: 'A mobile app for tracking workouts, nutrition, and health metrics.',
    techStack: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
    website: 'https://fitness-tracker-demo.com',
    github: 'https://github.com/username/fitness-tracker',
    media: 'https://placehold.co/600x400?text=Fitness+Tracker',
  },
];

const techStackOptions = [
  "React", "Vue.js", "Angular", "Next.js", "Node.js", "Express", "Django",
  "Flask", "Ruby on Rails", "PHP", "Laravel", "ASP.NET", "Java", "Spring Boot",
  "Python", "JavaScript", "TypeScript", "C#", "Go", "Rust", "Swift",
  "Kotlin", "MongoDB", "PostgreSQL", "MySQL", "Redis", "GraphQL", "REST API",
  "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Firebase",
  "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "React Native",
  "Flutter", "Ionic", "Electron", "Unity", "Unreal Engine"
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [newProject, setNewProject] = useState<Partial<Project>>({});
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>([]);

  const addProject = () => {
    if (newProject.name && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now().toString(), techStack: selectedTechStack } as Project]);
      setNewProject({});
      setSelectedTechStack([]);
    }
  };

  return (
    <div className="container mx-auto py-6 bg-white">
      <div className="flex justify-end mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-gray-900">Add New Project</DialogTitle>
              <DialogDescription className="text-gray-600">Enter the details of your new project.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right text-gray-700">Name</Label>
                <Input id="name" className="col-span-3 bg-white text-gray-900" value={newProject.name || ''} onChange={(e) => setNewProject({...newProject, name: e.target.value})} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right text-gray-700">Description</Label>
                <Input id="description" className="col-span-3 bg-white text-gray-900" value={newProject.description || ''} onChange={(e) => setNewProject({...newProject, description: e.target.value})} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="techStack" className="text-right text-gray-700">Tech Stack</Label>
                <Select
                  onValueChange={(value) => setSelectedTechStack([...selectedTechStack, value])}
                >
                  <SelectTrigger className="col-span-3 bg-white text-gray-900">
                    <SelectValue placeholder="Select technologies" />
                  </SelectTrigger>
                  <SelectContent>
                    {techStackOptions.map((tech) => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right text-gray-700">Selected</Label>
                <div className="col-span-3 flex flex-wrap gap-2">
                  {selectedTechStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer bg-gray-200 text-gray-800" onClick={() => setSelectedTechStack(selectedTechStack.filter(t => t !== tech))}>
                      {tech} ✕
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="website" className="text-right text-gray-700">Website</Label>
                <Input id="website" className="col-span-3 bg-white text-gray-900" value={newProject.website || ''} onChange={(e) => setNewProject({...newProject, website: e.target.value})} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="github" className="text-right text-gray-700">GitHub</Label>
                <Input id="github" className="col-span-3 bg-white text-gray-900" value={newProject.github || ''} onChange={(e) => setNewProject({...newProject, github: e.target.value})} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="media" className="text-right text-gray-700">Media</Label>
                <div className="col-span-3 flex items-center gap-2">
                  <Input id="media" type="file" accept="image/*,video/*" className="hidden" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setNewProject({...newProject, media: URL.createObjectURL(file)});
                    }
                  }} />
                  <Label htmlFor="media" className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                    <Upload className="h-4 w-4" />
                    Upload Photo/Video
                  </Label>
                  {newProject.media && <span className="text-sm text-gray-600">File selected</span>}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={addProject}>Add Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {project.media ? (
                project.media.includes('video') ? (
                  <video src={project.media} className="w-full h-48 object-cover rounded-md mb-4" controls />
                ) : (
                  <img src={project.media} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
                )
              ) : (
                <div className="mb-4 h-48 bg-gray-200 rounded-md"></div>
              )}
              <p className="text-sm text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800">
                    {tech.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                  <Globe className="mr-1 h-4 w-4" /> Website
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:underline">
                  <Github className="mr-1 h-4 w-4" /> GitHub
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}