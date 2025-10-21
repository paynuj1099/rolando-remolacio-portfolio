"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import AnimatedCard from "./ui/AnimatedCard";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "rolandojrremolacio@gmail.com",
    href: "mailto:rolandojrremolacio@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+639625871454",
    href: "tel:+639625871454",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "San Pedro, Laguna, Philippines",
    href: "https://maps.google.com/?q=San+Pedro+Laguna+PH",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/jun.yap1099",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/jnyprmlc",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
      >
        <rect
          x="2.5"
          y="2.5"
          width="19"
          height="19"
          rx="5.5"
          stroke="currentColor"
          strokeWidth={2.2}
        />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2.2} />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/@_paynuj",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.53 3H21.5l-7.19 8.24L22.5 21h-6.36l-5.01-6.03L4.47 21H0.5l7.61-8.73L1.5 3h6.5l4.34 5.23L17.53 3zm-2.13 15.5h2.13l-5.69-6.85-2.13 2.44L15.4 18.5zm-8.93-13l5.09 6.13L8.5 9.5 4.47 5.5h2zm13.86 0h-2.01l-3.13 3.74 1.13 1.36L20.46 5.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
            "b3568e7c-4449-4df9-9756-282a7b3a5a94",
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Portfolio Contact Form",
          to_email: "rolandojrremolacio@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hello, I'd love to
            hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm currently available for freelance projects opportunities. If
                you have a project in mind or just want to chat about
                technology, feel free to reach out through any of the channels
                below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard
                    key={item.label}
                    glowColor="rgba(59, 130, 246, 0.15)"
                    className="p-0"
                  >
                    <motion.a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-semibold">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  </AnimatedCard>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <AnimatedCard glowColor="rgba(99, 102, 241, 0.2)" className="p-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                      : submitStatus === "error"
                      ? "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                      : "bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <ExclamationCircleIcon className="w-5 h-5" />
                      <span>Failed to Send</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 p-3 rounded-lg"
                  >
                    Sorry, there was an error sending your message. Please try
                    again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
