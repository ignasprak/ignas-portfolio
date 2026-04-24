"use client";

import { useState } from "react";

export function CardDemo() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        });

        setLoading(false);

        if (res.ok) {
            setSent(true);
            e.currentTarget.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input name="name" placeholder="Name" required className="w-full border p-3 rounded-md" />
            <input name="email" type="email" placeholder="Email" required className="w-full border p-3 rounded-md" />
            <textarea name="message" placeholder="Message" required className="w-full border p-3 rounded-md" />

            <button className="w-full bg-black text-white p-3 rounded-md" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && <p className="text-sm text-muted-foreground">Message sent!</p>}
        </form>
    );
}