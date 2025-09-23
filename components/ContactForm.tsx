"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-hide success message after 5 seconds
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  // Clear error when user starts typing
  const clearError = () => {
    if (error) setError(null);
  };
  return (
    <div className="card max-w-2xl mx-auto relative overflow-hidden">
      {/* <div className="absolute -top-16 -right-20 w-60 h-60 bg-pink-200/30 rounded-full blob"></div> */}
      <h2
        className="text-2xl font-bold mb-4"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Get in touch
      </h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid format").required("Required"),
          message: Yup.string().min(10, "Too short").required("Required"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setError(null); // Clear any previous errors

          emailjs
            .send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              values,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(() => {
              setSent(true);
              resetForm();
              setSubmitting(false);
            })
            .catch((err) => {
              console.error(err);
              setError("Failed to send message. Please try again.");
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border dark:bg-transparent"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-pink-600 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl border dark:bg-transparent"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-pink-600 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                name="message"
                as="textarea"
                rows={5}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl border dark:bg-transparent"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-pink-600 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn justify-center w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>

      {/* Success Message */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
          >
            <div className="flex items-center justify-center gap-3 text-green-700 dark:text-green-400">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-2xl"
              >
                ✅
              </motion.div>
              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm opacity-80">I'll get back to you soon.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
          >
            <div className="flex items-center justify-center gap-3 text-red-700 dark:text-red-400">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-2xl"
              >
                ❌
              </motion.div>
              <div>
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p className="text-sm opacity-80">{error}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
