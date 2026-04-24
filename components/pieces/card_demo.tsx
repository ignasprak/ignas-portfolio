import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CardDemo() {
    return (
        <Card className="w-full max-w-sm font-mono">


            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>

                            <Textarea
                                id="message"
                                placeholder="Write your message here..."
                                className="min-h-[120px] resize-y"
                                required
                            />
                        </div>

                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Send Message
                </Button>
            </CardFooter>
        </Card>
    )
}