import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdWhatsapp, MdLocationOn, MdSend } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import emailjs from '@emailjs/browser';

const MySwal = withReactContent(Swal);

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });




  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_nynr5dj',    // replace 
        'template_4hpms5h',   // replace
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          time: new Date().toLocaleString(),
          message: data.message,
        },
        'z20e81QJ7954OO52b'     // replace
      );

      // Success Alert
      MySwal.fire({
        title: <p className="text-2xl font-bold">Message Sent!</p>,
        html: <p className="text-gray-700">Thank you for your message. I'll get back to you within 24 hours.</p>,
        icon: 'success',
        confirmButtonColor: '#3b82f6',
        confirmButtonText: 'Okay',
        customClass: {
          popup: 'rounded-xl shadow-2xl',
          confirmButton: 'px-6 py-2 rounded-lg'
        }
      });
      console.log("contact data", data);
      reset();
    } catch (error) {
      console.log(error);
      MySwal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 1 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Contact Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <MdEmail className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">Email</h4>
                  <a
                    href="mailto:mdtanvirislamrakib@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    mdraihan51674@gmail.com
                  </a>
                </div>
              </motion.div>

              
              {/* Linkedin  */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all"
              >
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <FaLinkedin className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/md-raihan-islam-b64aab274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/30 transition-all"
              >
                <div className="p-3 bg-green-600/20 rounded-lg">
                  <MdPhone className="text-2xl text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">Phone</h4>
                  <a
                    href="tel:+8801880598006"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    +88 01568970481
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="p-3 bg-emerald-600/20 rounded-lg">
                  <MdWhatsapp className="text-2xl text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">WhatsApp</h4>
                  <a
                    href="https://wa.me/+8801956486761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    +88 01956486761
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <MdLocationOn className="text-2xl text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-300">Location</h4>
                  <p className="text-purple-400">Road no:1,I Block,Basundhara R/A, Dhaka, Bangladesh</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
              noValidate
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters"
                      },
                      maxLength: {
                        value: 50,
                        message: "Name must be less than 50 characters"
                      }
                    })}
                    className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-white/10'
                      }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </motion.div>

                {/* Subject Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 5,
                        message: "Subject must be at least 5 characters"
                      },
                      maxLength: {
                        value: 100,
                        message: "Subject must be less than 100 characters"
                      }
                    })}
                    className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.subject ? 'border-red-500' : 'border-white/10'
                      }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters"
                      },
                      maxLength: {
                        value: 1000,
                        message: "Message must be less than 1000 characters"
                      }
                    })}
                    className={`w-full px-4 py-3 bg-white/5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all ${errors.message ? 'border-red-500' : 'border-white/10'
                      }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-blue-600'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <MdSend className="text-lg" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;