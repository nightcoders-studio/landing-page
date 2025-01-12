import React from "react"
import { useForm } from "react-hook-form"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Spacer from "./ui/spacer"

const StartProject = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            help: "",
        },
    })

    const onSubmit = (data) => {
        console.log("Form Data:", data)
    }

    return (
        <div className="flex flex-col px-10 py-16 h-4/5 sm:items-stretch md:flex-row md:gap-10">
            {/* Header Section */}
            <div className="md:w-[364px] text-[#293239] text-3xl text-center font-semibold leading-[44px]">
                Start Your Project
            </div>

            <Spacer className='sm:h-12' />

            {/* Form Section */}
            <div className="flex flex-col flex-grow gap-10">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {/* Name Field */}
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#39434b] text-base">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Type your or company name here"
                                            className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* How Can I Help Field */}
                        <FormField
                            name="help"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#39434b] text-base">How Can I Help You?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type here"
                                            rows={4}
                                            className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <div className="flex items-center justify-center px-4 py-3 bg-[#293239] border border-[#e4882b] rounded-lg">
                            <Button
                                type="submit"
                                className="text-[#e8eaec] text-base bg-transparent border-none hover:shadow-none"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default StartProject
