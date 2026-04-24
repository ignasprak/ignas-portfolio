import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"

export function CardImage4() {
    return (
        <Card className="group relative mx-auto w-full max-w-sm overflow-hidden pt-0">

            {/* Image */}
            {/* <Link href="/projects/explore-eire" className="block overflow-hidden">
                <img
                    src="/images/alarm.jpg"
                    alt="Project Image"
                    className="aspect-video w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
            </Link> */}

            {/* Header */}
            <CardHeader className="space-y-4">
                {/* <div className="flex flex-wrap gap-2 font-mono tracking-tighter">
                    <Badge variant="secondary">Termux</Badge>
                    <Badge variant="secondary">Tasker</Badge>
                    <Badge variant="secondary">eWaste</Badge>
                    <Badge variant="destructive">In Development</Badge>
                </div> */}

                <div className="space-y-2">
                    <CardTitle className="text-6xl font-bold text-foreground font-mono p-8">
                        More Coming Soon...
                    </CardTitle>

                    {/* <CardDescription className="text-sm leading-relaxed font-mono">
                        A physical tool, composed of using my old phone, and software that will be used as a morning update alarm.
                    </CardDescription> */}
                </div>
            </CardHeader>

            {/* Footer */}
            {/* <CardFooter className="relative z-40">
                <Link href="/projects/ewaste-alarm" className="w-full">
                    <Button className="w-full font-mono cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5">
                        Explore more
                    </Button>
                </Link>
            </CardFooter> */}
        </Card>
    )
}
