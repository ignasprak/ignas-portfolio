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

export function CardImage() {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">

            {/* Image */}
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.vJecGV5ZD6WdChGPAGltqgHaFj%3Fpid%3DApi"
                alt="Project Image"
                className="aspect-video w-full object-cover"
            />

            {/* Header */}
            <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                </div>

                <div className="space-y-2">
                    <CardTitle className="text-2xl font-semibold text-foreground">
                        Explore Eire
                    </CardTitle>

                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        A web application designed to help tourists discover events,
                        attractions, and experiences across Ireland.
                    </CardDescription>
                </div>
            </CardHeader>

            {/* Footer */}
            <CardFooter className="relative z-40">
                <Button className="w-full">Explore more</Button>
            </CardFooter>
        </Card>
    )
}
