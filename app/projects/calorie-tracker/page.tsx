import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function CalorieTrackerPage() {
    return (
        <main className="mx-auto w-full max-w-5xl px-6 py-12 md:px-8 font-mono">
            {/* Back link */}
            <div className="mb-8">
                <Link
                    href="/"
                    className="text-sm font-mono text-muted-foreground underline-offset-4 hover:underline"
                >
                    ← Back to Homepage
                </Link>
            </div>

            {/* Hero header */}
            <section className="space-y-6">
                <div className="space-y-4">
                    <p className="font-mono text-sm text-muted-foreground">
                        Project Report
                    </p>

                    <h1 className="font-mono text-4xl font-bold tracking-tight md:text-6xl">
                        Calorie Tracker
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        {/* <Link href='#'>
                        <Button>[Live Demo]</Button>
                    </Link> */}
                        <Link href='https://github.com/ignasprak/CalorieTrack'>
                            <Button variant="outline">[GitHub]</Button>
                        </Link>
                    </div>

                    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        This project helps users keep track of their nutritional intake, and also allows them to gather insights on their historical intake. This project allows for the logging of meals, and it is designed to help users achieve their nutritional goals. The website is designed with simplicity in mind.
                    </p>
                </div>

                <div className="mt-4 grid gap-8 md:grid-cols-3 font-mono">
                    {[
                        {
                            title: "Frontend",
                            sections: [
                                {
                                    label: "Core Frameworks",
                                    tech: ["Next.js", "React", "TypeScript", "JavaScript"],
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
                                    label: "API & Server",
                                    tech: ["Python", "FastAPI"],
                                },
                                {
                                    label: "Validation & ORM",
                                    tech: ["Pydantic", "SQLAlchemy"],
                                },
                            ],
                        },
                        {
                            title: "Data & Infrastructure",
                            sections: [
                                {
                                    label: "Database",
                                    tech: ["PostgreSQL"],
                                },
                                {
                                    label: "DevOps",
                                    tech: ["Docker"],
                                },
                            ],
                        },
                    ].map((group) => (
                        <div key={group.title} className="space-y-5">
                            <h3 className="text-2xl font-semibold text-foreground font-mono">
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


            </section>

            {/* Hero image */}
            <section className="mt-10">
                <div className="overflow-hidden rounded-2xl border">
                    <Image
                        src="/images/[your-image].jpg"
                        alt="No Preview Available"
                        width={1600}
                        height={900}
                        className="h-auto w-full object-cover"
                    />
                </div>
            </section>

            {/* Project facts */}
            <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Role
                        </p>
                        <p className="text-sm">Full-stack Developer</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Timeline
                        </p>
                        <p className="text-sm">Since 10/04/26</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Main Stack
                        </p>
                        <p className="text-sm">Next.js, Tailwind, FastAPI</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Context
                        </p>
                        <p className="text-sm">Maintaing Health</p>
                    </CardContent>
                </Card>
            </section>

            {/* Main content */}
            <section className="mt-16 space-y-14">
                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Overview</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        This project is a full-stack calorie tracking web application designed to help users monitor their daily food intake and manage nutritional goals.

                        The application allows users to log meals, track calories, and view their progress over time through a clean and responsive interface. It was built as a modern web application using a FastAPI backend and a React-based frontend, with a focus on scalability, performance, and real-world development practices.

                        The primary audience includes individuals interested in health tracking, as well as developers looking to understand how to structure a full-stack application using industry-standard tools.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">The Problem</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        Many calorie tracking applications are:
                        <br></br>
                        - Overly complex
                        <br></br>
                        - Feature bloated
                        <br></br>
                        - Locked behind paywalls
                        <br></br><br></br>

                        Making them less accessible for users who want a simple and efficient way to track their nutrition.

                        Additionally, existing solutions often lack transparency in how data is handled and can be difficult to customize or extend. From a development perspective, there is also a gap in practical examples of how to build a full-stack health tracking application using modern tools like FastAPI, PostgreSQL, and React.

                        This project was created to address both of these issues by providing a streamlined, user-friendly experience while also serving as a learning-focused implementation of a scalable backend architecture.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">The Solution</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        To address these challenges, I am building a lightweight, modular web-based calorie tracking application with a clear separation between frontend and backend systems.

                        The backend is implemented using FastAPI, providing a high-performance API for handling user data, meal logging, and calorie calculations. PostgreSQL is used for persistent data storage, with SQLAlchemy managing database interactions. The application is containerised using Docker to ensure a consistent development environment.

                        On the frontend, a React/Next.js interface provides a responsive and intuitive user experience for logging meals and viewing nutritional data.

                        The system is designed with scalability in mind, using a layered architecture that separates routing, business logic, and data access. This approach tries to mirror real development practices and allows the application to be extended with additional features such as authentication, goal tracking, and analytics.</p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Key Features</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">ADD A MEAL</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users can quickly log meals by entering basic nutritional information or selecting from recent entries.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">ADD A CUSTOM MEAL</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users can create fully custom meals by manually entering nutritional values such as calories and macronutrients.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">GET DAILY TOTALS</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    The application dynamically calculates total calories and macronutrients for the current day by aggregating
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">HISTORICAL DASHBOARD</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users can view past meal data and nutritional trends over selected date ranges. This feature enables
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Future Features (DISCLAIMER: some are very far in the future)</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">FOOD API INTEGRATION</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users will be able to upload images of their meals, with the system estimating nutritional values using
                                    image recognition techniques. This aims to make meal logging faster and more intuitive.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">IMAGE-BASED MEAL LOGGING</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users will be able to upload images of their meals, with the system estimating nutritional values using
                                    image recognition techniques. This aims to make meal logging faster and more intuitive.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">PERSONALISED GOAL TRACKING</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Users will be able to set and adjust personalised calorie and macronutrient goals, with the system
                                    providing real-time feedback on progress and remaining intake.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">ADVANCED INSIGHTS & VISUALISATION</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Future updates will include charts and analytics for visualising trends in calorie intake, macronutrient
                                    balance, and long-term progress, helping users better understand their dietary habits.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* 
                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Challenges</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        [Talk about the most interesting technical or design challenges
                        you faced, and how you worked through them.]
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">What I Learned</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        [Reflect on what this project taught you technically and
                        professionally.]
                    </p>
                </div>
            </section>

            <section className="mt-16 space-y-6">
                <h2 className="font-mono text-2xl font-semibold">Gallery</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                        <div className="overflow-hidden rounded-xl border">
                            <Image
                                src="/images/[screenshot-1].jpg"
                                alt="[Screenshot one]"
                                width={1200}
                                height={800}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            [Short caption for screenshot one.]
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="overflow-hidden rounded-xl border">
                            <Image
                                src="/images/[screenshot-2].jpg"
                                alt="[Screenshot two]"
                                width={1200}
                                height={800}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            [Short caption for screenshot two.]
                        </p>
                    </div>
                </div>
                */}
            </section>



        </main >
    )
}