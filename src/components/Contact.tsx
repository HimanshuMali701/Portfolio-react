import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import type { FormEvent } from 'react'

const targetEmail = 'himanshu.mali701@gmail.com'

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in name, email, and message.')
      return
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    if (!validEmail) {
      setError('Please enter a valid email address.')
      return
    }

    if (!formRef.current) {
      setError('Form is not ready. Please try again.')
      return
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID as string | undefined
    const templateId = import.meta.env.VITE_TEMPLATE_ID as string | undefined
    const publicKey = import.meta.env.VITE_PUBLIC_KEY as string | undefined

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured. Please set EmailJS environment variables.')
      return
    }

    try {
      setIsSending(true)

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      setSuccess('Message sent successfully')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section-shell section-divider flex min-h-screen items-center bg-white dark:bg-slate-950 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-reveal className="max-w-xl">
  <h2 className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-blue-300 dark:via-indigo-300 dark:to-violet-300">
    Let’s Connect
  </h2>

  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
    I’m actively seeking{" "}
    <span className="font-medium text-blue-600 dark:text-blue-400">
      internship opportunities
    </span>
    ,{" "}
    <span className="font-medium text-indigo-600 dark:text-indigo-400">
      project collaborations
    </span>
    , and{" "}
    <span className="font-medium text-violet-600 dark:text-violet-400">
      data-focused roles
    </span>
    . If you’re working on something interesting or have an opportunity, feel free to reach out.
  </p>

  {/* 🔥 Contact Info */}
  <div className="mt-8 space-y-5 text-sm">

    {/* Email */}
    <div className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <span className="font-medium text-slate-700 dark:text-slate-300">
        Email
      </span>
      <span className="text-blue-700 group-hover:underline dark:text-blue-400">
        {targetEmail}
      </span>
    </div>

    {/* GitHub */}
    <a
      href="https://github.com/HimanshuMali701"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <span className="font-medium text-slate-700 dark:text-slate-300">
        GitHub
      </span>
      <span className="text-blue-700 group-hover:underline dark:text-blue-400">
        View Profile →
      </span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/himanshu-mali701/"
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <span className="font-medium text-slate-700 dark:text-slate-300">
        LinkedIn
      </span>
      <span className="text-blue-700 group-hover:underline dark:text-blue-400">
        Connect →
      </span>
    </a>

  </div>
</div>

          <form
            data-reveal
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/85"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
            </div>

            {error ? <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p> : null}
            {success ? <p className="mt-4 text-sm text-emerald-700 dark:text-emerald-400">{success}</p> : null}

            <button
              type="submit"
              disabled={isSending}
              className="mt-5 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
