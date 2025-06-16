import { getLastNEntries } from '@/app/services/guest-message-service'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const LastEntries = async ({ lastNEntries }: { lastNEntries: number }) => {
    const response = await getLastNEntries(lastNEntries)
    const entries = response.data || [];
    return (
        entries.map((entry) => (
            <Accordion type="single" collapsible key={"item-" + entry.id} >
                <AccordionItem value={"item-" + entry.id}>
                    <AccordionTrigger>{entry.id}  -  {entry.name}</AccordionTrigger>
                    <AccordionContent> 

                       Message: {entry.message}
                       <br/>
                       Timestamp: {entry.timestamp.toLocaleString()}
                       <br/>
                       Hide: {entry.hide ? 'true' : 'false'} 
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        )))
}

export default LastEntries
