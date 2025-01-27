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
        <div className="relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-8 lg:items-start lg:align-top">
            {/* Header Section */}
            <div className="relative flex flex-col md:w-56 lg:w-full text-4xl font-semibold leading-[44px] md:text-left ">
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
                                    <FormLabel className="text-base text-text-default sm:mb-2 md:text-lg">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Type your or company name here"
                                            className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400 xl:text-xl  xl:py-6"
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
                                    <FormLabel className="text-base text-text-default sm:mb-2 md:text-lg">How Can I Help You?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Type here"
                                            rows={4}
                                            className="px-4 py-3 bg-[#e8eaec] rounded-lg focus:ring-2 focus:ring-blue-400 xl:text-xl"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="sm:w-full md:w-auto">
                            Send Message
                        </Button>
                    </form>
                </Form>
            </div>

            {/* Vector Background */}
            <img
                src={vector4}
                alt="Vector Background"
                className="absolute lg:left-56  w-[150px] sm:w-[220px] sm:bottom-0 lg:bottom-0 sm:left-14 lg:w-[500px] opacity-80 z-0"
                style={{
                    transform: 'translateX(-50%)',
                }}
            />
            <Spacer className="sm:h-10 lg:h-12" />
        </div>
    )
}

export default StartProject
