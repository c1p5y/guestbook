
import { GuestForm } from '@/components/ui/guest-form'
import LastEntries from '@/components/ui/last-entries'
import { ScrollArea } from '@/components/ui/scroll-area'
import React, { Suspense } from 'react'

const guestbookPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <GuestForm></GuestForm>
            <p className='font-bold mt-15'>Last 20 entries</p>
            <ScrollArea className="h-[250px] rounded-md border p-4 space-x-6 min-w-3/10 items-center mt-10">
                <Suspense>
                    <LastEntries lastNEntries={20} />
                </Suspense>
            </ScrollArea>
        </div>)
}
export default guestbookPage
