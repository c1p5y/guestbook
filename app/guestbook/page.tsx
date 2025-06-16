
import { GuestForm } from '@/components/ui/guestform'
import Link from 'next/link'
import React from 'react'

const guestbookPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            {/* TODO create component to display last 20 entries from DB (newest first)   */}
            <GuestForm></GuestForm>
        </div>
    )
}
export default guestbookPage
