"use client"

import {
    Code2,
    Briefcase,
    GraduationCap,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
    return (
        <Tabs
            defaultValue="tech-stack"
            className="mx-auto flex w-full max-w-4xl flex-col items-center"
        >
            {/* Tabs row */}
            <TabsList className="grid w-full max-w-xl grid-cols-3 rounded-xl">
                <TabsTrigger value="tech-stack" className="flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    Tech Stack
                </TabsTrigger>

                <TabsTrigger value="experience" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Experience
                </TabsTrigger>

                <TabsTrigger value="education" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Education
                </TabsTrigger>
            </TabsList>

            {/* Tech Stack */}
            <TabsContent value="tech-stack" className="mt-6 w-full max-w-3xl">
                <Card className="mx-auto w-full">
                    <CardHeader>
                        <CardTitle>Tech Stack</CardTitle>
                        <CardDescription>
                            The main tools and technologies I enjoy using when building web
                            and software projects.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>
                            I mainly work with{" "}
                            <span className="font-medium text-foreground">JavaScript</span>,{" "}
                            <span className="font-medium text-foreground">TypeScript</span>,{" "}
                            <span className="font-medium text-foreground">React</span>, and{" "}
                            <span className="font-medium text-foreground">Next.js</span>.
                        </p>
                        <p>
                            I also have experience with{" "}
                            <span className="font-medium text-foreground">Tailwind CSS</span>,
                            backend development, API integration, and building projects with a
                            strong focus on usability and maintainable structure.
                        </p>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="mt-6 w-full max-w-3xl">
                <Card className="mx-auto w-full">
                    <CardHeader>
                        <CardTitle>Experience</CardTitle>
                        <CardDescription>
                            A snapshot of the work and projects that have helped me grow as a
                            developer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>
                            My experience comes mainly from building personal and academic
                            projects, where I have worked on both frontend and full-stack
                            applications.
                        </p>
                        <p>
                            These projects have involved UI design, responsive layouts, API
                            integration, state management, and structuring applications in a
                            clean and scalable way.
                        </p>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="mt-6 w-full max-w-3xl">
                <Card className="mx-auto w-full">
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                        <CardDescription>
                            My academic background and the foundation behind my technical
                            skills.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <p>
                            I am a{" "}
                            <span className="font-medium text-foreground">
                                Computer Science student
                            </span>{" "}
                            with a strong interest in software development, modern web
                            technologies, and building practical digital products.
                        </p>
                        <p>
                            Through my studies, I have developed experience in programming,
                            software engineering principles, databases, web development, and
                            project-based problem solving.
                        </p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}