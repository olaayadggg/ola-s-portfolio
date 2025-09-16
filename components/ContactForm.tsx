// 'use client';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import emailjs from 'emailjs-com';
// import { useState } from 'react';

// export default function ContactForm() {
//   const [sent, setSent] = useState(false);

//   return (
//     <div className="card max-w-xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent"
//           style={{ backgroundImage: 'var(--brand-gradient)' }}>
//         Send Me a Message 💌
//       </h2>

//       {!sent ? (
//         <Formik
//           initialValues={{ name: '', email: '', message: '' }}
//           validationSchema={Yup.object({
//             name: Yup.string().required('Your name is required'),
//             email: Yup.string().email('Invalid email').required('Your email is required'),
//             message: Yup.string().min(10, 'Message must be at least 10 characters').required('Message is required'),
//           })}
//           onSubmit={(values, { resetForm }) => {
//             emailjs.send(
//               process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//               process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//               values,
//               process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//             )
//             .then(() => {
//               setSent(true);
//               resetForm();
//             })
//             .catch((err) => {
//               console.error('FAILED...', err);
//               alert("Something went wrong. Please try again later.");
//             });
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-4">
//               <div>
//                 <Field name="name" type="text" placeholder="Your Name"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none" />
//                 <ErrorMessage name="name" component="div" className="text-pink-600 text-sm mt-1" />
//               </div>

//               <div>
//                 <Field name="email" type="email" placeholder="Your Email"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none" />
//                 <ErrorMessage name="email" component="div" className="text-pink-600 text-sm mt-1" />
//               </div>

//               <div>
//                 <Field name="message" as="textarea" rows="5" placeholder="Your Message"
//                   className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-pink-400 outline-none" />
//                 <ErrorMessage name="message" component="div" className="text-pink-600 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn w-full justify-center"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       ) : (
//         <div className="text-center text-green-600 font-medium">
//           ✅ Thanks! Your message has been sent.
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="card max-w-2xl mx-auto relative overflow-hidden">
      <div className="absolute -top-16 -right-20 w-60 h-60 bg-pink-200/30 rounded-full blob"></div>
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
      {!sent ? (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid").required("Required"),
            message: Yup.string().min(10, "Too short").required("Required"),
          })}
          onSubmit={(values, { resetForm }) => {
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
              })
              .catch((err) => {
                console.error(err);
                alert("Failed to send message");
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
      ) : (
        <div className="text-center text-green-600 font-medium">
          ✅ Thanks! Message sent.
        </div>
      )}
    </div>
  );
}
