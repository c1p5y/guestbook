"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { saveMessageFromGuest } from "@/app/services/guest-message-service"
import { toast, Toaster } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string().min(2, { message: "Message must be at least 5 characters." }),
  hide: z.boolean()
})

export function GuestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      hide: false
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await saveMessageFromGuest(values.name, values.message, values.hide)
    if (response.error === null) {
      toast.success("Message succesfully saved!")
      form.reset();
    } else {
      toast.error("Message not saved! Error:" + response.error.message)
    }

  }

  return (
    <Form {...form}>
      <Toaster position="top-center" />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 min-w-3/10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>
                This will be your displayed name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormDescription>
                This will be your displayed message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hide"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Private message</FormLabel>
              <FormControl>
                <Checkbox />
              </FormControl>
              <FormDescription>
                Hide the message from being publicly visible.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
