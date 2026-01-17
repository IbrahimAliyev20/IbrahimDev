"use client"

import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Trash2, X, Copy, Check } from "lucide-react"
import { projects as initialProjects } from "@/data/portfolio-page-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Project schema
const projectSchema = z.object({
  id: z.string().min(1, "ID is required"),
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  image: z.string().min(1, "Image URL is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  date: z.string().min(1, "Date is required"),
  status: z.string().min(1, "Status is required"),
  liveUrl: z.string().url("Must be a valid URL").or(z.literal("")),
  githubUrl: z.string().url("Must be a valid URL").or(z.literal("")),
  subtitle: z.string().min(1, "Subtitle is required"),
  longDescription: z.string().min(1, "Long description is required"),
  gallery: z.array(z.string()).min(1, "At least one gallery image is required"),
  client: z.string().min(1, "Client is required"),
  duration: z.string().min(1, "Duration is required"),
  team: z.string().min(1, "Team is required"),
  challenges: z.array(z.string()).min(1, "At least one challenge is required"),
  solutions: z.array(z.string()).min(1, "At least one solution is required"),
  technologies: z
    .array(
      z.object({
        name: z.string().min(1, "Technology name is required"),
        description: z.string().min(1, "Technology description is required"),
      })
    )
    .min(1, "At least one technology is required"),
  results: z.array(z.string()).min(1, "At least one result is required"),
})

type ProjectFormValues = z.infer<typeof projectSchema>

const defaultValues: ProjectFormValues = {
  id: "",
  title: "",
  shortDescription: "",
  image: "",
  category: "",
  tags: [""],
  date: "",
  status: "",
  liveUrl: "",
  githubUrl: "",
  subtitle: "",
  longDescription: "",
  gallery: [""],
  client: "",
  duration: "",
  team: "",
  challenges: [""],
  solutions: [""],
  technologies: [{ name: "", description: "" }],
  results: [""],
}

// Function to generate TypeScript code for a project
const generateProjectCode = (project: ProjectFormValues): string => {
  const indent = (level: number) => "  ".repeat(level)
  
  const escapeString = (str: string): string => {
    return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")
  }
  
  const formatString = (str: string): string => {
    return `"${escapeString(str)}"`
  }
  
  const formatArray = (arr: string[], level: number): string => {
    if (arr.length === 0) return "[]"
    return `[\n${arr.map(item => `${indent(level + 1)}${formatString(item)}`).join(",\n")},\n${indent(level)}]`
  }
  
  const formatTechnologies = (techs: { name: string; description: string }[], level: number): string => {
    if (techs.length === 0) return "[]"
    return `[\n${techs.map(tech => 
      `${indent(level + 1)}{\n${indent(level + 2)}name: ${formatString(tech.name)},\n${indent(level + 2)}description:\n${indent(level + 3)}${formatString(tech.description)},\n${indent(level + 1)}}`
    ).join(",\n")},\n${indent(level)}]`
  }
  
  return `  {
    id: ${formatString(project.id)},
    title: ${formatString(project.title)},
    shortDescription:
      ${formatString(project.shortDescription)},
    image: ${formatString(project.image)},
    category: ${formatString(project.category)},
    tags: ${formatArray(project.tags, 4)},
    date: ${formatString(project.date)},
    status: ${formatString(project.status)},
    liveUrl: ${formatString(project.liveUrl)},
    githubUrl: ${formatString(project.githubUrl)},

    subtitle: ${formatString(project.subtitle)},
    longDescription:
      ${formatString(project.longDescription)},
    gallery: ${formatArray(project.gallery, 4)},
    client: ${formatString(project.client)},
    duration: ${formatString(project.duration)},
    team: ${formatString(project.team)},

    challenges: ${formatArray(project.challenges, 4)},

    solutions: ${formatArray(project.solutions, 4)},

    technologies: ${formatTechnologies(project.technologies, 4)},

    results: ${formatArray(project.results, 4)},
  },`
}

export default function Admin() {
  const [editingProject, setEditingProject] = useState<string | null>(null)
  const [projects, setProjects] = useState<ProjectFormValues[]>(initialProjects)
  const [showCodeDialog, setShowCodeDialog] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [copied, setCopied] = useState(false)

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  })

  const {
    fields: tagFields,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control: form.control,
    // @ts-ignore - TypeScript inference issue with useFieldArray
    name: "tags",
  })

  const {
    fields: galleryFields,
    append: appendGallery,
    remove: removeGallery,
  } = useFieldArray({
    control: form.control,
    // @ts-ignore - TypeScript inference issue with useFieldArray
    name: "gallery",
  })

  const {
    fields: challengeFields,
    append: appendChallenge,
    remove: removeChallenge,
  } = useFieldArray({
    control: form.control,
    // @ts-ignore - TypeScript inference issue with useFieldArray
    name: "challenges",
  })

  const {
    fields: solutionFields,
    append: appendSolution,
    remove: removeSolution,
  } = useFieldArray({
    control: form.control,
    // @ts-ignore - TypeScript inference issue with useFieldArray
    name: "solutions",
  })

  const {
    fields: technologyFields,
    append: appendTechnology,
    remove: removeTechnology,
  } = useFieldArray({
    control: form.control,
    name: "technologies",
  })

  const {
    fields: resultFields,
    append: appendResult,
    remove: removeResult,
  } = useFieldArray({
    control: form.control,
    // @ts-ignore - TypeScript inference issue with useFieldArray
    name: "results",
  })

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const onSubmit = (data: ProjectFormValues) => {
    // Clean up empty strings from arrays
    const cleanedData: ProjectFormValues = {
      ...data,
      tags: data.tags.filter((tag) => tag.trim() !== ""),
      gallery: data.gallery.filter((img) => img.trim() !== ""),
      challenges: data.challenges.filter((challenge) => challenge.trim() !== ""),
      solutions: data.solutions.filter((solution) => solution.trim() !== ""),
      results: data.results.filter((result) => result.trim() !== ""),
    }

    // Generate code
    const code = generateProjectCode(cleanedData)
    setGeneratedCode(code)
    setShowCodeDialog(true)

    if (editingProject) {
      // Update existing project
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === editingProject ? cleanedData : project
        )
      )
    } else {
      // Create new project
      setProjects((prevProjects) => [...prevProjects, cleanedData])
    }
    form.reset(defaultValues)
    setEditingProject(null)
  }

  const handleEdit = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      form.reset({
        ...project,
        tags: project.tags.length > 0 ? project.tags : [""],
        gallery: project.gallery.length > 0 ? project.gallery : [""],
        challenges:
          project.challenges.length > 0 ? project.challenges : [""],
        solutions: project.solutions.length > 0 ? project.solutions : [""],
        technologies:
          project.technologies.length > 0
            ? project.technologies
            : [{ name: "", description: "" }],
        results: project.results.length > 0 ? project.results : [""],
      })
      setEditingProject(projectId)
    }
  }

  const handleDelete = (projectId: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      )
      if (editingProject === projectId) {
        form.reset(defaultValues)
        setEditingProject(null)
      }
      alert("Project deleted!")
    }
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Portfolio CRUD</h1>
          <p className="text-muted-foreground">
            Create and manage your portfolio projects
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            const allProjectsCode = projects.map((p) => generateProjectCode(p)).join("\n")
            setGeneratedCode(allProjectsCode)
            setShowCodeDialog(true)
          }}
        >
          <Copy className="h-4 w-4 mr-2" />
          Export All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-1">
          <div className="bg-card border rounded-lg p-4 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-3 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => handleEdit(project.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive"
                        onClick={() => handleDelete(project.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {editingProject ? "Edit Project" : "Create New Project"}
                </h2>

                {/* Basic Information */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-medium">Basic Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ID</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., platinium-17"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Platinium-17 E-catalog"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subtitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subtitle</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., A Modern B2B E-catalog Platform"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shortDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Brief description of the project"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="longDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Long Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Detailed description of the project"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-medium">Project Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Web App">Web App</SelectItem>
                              <SelectItem value="Dashboard">Dashboard</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Completed">Completed</SelectItem>
                              <SelectItem value="In Progress">
                                In Progress
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="client"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Client</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Platinium-17" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 1 month" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="team"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., 1 frontend developer, 1 backend developer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* URLs */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-medium">URLs</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Main Image URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="/images/platinium.png"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="liveUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Live URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="githubUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GitHub URL</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="https://github.com/..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Tags</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => (appendTag as unknown as (value: string) => void)("")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Tag
                    </Button>
                  </div>

                  {tagFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`tags.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex gap-2">
                              <Input
                                placeholder="e.g., Next.js"
                                {...field}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeTag(index)}
                                disabled={tagFields.length === 1}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Gallery */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Gallery Images</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => (appendGallery as unknown as (value: string) => void)("")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Image
                    </Button>
                  </div>

                  {galleryFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`gallery.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex gap-2">
                              <Input
                                placeholder="/images/image.png"
                                {...field}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeGallery(index)}
                                disabled={galleryFields.length === 1}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Challenges */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Challenges</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => (appendChallenge as unknown as (value: string) => void)("")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Challenge
                    </Button>
                  </div>

                  {challengeFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`challenges.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex gap-2">
                              <Textarea
                                placeholder="Describe a challenge..."
                                rows={2}
                                {...field}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeChallenge(index)}
                                disabled={challengeFields.length === 1}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Solutions */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Solutions</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => (appendSolution as unknown as (value: string) => void)("")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Solution
                    </Button>
                  </div>

                  {solutionFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`solutions.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex gap-2">
                              <Textarea
                                placeholder="Describe a solution..."
                                rows={2}
                                {...field}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeSolution(index)}
                                disabled={solutionFields.length === 1}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Technologies</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        appendTechnology({ name: "", description: "" })
                      }
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Technology
                    </Button>
                  </div>

                  {technologyFields.map((field, index) => (
                    <div key={field.id} className="space-y-2 p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">
                          Technology {index + 1}
                        </span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeTechnology(index)}
                          disabled={technologyFields.length === 1}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <FormField
                        control={form.control}
                        name={`technologies.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Next.js" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`technologies.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the technology..."
                                rows={2}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Results</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => (appendResult as unknown as (value: string) => void)("")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Result
                    </Button>
                  </div>

                  {resultFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`results.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex gap-2">
                              <Textarea
                                placeholder="Describe a result..."
                                rows={2}
                                {...field}
                                className="flex-1"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeResult(index)}
                                disabled={resultFields.length === 1}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingProject ? "Update Project" : "Create Project"}
                  </Button>
                  {editingProject && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        form.reset(defaultValues)
                        setEditingProject(null)
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Code Dialog */}
      <Dialog open={showCodeDialog} onOpenChange={setShowCodeDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProject ? "Updated Project Code" : "New Project Code"}
            </DialogTitle>
            <DialogDescription>
              Copy this code and paste it into your{" "}
              <code className="text-sm bg-muted px-1 rounded">
                portfolio-page-data.ts
              </code>{" "}
              file
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 z-10"
              onClick={handleCopyCode}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Code
                </>
              )}
            </Button>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{generatedCode}</code>
            </pre>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowCodeDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
