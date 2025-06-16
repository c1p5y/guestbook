
import { GuestForm } from '@/components/ui/guestform'
import Link from 'next/link'
import React from 'react'

const guestbookPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <GuestForm></GuestForm>
        </div>
    )
}
export default guestbookPage
