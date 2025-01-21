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
import vector4 from "../assets/images/vector4.svg"

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
        <div className="relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-8">
            {/* Header Section */}
            <div className="relative flex flex-col md:w-[364px] lg:w-full text-4xl font-semibold leading-[44px] md:text-left lg:items-start">
                <span className="relative z-10 align-text-top text-text-default sm:text-3xl lg:text-5xl lg:mb-6 sm:pl-7 lg:self-start sm:pb-5 lg:leading-normal">
                    Start Your Project
                </span>
            </div>

            {/* Form Section */}
            <div className="z-10 flex flex-col flex-grow gap-10 sm:w-full sm:px-8 sm:align-text-left">
                <Form {...form} className="md:w-full">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="sm:flex sm:flex-col sm:items-start">
                                    <FormLabel className="text-base text-text-default sm:mb-2">Name</FormLabel>
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
                                <FormItem className="w-full sm:flex sm:flex-col sm:items-start">
                                    <FormLabel className="text-base text-text-default sm:mb-2">How Can I Help You?</FormLabel>
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
                        <Button
                            type="submit"
                            className="transition ease-in-out w-full text-text-default-quaternary px-4 lg:py-6 flex items-center justify-center text-base bg-transparent hover:shadow-none bg-[#293239] border-solid border-2 border-[#e4882b] rounded-lg lg:text-xl hover:translate-y-1 sm:text-lg md:text-2xl md:py-6">
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>

            {/* Vector Background */}
            <img
                src={vector4}
                alt="Vector Background"
                className="absolute lg:left-20 w-[150px] sm:w-[220px] sm:bottom-0 lg:bottom-0 sm:left-14 lg:w-[380px] opacity-80 z-0"
                style={{
                    transform: 'translateX(-50%)',
                }}
            />
            <Spacer className="sm:h-1 lg:h-12" />
        </div>
    )
}

export default StartProject
