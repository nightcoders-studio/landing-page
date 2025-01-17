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
        <div className="relative flex flex-col w-screen px-0 lg:w-screen lg:px-16 md:px-16 sm:items-center sm:mx-0 sm:text-center md:flex md:flex-row md:items-start md:gap-8 md:text-left md:pb-36 lg:pt-16">
            {/* Header Section */}
            <div className="relative flex flex-col md:w-[364px] text-4xl font-semibold leading-[44px] md:text-left lg:items-start">
                <span className="relative z-10 text-text-default lg:mb-6 lg:self-start">Start Your Project</span>
                <img
                    src={vector4}
                    alt="Vector Background"
                    className="absolute lg:top-24 lg:left-20 w-[150px] sm:w-[200px] lg:w-[400px] opacity-80 z-0"
                    style={{
                        transform: 'translateX(-50%)',
                    }}
                />
            </div>

            <Spacer className="sm:h-12" />

            {/* Form Section */}
            <div className="flex flex-col flex-grow gap-10">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base text-text-default">Name</FormLabel>
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
                                    <FormLabel className="text-base text-text-default">How Can I Help You?</FormLabel>
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
                            className="w-full text-text-default-quaternary px-4 lg:py-6 flex items-center justify-center text-base bg-transparent hover:shadow-none bg-[#293239] border-solid border-2 border-[#e4882b] rounded-lg lg:text-xl"
                        >
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>
            <Spacer className="sm:h-12 lg:h-24" />
        </div>
    )
}

export default StartProject
