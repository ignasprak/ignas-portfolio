import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ExploreEirePage() {
    return (
        <main className="mx-auto w-full max-w-5xl px-6 py-12 md:px-8">
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
                        Case Study
                    </p>

                    <h1 className="font-mono text-4xl font-bold tracking-tight md:text-6xl">
                        [Project Title]
                    </h1>

                    <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                        [One or two sentence summary of the project. Explain what it is,
                        what it does, and why it matters.]
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">[Tech 1]</Badge>
                    <Badge variant="secondary">[Tech 2]</Badge>
                    <Badge variant="secondary">[Tech 3]</Badge>
                    <Badge variant="secondary">[Tech 4]</Badge>
                </div>

                <div className="flex flex-wrap gap-3">
                    <Button>[Live Demo]</Button>
                    <Button variant="outline">[GitHub]</Button>
                </div>
            </section>

            {/* Hero image */}
            <section className="mt-10">
                <div className="overflow-hidden rounded-2xl border">
                    <Image
                        src="/images/[your-image].jpg"
                        alt="[Project screenshot]"
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
                        <p className="text-sm">[e.g. Full-stack Developer]</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Timeline
                        </p>
                        <p className="text-sm">[e.g. 3 months]</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Stack
                        </p>
                        <p className="text-sm">[e.g. Next.js, Tailwind, FastAPI]</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="space-y-2 p-5">
                        <p className="font-mono text-xs uppercase text-muted-foreground">
                            Context
                        </p>
                        <p className="text-sm">[e.g. Final Year Project]</p>
                    </CardContent>
                </Card>
            </section>

            {/* Main content */}
            <section className="mt-16 space-y-14">
                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Overview</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        [Brief overview of the project. Explain the purpose, audience,
                        and what the application was designed to do.]
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">The Problem</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        [What problem were you trying to solve? What need or gap did
                        this project address?]
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">The Solution</h2>
                    <p className="max-w-3xl leading-relaxed text-muted-foreground">
                        [Explain what you built, your approach, and how the app solved
                        the problem.]
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="font-mono text-2xl font-semibold">Key Features</h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">[Feature One]</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    [Short description of the feature.]
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">[Feature Two]</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    [Short description of the feature.]
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">[Feature Three]</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    [Short description of the feature.]
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-5">
                                <p className="font-medium">[Feature Four]</p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    [Short description of the feature.]
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

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

            {/* Screenshot gallery */}
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
            </section>

        </main>
    )
}