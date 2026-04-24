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
                    className="text-4xl font-mono text-muted-foreground underline-offset-4 hover:underline"
                >
                    ← Back to Homepage
                </Link>
            </div>
            <p className="text-4xl text-mono">More content coming soon</p>
        </main>

    )
}