import React, { lazy } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
export const Contact = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </motion.h1>
          <motion.p initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-xl opacity-90 max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or support
          </motion.p>
        </div>
      </motion.section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{
          x: -50,
          opacity: 0
        }} whileInView={{
          x: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
          {/* Contact Information */}
          <motion.div initial={{
          x: 50,
          opacity: 0
        }} whileInView={{
          x: 0,
          opacity: 1
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@blynq.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+94 11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                      123 Main Street, Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map */}
            <div className="h-80 bg-gray-100 rounded-xl overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585959615!2d79.8136811674035!3d6.921833369666432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1645488345520!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy"></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};