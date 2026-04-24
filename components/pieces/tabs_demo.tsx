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

import Image from 'next/image'

export function TabsDemo() {
    return (
        <Tabs
            defaultValue="tech-stack"
            className="mx-auto flex w-full max-w-4xl flex-col items-center"
        >
            {/* Tabs row */}
            {/* Tabs row */}
            <TabsList className="grid h-14 !h-14 w-full max-w-xs grid-cols-3 rounded-xl bg-muted p-1 sm:max-w-2xl">
                <TabsTrigger
                    value="tech-stack"
                    aria-label="Tech Stack"
                    className="flex items-center justify-center rounded-lg px-3 py-2 font-mono transition-all sm:gap-2 sm:text-lg
    data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                    <Code2 className="h-6 w-6 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Tech Stack</span>
                </TabsTrigger>

                <TabsTrigger
                    value="experience"
                    aria-label="Experience"
                    className="flex items-center justify-center rounded-lg px-3 py-2 font-mono transition-all sm:gap-2 sm:text-lg
    data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                    <Briefcase className="h-6 w-6 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>

                <TabsTrigger
                    value="education"
                    aria-label="Education"
                    className="flex items-center justify-center rounded-lg px-3 py-2 font-mono transition-all sm:gap-2 sm:text-lg
    data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                    <GraduationCap className="h-6 w-6 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
            </TabsList>

            {/* Tech Stack */}
            <TabsContent value="tech-stack" className="mt-8 w-full max-w-3xl">
                <Card className="mx-auto w-full p-4 sm:p-6 md:p-8">
                    <CardContent className="font-mono">
                        <div className="grid gap-8 md:grid-cols-3 font-mono">
                            {[
                                {
                                    title: "Frontend",
                                    sections: [
                                        {
                                            label: "Core Frameworks",
                                            tech: ["React", "Next.js", "TypeScript"],
                                        },
                                        {
                                            label: "UI & Styling",
                                            tech: ["Tailwind CSS", "shadcn/ui"],
                                        },
                                    ],
                                },
                                {
                                    title: "Backend",
                                    sections: [
                                        {
                                            label: "Server Side",
                                            tech: ["Python", "FastAPI"],
                                        },
                                        {
                                            label: "Data",
                                            tech: ["PostgreSQL", "Snowflake"],
                                        },
                                    ],
                                },
                                {
                                    title: "Others",
                                    sections: [
                                        {
                                            label: "DevOps & Tools",
                                            tech: ["Docker", "Git"],
                                        },
                                        {
                                            label: "Platforms",
                                            tech: ["Vercel", "GitHub"],
                                        },
                                    ],
                                },
                            ].map((group) => (
                                <div key={group.title} className="space-y-5">
                                    <h3 className="flex items-center gap-2 text-2xl font-semibold text-foreground font-mono">

                                        {group.title}
                                    </h3>

                                    <div className="space-y-5">
                                        {group.sections.map((section) => (
                                            <div
                                                key={section.label}
                                                className="rounded-xl border bg-background p-5 shadow-sm"
                                            >
                                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                    {section.label}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {section.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="mt-8 w-full max-w-3xl">
                <Card className="mx-auto w-full p-8">
                    {/* <CardHeader>
                        <CardTitle className="mb-4 font-mono text-4xl md:text-5xl lg:text-6xl">Experience</CardTitle>

                    </CardHeader> */}
                    <CardContent className="relative pl-0 md:pl-8 font-mono">
                        {/* Vertical line */}
                        <div className="absolute left-3 top-0 h-full w-px bg-border hidden md:block" />

                        <div className="space-y-12">
                            {/* Item */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2025 - 2026</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        Customer Assistant @ Tesco
                                    </span>
                                </div>
                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    Worked as a Customer Assistant, supporting daily store operations,
                                    assisting customers, and helping maintain a smooth and organised retail
                                    environment.
                                </p>
                            </div>

                            {/* Item */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2024</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        Centre of Expertise Intern @ SAP
                                    </span>
                                </div>

                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    Supported the Hybrid Operations team through premium engagements, using
                                    SAC, Solution Manager, and Cloud ALM for analytics, system management,
                                    and process optimisation.

                                    <br></br><br></br>

                                    Led database development for the six-month Day Planner Application
                                    intern project, gained experience with HANA DB, and contributed to SAP
                                    Clean Core research and internal root cause analysis work.
                                </p>

                                <p className="mt-3 ml-6 text-sm leading-relaxed">

                                </p>
                            </div>

                            {/* Item */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2020 - 2024</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        Bar Supervisor @ HAP Solutions
                                    </span>
                                </div>

                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    Supervised service staff and supported smooth bar operations across busy
                                    events, helping maintain high standards of service, organisation, and
                                    team performance.

                                    <br></br><br></br>

                                    Managed responsibilities including staff coordination, attendance,
                                    break scheduling, ID validation, and health and safety compliance in
                                    fast-paced environments.
                                </p>

                                <p className="mt-3 ml-6 text-sm leading-relaxed">

                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="mt-8 w-full max-w-3xl">
                <Card className="mx-auto w-full p-8">
                    {/* <CardHeader> */}
                    {/* <CardTitle className="mb-4 font-mono text-4xl md:text-5xl lg:text-6xl">
                            Education
                        </CardTitle> */}
                    {/* <CardDescription>
                            My academic background and the foundation behind my technical
                            skills.
                        </CardDescription> */}
                    {/* </CardHeader> */}
                    <CardContent className="relative pl-0 md:pl-8 font-mono">
                        {/* Vertical line */}
                        <div className="absolute left-3 top-0 h-full w-px bg-border hidden md:block" />

                        <div className="space-y-12">

                            {/* DataCamp */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2026 - PRESENT</span>
                                    <span className="text-xl">@</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        DataCamp
                                    </span>
                                </div>

                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    In progress of building more refined skills, further learning into the areas I am most
                                    interested in which is data-engineering, as well as back-end programming. I primarily learn through Python
                                    and SQL.
                                    <br></br><br></br>
                                    <Image

                                        className="mx-auto object-cover object-center w-full rounded-lg shadow-xl h-80 shadow-blue-gray-900/50"
                                        src="/images/deasocip.png"
                                        width={500}
                                        height={500}
                                        alt="Picture of Certificate"
                                    />

                                </p>
                            </div>

                            {/* TU Dublin */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2020 – 2025</span>
                                    <span className="text-xl">@</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        Technological University Dublin
                                    </span>
                                </div>

                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    Computer Science major, built a strong foundation in software
                                    engineering, web development, databases, and problem solving through
                                    both practical and academic projects. Achieved a 2:1 classification.
                                    <br></br><br></br>Key modules included Object-Oriented Programming, Databases, Cloud
                                    Infrastructure, and Rich Web Applications. Final year project:
                                    <span className="font-medium text-foreground"> Explore Eire</span>.
                                </p>
                            </div>

                            {/* Gormanston College */}
                            <div className="relative">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-2xl text-muted-foreground">2014 – 2020</span>
                                    <span className="text-xl">@</span>
                                    <span className="text-2xl font-medium text-foreground">
                                        Gormanston College
                                    </span>
                                </div>

                                <p className="mt-3 ml-6 text-xl leading-relaxed text-muted-background">
                                    Completed secondary education, became head boy in my final year, involved with the student council, achieved a leaving certificate score of 421 points. <br></br><br></br> Key modules included Maths, Geography, and German.
                                </p>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}