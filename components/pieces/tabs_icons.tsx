import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsIcons() {
    return (
        <Tabs defaultValue="preview">
            <TabsList>
                <TabsTrigger value="code">
                    <AppWindowIcon />
                    Technolgy Stack
                </TabsTrigger>
                <TabsTrigger value="history">
                    <CodeIcon />
                    History
                </TabsTrigger>
                <TabsTrigger value="computer">
                    <CodeIcon />
                    GitHub Activity
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
