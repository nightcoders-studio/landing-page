import { ArrowRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="w-xl bg-white rounded-2xl shadow-md p-8 ring-1 ring-brand">
        <h3 className="text-2xl font-bold text-center mb-2">
          Start Your <span className="text-brand font-bold">Project</span>
        </h3>
        <p className="text-center text-gray-600 mb-6">
          We have assisted over 40+ clients in developing their digital products
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type your or company name here"
              className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your or company name here"
              className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              How can I help you?
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Type here"
              className="mt-1 block w-full rounded-xl border border-brand-secondary px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand/50"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-brand text-white flex items-center justify-center gap-2 px-4 py-2 rounded-full hover:bg-brand-dark transition"
            >
              <ArrowRight size={14} />
              <span>Send Now</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
