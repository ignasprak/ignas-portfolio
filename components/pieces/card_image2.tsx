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

export function CardImage2() {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">

            {/* Image */}
            <img
                src="https://x.com/DietNutritionOW"
                alt="Project Image"
                className="aspect-video w-full object-cover"
            />

            {/* Header */}
            <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Postgres</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                </div>

                <div className="space-y-2">
                    <CardTitle className="text-2xl font-semibold text-foreground">
                        Calorie Tracker
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
