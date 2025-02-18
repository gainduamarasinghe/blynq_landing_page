import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Award, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
export const About = () => {
  const containerRef = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const team = [{
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    bio: "With over 15 years of experience in automotive industry, John leads our vision for the future of vehicle management.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "john@blynq.com"
    }
  }, {
    name: "Sarah Williams",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    bio: "Sarah brings 12 years of tech leadership experience, driving innovation in our platform development.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "sarah@blynq.com"
    }
  }, {
    name: "David Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "David oversees our day-to-day operations, ensuring seamless service delivery to all our clients.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david@blynq.com"
    }
  }, {
    name: "Maria Rodriguez",
    role: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Maria leads our customer success team, focusing on delivering exceptional service experiences.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "maria@blynq.com"
    }
  }, {
    name: "James Wilson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3",
    bio: "James drives our product strategy, bringing innovative solutions to vehicle management.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "james@blynq.com"
    }
  }];
  const animateValues = true; // Define the animateValues variable

  return <div className="w-full" ref={containerRef}>
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover" style={{
        filter: "brightness(0.3)"
      }}>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-driving-through-a-city-at-night-1270-large.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Driving the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Vehicle Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize how people manage their
              vehicles through innovative technology solutions.
            </p>
          </motion.div>
        </div>

        
        {/* Scroll Indicator */}
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowRight className="w-6 h-6 text-white transform rotate-90" />
        </motion.div>
      </div>
      {/* Mission & Vision with Parallax */}
      <motion.section style={{
      y
    }} className="relative py-32 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg">
              <div className="absolute -top-6 -left-6 p-4 bg-blue-600 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To simplify vehicle management and maintenance through
                innovative technology, making it accessible and efficient for
                everyone in Sri Lanka.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-lg">
              <div className="absolute -top-6 -left-6 p-4 bg-blue-600 rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the leading vehicle management platform in South Asia,
                known for innovation, reliability, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Core Values Driving Us
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900 rounded-t-full opacity-10" />
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-6 relative ${animateValues ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"} transition-all duration-1000`}
            >
              {[
                {
                  title: "Customer-Centricity",
                  icon: "👥",
                },
                {
                  title: "Integrity",
                  icon: "🛡️",
                },
                {
                  title: "Transparency",
                  icon: "🔍",
                },
                {
                  title: "Innovation",
                  icon: "💡",
                },
                {
                  title: "Reliability",
                  icon: "⚡",
                },
                {
                  title: "Collaboration",
                  icon: "🤝",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals driving innovation in vehicle
              management
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            y: -10
          }} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="aspect-w-3 aspect-h-4">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-blue-400 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* Timeline Section with 3D Effect */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              The milestones that shaped BlynQ
            </p>
          </motion.div>
          <div className="space-y-24">
            {[{
            year: "2020",
            title: "Company Founded",
            description: "BlynQ was established with a vision to revolutionize vehicle management",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3"
          }, {
            year: "2021",
            title: "First 1000 Users",
            description: "Reached our first milestone of 1000 active users",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3"
          }, {
            year: "2022",
            title: "Service Center Network",
            description: "Expanded our network to include 200+ service centers",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3"
          }, {
            year: "2023",
            title: "Mobile App Launch",
            description: "Launched our mobile application for iOS and Android",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3"
          }, {
            year: "2024",
            title: "International Expansion",
            description: "Started operations in neighboring countries",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3"
          }].map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className={`flex items-center gap-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="flex-1">
                  <motion.div whileHover={{
                scale: 1.05
              }} className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-5xl font-bold text-white">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};