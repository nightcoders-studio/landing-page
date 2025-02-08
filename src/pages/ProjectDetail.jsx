import Spacer from "../components/ui/spacer";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import vector4 from "@/assets/images/vector4.svg";
import PropTypes from "prop-types";

const HeroSection = () => (
  <div
    id="heroWrapper"
    className="items-center sm:gap-2 sm:px-4 sm:pb-8 sm:pt-8 md:m-0"
  >
    <div
      id="heroContainer"
      className="grid items-center p-6 py-6 m-6 border-2 shadow-sm lg:m-4 lg:gap-7 xl:gap-4 sm:m-2 rounded-xl border-text-brand-tertiary bg-bg-default-secondary lg:grid-cols-[45%_55%] sm:gap-10 md:gap-20 md:m-2 md:py-10 md:px-10"
    >
      {/* Text Section */}
      <div
        id="textHeroWrapper"
        className="flex flex-col items-stretch order-2 gap-4 md:gap-5 lg:order-1"
      >
        <div
          id="textHeroContainer"
          className="flex flex-col items-stretch gap-4"
        >
          <h1 className="text-4xl font-semibold text-text-default md:text-4xl sm:leading-snug md:leading-normal lg:leading-normal lg:text-4xl xl:text-5xl xl:leading-normal sm:w-3/4">
            Aplikasi Jual Beli Sayur dan Daging
          </h1>
          <h3 className="text-xl text-text-default xl:pr-24 xl:leading-normal md:text-xl">
            Mugee
          </h3>
        </div>
      </div>

      {/* Image Section */}
      <img
        className="order-1 w-full h-auto justify-self-end lg:w-3/4 gambarHero lg:order-2 lg:pr-3"
        src="@/assets/images/mockup_website.svg"
        alt="Illustration"
      />
    </div>
  </div>
);

const AboutProjectSection = () => (
  <div className="flex flex-col w-full gap-8 aboutContainer px-7 sm:flex sm:flex-col md:px-16">
    <h1 className="font-semibold sm:text-3xl lg:text-5xl text-text-default lg:pl-1">
      About This Project
    </h1>
    <h4 className="text-text-default md:w-3/4 lg:pl-1 lg:text-2xl md:text-xl">
      Aplikasi E-commerce berbasis web dan mobile untuk [Nama Klien], dirancang
      untuk memberikan pengalaman belanja online yang mulus bagi pengguna dengan
      fokus pada kecepatan, kemudahan navigasi, dan personalisasi.
    </h4>
    <Spacer />
  </div>
);

const StartProjectSection = ({ form, onSubmit }) => (
  <div className="relative grid grid-cols-1 lg:grid-cols-[35%,65%] w-screen px-0 lg:px-16 md:px-7 sm:items-center sm:mx-0 sm:text-center md:text-left md:pb-36 lg:pt-16 lg:gap-8">
    {/* Header Section */}
    <div className="relative flex flex-col md:w-[364px] lg:w-full text-4xl font-semibold leading-[44px] sm:text-left lg:items-start">
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
                <FormLabel className="text-base text-text-default sm:mb-2 sm:text-xl md:text-2xl">
                  Name
                </FormLabel>
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
                <FormLabel className="text-base text-text-default sm:mb-2 sm:text-xl md:text-2xl">
                  How Can I Help You?
                </FormLabel>
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
            className="transition ease-in-out w-full text-text-default-quaternary px-4 lg:py-6 flex items-center justify-center text-base bg-transparent hover:shadow-none bg-[#293239] border-solid border-2 border-[#e4882b] rounded-lg lg:text-xl hover:translate-y-1 sm:text-lg md:text-2xl md:py-6"
          >
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
        transform: "translateX(-50%)",
      }}
    />
    <Spacer className="sm:h-1 lg:h-12" />
  </div>
);

StartProjectSection.propTypes = {
  form: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired,
    control: PropTypes.object.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const ProjectDetail = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      help: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <HeroSection />
      <Spacer className="lg:block sm:hidden" />
      <AboutProjectSection />
      <Spacer />
      <StartProjectSection form={form} onSubmit={onSubmit} />
      <Spacer className="md:hidden sm:block" />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
