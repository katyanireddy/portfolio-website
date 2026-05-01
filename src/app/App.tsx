import { useState } from 'react';
import { Code2, Palette, Brain, Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Sparkles } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null); // 👈 ADD THIS

  return (
    <div className="min-h-screen bg-[#f8fbfd]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0A4174] shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#7BBDE8] flex items-center justify-center">
              <span className="text-[#001D39] font-bold text-lg">K</span>
            </div>
            <span className="text-white font-semibold text-lg">Katt</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-[#7BBDE8] transition-colors text-sm">Home</a>
            <a href="#services" className="text-white hover:text-[#7BBDE8] transition-colors text-sm">Services</a>
            <a href="#about" className="text-white hover:text-[#7BBDE8] transition-colors text-sm">About</a>
            <a href="#projects" className="text-white hover:text-[#7BBDE8] transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-white hover:text-[#7BBDE8] transition-colors text-sm">Contact</a>
          </div>
          <a href="#contact" className="px-6 py-2.5 bg-white text-[#0A4174] rounded-full hover:bg-[#7BBDE8] hover:text-white transition-all font-medium text-sm">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#7BBDE8] rounded-lg">
                <Sparkles className="w-4 h-4 text-[#7BBDE8]" />
                <span className="text-[#0A4174] font-medium">Hello There!</span>
              </div>

              <h1 className="text-5xl md:text-6xl leading-tight">
                <span className="text-[#001D39]">I'm </span>
                <span className="text-[#E1B34A]">Katyani Reddy</span>
                <span className="text-[#001D39]">,</span>
              </h1>

              <h2 className="text-3xl md:text-4xl text-[#001D39]">
                AI/ML Student & Creative Developer
              </h2>

              <h3 className="text-2xl text-[#001D39]">
                Based in India.
              </h3>

              <p className="text-[#49769F] max-w-xl leading-relaxed">
                I build intelligent systems and design meaningful digital experiences — blending AI, design, and development into impactful products.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="flex items-center gap-2 px-8 py-3.5 bg-[#164A41] text-white rounded-full hover:bg-[#001D39] transition-all">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="px-8 py-3.5 bg-white text-[#0A4174] border-2 border-[#0A4174] rounded-full hover:bg-[#0A4174] hover:text-white transition-all">
                  Let's Collaborate
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-[450px] h-[450px]">
                {/* Outer Circle */}
    <div className="absolute inset-0 rounded-full bg-[#7BBDE8] flex items-center justify-center">

      {/* Inner Circle */}
      <div className="w-[90%] h-[90%] rounded-full bg-white/90 backdrop-blur flex items-center justify-center">

        {/* Image */}
        <img
          src="/katt.png"
          alt="Katyani Reddy"
          className="w-[100%] h-[100%] object-cover rounded-full shadow-xl"
        />

                </div>
                </div>

                <div className="absolute top-16 right-8 px-4 py-2 bg-[#0A4174] text-white rounded-full text-sm font-medium shadow-lg">
                  Hit 1st Year
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -left-4 px-4 py-2 bg-[#E1B34A] text-white rounded-full text-sm font-medium shadow-lg">
                  AI/ML Engineer
                </div>

                <div className="absolute bottom-24 -right-8 px-4 py-2 bg-[#164A41] text-white rounded-full text-sm font-medium shadow-lg">
                  Developer
                </div>

                <div className="absolute bottom-32 left-8 px-4 py-2 bg-[#49769F] text-white rounded-full text-sm font-medium shadow-lg">
                  UI/UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>
        

<a
  href="https://wa.me/917691833047?text=Hi%20Kayani,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
  {/* POP MESSAGE */}
  <div className="absolute bottom-16 right-0 bg-white text-[#164A41] px-4 py-2 rounded-lg shadow-md text-sm opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
    Click to chat on WhatsApp 💬
  </div>

  {/* BUTTON */}
  <div className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
    <FaWhatsapp className="text-white text-2xl" />
  </div>
</a>
      </section>

      {/* Scrolling Services Bar */}
      <div className="bg-[#7BBDE8] py-4 overflow-hidden">
        <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-[#001D39] font-semibold text-lg">AI & Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-[#001D39] font-semibold text-lg">Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-[#001D39] font-semibold text-lg">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <span className="text-[#001D39] font-semibold text-lg">Data Analysis</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="bg-[#E8ECE4] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#4E8EA2] mb-2">~ Services</p>
              <h2 className="text-4xl md:text-5xl">
                <span className="text-[#164A41]">What</span>
                <span className="text-[#001D39]"> I Do</span>
              </h2>
            </div>
            <a href="#services" className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#E1B34A] text-white rounded-full hover:bg-[#001D39] transition-all">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#7BBDE8]/20 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#0A4174]" />
              </div>
              <h3 className="text-xl font-semibold text-[#001D39] mb-3">AI & Machine Learning</h3>
              <p className="text-[#49769F] mb-6 leading-relaxed">
                Building smart systems using ML models, data analysis, and intelligent automation.
              </p>
              <button 
  onClick={() => setActiveModal("ai")}
  className="text-[#7BBDE8] hover:underline"
>
  Learn more →
</button>
              
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#7BBDE8]/20 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-[#0A4174]" />
              </div>
              <h3 className="text-xl font-semibold text-[#001D39] mb-3">Web Development</h3>
              <p className="text-[#49769F] mb-6 leading-relaxed">
                Creating responsive, modern websites with clean UI and strong performance.
              </p>
              <button 
  onClick={() => setActiveModal("web")}
  className="text-[#7BBDE8] hover:underline"
>
  Learn more →
</button>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#7BBDE8]/20 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-[#0A4174]" />
              </div>
              <h3 className="text-xl font-semibold text-[#001D39] mb-3">UI/UX Design</h3>
              <p className="text-[#49769F] mb-6 leading-relaxed">
                Designing intuitive and aesthetic user experiences that users actually enjoy.
              </p>
              <button 
  onClick={() => setActiveModal("ui")}
  className="text-[#7BBDE8] hover:underline"
>
  Learn more →
</button>
            </div>
          </div>
          
        </div>
        
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#0A4174] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-[400px] h-[400px]">

                {/* Outer Circle */}
    <div className="absolute inset-0 rounded-full bg-[#7BBDE8] flex items-center justify-center">

      {/* Inner Circle */}
      <div className="w-[90%] h-[90%] rounded-full bg-white/90 backdrop-blur flex items-center justify-center">

        {/* Image */}
        <img
          src="/katt2.png"
          alt="Katyani Reddy"
          className="w-[100%] h-[100%] object-cover rounded-full shadow-xl"
        /></div>
                </div>

                <div className="absolute top-12 left-12 px-4 py-2 bg-[#7BBDE8] text-white rounded-full text-sm font-medium shadow-lg">
                  AI/ML Expert
                </div>

                <div className="absolute top-24 right-0 px-4 py-2 bg-[#4E8EA2] text-white rounded-full text-sm font-medium shadow-lg">
                  React Developer
                </div>

                <div className="absolute bottom-32 left-4 px-4 py-2 bg-[#164A41] text-white rounded-full text-sm font-medium shadow-lg">
                  UI/UX Designer
                </div>

                <div className="absolute bottom-16 right-12 px-4 py-2 bg-[#001D39] text-white rounded-full text-sm font-medium shadow-lg">
                  Python Expert
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-[#7BBDE8]">~ About Me</p>
              <h2 className="text-4xl md:text-5xl text-white">
                Who is <span className="text-[#7BBDE8]">Katyani Reddy?</span>
              </h2>

              <p className="text-[#BDD8E9] leading-relaxed">
                I'm a first-year AI/ML student passionate about building real-world tech solutions.
                I love combining artificial intelligence with design to create products that are not just functional, but meaningful.
              </p>

              <p className="text-[#BDD8E9] leading-relaxed">
                From developing AI-powered platforms to designing user-friendly interfaces, I focus on solving real problems with technology.
              </p>

              <p className="text-[#BDD8E9] leading-relaxed">
                I'm currently working on projects like SignBridge and Schemify X, aiming to create impact through innovation.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#7BBDE8]">5+</div>
                  <div className="text-[#BDD8E9] text-sm mt-1">Projects Built</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7BBDE8]">3+</div>
                  <div className="text-[#BDD8E9] text-sm mt-1">AI-Based Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#7BBDE8]">100%</div>
                  <div className="text-[#BDD8E9] text-sm mt-1">Learning Mode 🚀</div>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a href="/resume.pdf" className="flex items-center gap-2 px-8 py-3.5 bg-[#7BBDE8] text-[#001D39] rounded-full hover:bg-white transition-all font-medium">
                  Download CV
                  <Download className="w-4 h-4" />
                </a>
                <div className="text-[#7BBDE8] font-script text-2xl italic">Katyani Reddy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-[#E8ECE4] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-[#4E8EA2]">~ My Favorite Tools</p>
          </div>
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            <span className="text-[#7BBDE8]">Technologies I</span>
            <br />
            <span className="text-[#164A41]">Work With</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: 'Python', level: 95 },
              { name: 'TensorFlow', level: 88 },
              { name: 'React', level: 90 },
              { name: 'Tailwind', level: 85 },
              { name: 'Figma', level: 90 },
              { name: 'GitHub', level: 92 }
            ].map((tool, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#BDD8E9"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#0A4174"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - tool.level / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#001D39]">{tool.level}%</span>
                  </div>
                </div>
                <h3 className="text-[#001D39] font-semibold">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#4E8EA2] mb-2">~ My Portfolio</p>
              <h2 className="text-4xl md:text-5xl">
                <span className="text-[#001D39]">My Latest </span>
                <span className="text-[#7BBDE8]">Projects</span>
              </h2>
            </div>
            <a href="https://github.com/katyanireddy?tab=repositories" className="hidden md:flex items-center gap-2 px-6 py-3 bg-[#164A41] text-white rounded-full hover:bg-[#001D39] transition-all">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-[#f8fbfd] rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#7BBDE8] to-[#0A4174] flex items-center justify-center">
                <img
    src="/signbridge.png"
    alt="SignBridge"
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  /></div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  
                  <span className="px-3 py-1 bg-[#7BBDE8] text-white rounded-full text-xs">AI/ML</span>
                  <span className="px-3 py-1 bg-[#4E8EA2] text-white rounded-full text-xs">Computer Vision</span>
                  <span className="px-3 py-1 bg-[#49769F] text-white rounded-full text-xs">Accessibility</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D39] mb-3">SignBridge</h3>
                <p className="text-[#49769F] mb-4 leading-relaxed">
                  An AI-powered platform that translates sign language into text in real-time, improving accessibility and communication.
                </p>
                <button className="w-12 h-12 bg-[#0A4174] rounded-full flex items-center justify-center text-white hover:bg-[#001D39] transition-all group-hover:scale-110">
                  <ArrowRight className="w-5 h-5" />
                </button>
                {/* GitHub */}
                <div className="flex gap-3 mt-4 justify-end">
                  <a
  href="https://github.com/katyanireddy/signbridge"
  className="px-5 py-2 bg-[#0A4174] text-white rounded-full hover:bg-[#001D39] transition"
>
  Code
</a>

<a
  href="https://signbridge-gamma.vercel.app/"
  className="px-5 py-2 border border-[#0A4174] text-[#0A4174] rounded-full hover:bg-[#0A4174] hover:text-white transition"
>
  Live
</a>
              </div>
                </div>
  
  
            </div>

            <div className="bg-[#f8fbfd] rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#4E8EA2] to-[#49769F] flex items-center justify-center">
                
                <img
    src="/quantumxdelta.png"
    alt="QuantumXDelta"
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#7BBDE8] text-white rounded-full text-xs">web app</span>
                  <span className="px-3 py-1 bg-[#4E8EA2] text-white rounded-full text-xs">Dashboard</span>
                  <span className="px-3 py-1 bg-[#49769F] text-white rounded-full text-xs">AI Chatbot</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D39] mb-3">QuantumXDelta</h3>
<p className="text-[#49769F] mb-4 leading-relaxed">
  A modern school and coaching platform with admission system, live admin dashboard, and an AI chatbot to assist students in real-time.
</p>
                <button className="w-12 h-12 bg-[#0A4174] rounded-full flex items-center justify-center text-white hover:bg-[#001D39] transition-all group-hover:scale-110">
                  <ArrowRight className="w-5 h-5" />
                </button>
                {/* GitHub */}
                <div className="flex gap-3 mt-4 justify-end">
                  <a
  href="https://github.com/katyanireddy/quantumxdelta"
  className="px-5 py-2 bg-[#0A4174] text-white rounded-full hover:bg-[#001D39] transition"
>
  Code
</a>

<a
  href="https://quantumxdelta.vercel.app/"
  className="px-5 py-2 border border-[#0A4174] text-[#0A4174] rounded-full hover:bg-[#0A4174] hover:text-white transition"
>
  Live
</a>
              </div>
              </div>
            </div>

            <div className="bg-[#f8fbfd] rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-[#0A4174] to-[#001D39] flex items-center justify-center">
                <img
    src="/graycollar.png"
    alt="GrayCollar"
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#7BBDE8] text-white rounded-full text-xs">Social Impact</span>
                  <span className="px-3 py-1 bg-[#4E8EA2] text-white rounded-full text-xs">Web Platform</span>
                  <span className="px-3 py-1 bg-[#49769F] text-white rounded-full text-xs">Jobs</span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D39] mb-3">GrayCollar</h3>
<p className="text-[#49769F] mb-4 leading-relaxed">
  A platform connecting retired professionals with flexible job opportunities, enabling them to stay active and financially independent.
</p>
                <button className="w-12 h-12 bg-[#0A4174] rounded-full flex items-center justify-center text-white hover:bg-[#001D39] transition-all group-hover:scale-110">
                  <ArrowRight className="w-5 h-5" />
                </button>
                {/* GitHub */}
                <div className="flex gap-3 mt-4 justify-end">
                  <a
  href="https://github.com/katyanireddy/GrayCollar"
  className="px-5 py-2 bg-[#0A4174] text-white rounded-full hover:bg-[#001D39] transition"
>
  Code
</a>

<a
  href="#"
  className="px-5 py-2 border border-[#0A4174] text-[#0A4174] rounded-full hover:bg-[#0A4174] hover:text-white transition"
>
  Live
</a>
              </div>
              </div>
            </div>
            <div className="bg-[#f8fbfd] rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  <div className="h-64 bg-gradient-to-br from-[#7BBDE8] to-[#164A41] flex items-center justify-center">
   <img
    src="/heartlift.png"
    alt="HeartLift"
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  />
  </div>
  <div className="p-6">
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-[#7BBDE8] text-white rounded-full text-xs">AI App</span>
      <span className="px-3 py-1 bg-[#4E8EA2] text-white rounded-full text-xs">Mental Health</span>
      <span className="px-3 py-1 bg-[#49769F] text-white rounded-full text-xs">Mobile UX</span>
    </div>
    <h3 className="text-2xl font-bold text-[#001D39] mb-3">HeartLift</h3>
    <p className="text-[#49769F] mb-4 leading-relaxed">
      A youth-focused breakup recovery app offering mood tracking, AI emotional support, and guided healing routines.
    </p>
    <button className="w-12 h-12 bg-[#0A4174] rounded-full flex items-center justify-center text-white hover:bg-[#001D39] transition-all group-hover:scale-110">
      <ArrowRight className="w-5 h-5" />
    </button>
    {/* GitHub */}
                <div className="flex gap-3 mt-4 justify-end">
                  <a
  href="https://github.com/katyanireddy/HeartLift"
  className="px-5 py-2 bg-[#0A4174] text-white rounded-full hover:bg-[#001D39] transition"
>
  Code
</a>

<a
  href="#"
  className="px-5 py-2 border border-[#0A4174] text-[#0A4174] rounded-full hover:bg-[#0A4174] hover:text-white transition"
>
  Live
</a>
              </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Education & Work Section */}
      <section className="bg-[#E8ECE4] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-[#4D774E] text-center mb-2">Education & Work</p>
          <h2 className="text-4xl text-center mb-12 text-[#164A41]">
            My <span className="text-[#E1B34A]">Academic and Professional</span> Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#E1B34A] rounded-full flex items-center justify-center">🎓</div>
                <h3 className="text-2xl text-[#164A41]">Education</h3>
              </div>
              <div className="space-y-6">
                {[
                  { year: '2025-2029', school: 'SJB Institute of Technology', degree: 'Bachelor in Engineering (AIML)', marks: '9.05 CGPA' },
                  { year: '2022-2024', school: 'Banasthali Vidyapeeth', degree: 'Senior Secondary Education' , marks: 'First Division'},
                  { year: '2004-2008', school: "St. Mary's School", degree: 'Secondary Education', marks: '94%' }
                ].map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#E1B34A] pl-6">
                    <div className="text-[#4D774E] mb-1">{edu.year}</div>
                    <div className="text-xl mb-1 text-[#164A41]">{edu.school}</div>
                    <div className="text-[#4D774E]">{edu.degree}</div>
                    <div className="text-[#4D774E]">{edu.marks}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#E1B34A] rounded-full flex items-center justify-center">💼</div>
                <h3 className="text-2xl text-[#164A41]">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {[
                  { year: '2025–Present', company: 'AI/ML Developer — Self Projects', role: 'Building AI-powered solutions like SignBridge and Schemify X. Focused on solving real-world problems using machine learning, data processing, and intelligent systems.' },
                  { year: '2025-Present', company: 'Web Developer & UI Designer', role: 'Designed and developed responsive websites using React and Tailwind CSS. Focused on creating modern UI/UX with clean design and smooth user experience.' },
                  { year: '2014-2016', company: 'Hackathon Participant', role: 'Participated in hackathons, building innovative projects under time constraints. Worked on product development, problem-solving, and team collaboration.' }
                ].map((work, index) => (
                  <div key={index} className="border-l-4 border-[#E1B34A] pl-6">
                    <div className="text-[#4D774E] mb-1">{work.year}</div>
                    <div className="text-xl mb-1 text-[#164A41]">{work.company}</div>
                    <div className="text-[#4D774E]">{work.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#0A4174] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#9DC88D] mb-2">Pricing Table</p>
              <h2 className="text-4xl">
                My <span className="text-[#E1B34A]">Pricing Model</span>
              </h2>
              <p className="text-[#9DC88D] mb-2">Flexible pricing for projects, internships, and collaborations.</p>
            </div>
           <a
  href="https://wa.me/917691833047?text=Hi%20Katyani,%20I%20want%20to%20work%20with%20you!%20Can%20we%20discuss%20pricing%20and%20details?"
  target="_blank"
  className="bg-[#E1B34A] text-[#164A41] px-8 py-3 rounded-full hover:bg-[#D4A439] transition-colors flex items-center gap-2"
>
  Get Started
  <span className="bg-[#164A41] text-white w-6 h-6 rounded-full flex items-center justify-center">▶</span>
</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    title: 'Starter',
    price: '₹2,000 – ₹5,000',
    period: '/ Project',
    features: [
      'Landing Page Design',
      'Basic UI/UX Design',
      '1–2 Page Website',
      'Responsive Layout',
      'Clean Modern Design',
      'Basic Animations',
      '1 Revision Included',
      'Delivery in 3–5 days'
    ]
  },
  {
    title: 'Standard',
    price: '₹8,000 – ₹15,000',
    period: '/ Project',
    featured: true,
    features: [
      'Full Website (3–5 Pages)',
      'UI/UX + Development',
      'Responsive Design (All Devices)',
      'Modern Animations & Interactions',
      'Figma Design Included',
      'Performance Optimization',
      '2–3 Revisions Included',
      'Delivery in 5–10 days'
    ]
  },
  {
    title: 'Premium',
    price: '₹20,000+',
    period: '/ Project',
    features: [
      'Custom Full Website / Web App',
      'Advanced UI/UX + Animations',
      'AI Integration (Optional)',
      'Dashboard / Admin Panel',
      'SEO Optimization',
      'High Performance & Scalability',
      'Unlimited Revisions',
      'Priority Delivery'
    ]
  }
].map((plan, index) => (
              <div key={index} className={`p-8 rounded-lg ${plan.featured ? 'bg-[#E1B34A] text-[#164A41]' : 'bg-[#0f3530]'}`}>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl">{plan.title}</h3>
                  <div className={`w-10 h-10 ${plan.featured ? 'bg-[#164A41]/20' : 'bg-white/20'} rounded-full flex items-center justify-center`}>→</div>
                </div>
                <div className="text-4xl mb-6">{plan.price} <span className={`text-lg ${plan.featured ? 'text-[#164A41]/70' : 'text-[#E8ECE4]'}`}>{plan.period}</span></div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                   <span className={plan.featured ? 'text-[#164A41]' : 'text-[#E1B34A]'}>●</span>
                  <span className={plan.featured ? 'text-[#164A41]/70' : 'text-[#E8ECE4]'}>
                   {feature}
                    </span>
                   </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F5F7F4] py-20">
  <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div>
      <p className="text-[#4D774E] mb-2">Contact Me</p>

      <h2 className="text-4xl font-semibold text-[#164A41] mb-4">
        Let's Build <span className="text-[#E1B34A]">Something Together</span>
      </h2>

      <p className="text-[#4D774E] mb-8">
        Have an idea, project, or collaboration in mind?  
        Fill the form or reach out — I’d love to work with you.
      </p>

      {/* CONTACT INFO */}
      <div className="space-y-6 text-[#164A41]">
<p>📞 <a href="tel:+917691833047" className="hover:text-[#E1B34A]">+91 7691833047</a></p>

<p>📧 <a href="mailto:katyanireddy17@gmail.com" className="hover:text-[#E1B34A]">katyanireddy17@gmail.com</a></p>

<p>🌐 <a href="https://github.com/katyanireddy" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1B34A]">
  github.com/katyanireddy
</a></p>

<p>💼 <a href="https://linkedin.com/in/katyanireddy" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1B34A]">
  linkedin.com/in/katyanireddy
</a></p>

<p>📍 Bangalore, India</p>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <form 
      action="https://formspree.io/f/mlgzdrqb"
      method="POST"
      className="space-y-4"
    >

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Your Name *"
          required
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41] focus:outline-none focus:ring-2 focus:ring-[#E1B34A]"
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          required
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41] focus:outline-none focus:ring-2 focus:ring-[#E1B34A]"
        />
      </div>

      {/* Phone + Interest */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="phone"
          placeholder="Phone"
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41]"
        />

        <select
          name="interest"
          required
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41] appearance-none"
        >
          <option value="">I'm interested in *</option>
          <option>AI / Machine Learning Project</option>
          <option>Website Development</option>
          <option>UI/UX Design</option>
          <option>Internship Opportunity</option>
          <option>Collaboration</option>
          <option>Other</option>
        </select>
      </div>

      {/* Budget + Country */}
      <div className="grid grid-cols-2 gap-4">
        <select
          name="budget"
          required
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41] appearance-none"
        >
          <option value="">Budget Range *</option>
          <option>₹2k – ₹5k</option>
          <option>₹5k – ₹10k</option>
          <option>₹10k – ₹20k</option>
          <option>₹20k+</option>
        </select>

        <select
          name="country"
          required
          className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41] appearance-none"
        >
          <option value="">Country *</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Other</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows="4"
        placeholder="Your Message *"
        required
        className="w-full p-3 rounded-lg bg-white/70 border border-[#dfe5dc] text-[#164A41]"
      ></textarea>

      {/* Hidden (optional redirect) */}
      <input type="hidden" name="_subject" value="http://localhost:5173" />

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#164A41] text-white px-8 py-3 rounded-full hover:bg-[#123d36] transition flex items-center gap-2"
      >
        Submit
        <span className="bg-[#E1B34A] text-[#164A41] w-6 h-6 rounded-full flex items-center justify-center">
          →
        </span>
      </button>

    </form>
  </div>
</section>


      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#0A4174] text-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-[#9DC88D] text-center mb-2">FAQs</p>

          <h2 className="text-4xl text-center mb-12">
            Questions? <span className="text-[#E1B34A]">Look here.</span>
          </h2>

          <div className="space-y-4">
            {[
              "What kind of projects do you build?",
              "Can I download your resume?",
              "Are you open to freelance or internships?",
              "What technologies do you use?",
              "How can I contact you quickly?",
            ].map((question, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? "bg-[#E1B34A] text-[#164A41]"
                      : "bg-[#0f3530]"
                  }`}
                >
                  {/* QUESTION */}
                  <div className="flex justify-between items-center">
                    <span>{question}</span>
                    <span className="text-2xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>

                  {/* ANSWER */}
                  {isOpen && (
                    <p className="mt-4 text-sm">
                      {index === 0 &&
                        "I build AI/ML projects, websites, and user-friendly interfaces."}
                      {index === 1 &&
                        "Yes, you can request my resume through the contact section."}
                      {index === 2 &&
                        "Yes, I’m open to internships, freelance work, and collaborations."}
                      {index === 3 &&
                        "I work with Python, React, Tailwind CSS, and Machine Learning tools."}
                      {index === 4 &&
                        "You can contact me via the form or WhatsApp for faster replies."}
                    </p>
                  )}
                  
                </div>
                
              );
            })}
            
          </div>

          {/* CTA */}
          <p className="text-center mt-10 text-[#9DC88D]">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-[#E1B34A] underline"
            >
              Contact me
            </a>
          </p>
        </div>
      </section>

   
{/* Footer */}
<footer className="bg-[#E8ECE4] py-20">
  <div className="max-w-7xl mx-auto px-8">

    <div className="grid md:grid-cols-2 gap-12 mb-12">

      {/* LEFT */}
      <div>
        <h3 className="text-2xl mb-4 text-[#164A41]">
          Let's <span className="text-[#E1B34A]">Connect</span> there
        </h3>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-[#E1B34A] rounded-full flex items-center justify-center text-[#164A41] font-bold">
            K
          </div>
          <span className="text-xl text-[#164A41] font-semibold">
            Katyani Reddy
          </span>
        </div>

        <p className="text-[#4D774E] mb-6">
          AI/ML student building modern web apps and intelligent systems.
          Open to internships, freelance work, and collaborations.
        </p>

        {/* SOCIAL */}
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/katyanireddy" target="_blank"
            className="w-10 h-10 bg-[#E1B34A] rounded-full flex items-center justify-center text-[#164A41] hover:scale-110 transition">
            L
          </a>

          <a href="https://github.com/katyanireddy" target="_blank"
            className="w-10 h-10 bg-[#E1B34A] rounded-full flex items-center justify-center text-[#164A41] hover:scale-110 transition">
            G
          </a>

          <a href="mailto:katyanireddy17@gmail.com"
            className="w-10 h-10 bg-[#E1B34A] rounded-full flex items-center justify-center text-[#164A41] hover:scale-110 transition">
            M
          </a>

          <a href="https://wa.me/917691833047" target="_blank"
            className="w-10 h-10 bg-[#E1B34A] rounded-full flex items-center justify-center text-[#164A41] hover:scale-110 transition">
            W
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* NAVIGATION */}
        <div>
          <h4 className="text-[#E1B34A] mb-4">Navigation</h4>
          <div className="space-y-2 text-[#4D774E]">

            <a href="#home" className="block hover:text-[#164A41]">Home</a>
            <a href="#services" className="block hover:text-[#164A41]">Services</a>
            <a href="#about" className="block hover:text-[#164A41]">About</a>
            <a href="#projects" className="block hover:text-[#164A41]">Projects</a>
            <a href="#contact" className="block hover:text-[#164A41]">Contact</a>
            <a href="#faq" className="block hover:text-[#164A41]">FAQs</a>

          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-[#E1B34A] mb-4">Contact</h4>

          <div className="space-y-2 text-[#4D774E]">

            <a href="tel:+917691833047" className="block hover:text-[#164A41]">
              +91 76918 33047
            </a>

            <a href="mailto:katyanireddy17@gmail.com" className="block hover:text-[#164A41]">
              katyanireddy17@gmail.com
            </a>

            <a href="https://linkedin.com/in/katyanireddy" target="_blank" className="block hover:text-[#164A41]">
              LinkedIn Profile
            </a>
            <a href="https://github.com/katyanireddy" target="_blank" className="block hover:text-[#164A41]">
              GitHub Profile
            </a>

            <div>Bangalore, India</div>

          </div>
        </div>

      </div>
    </div>

    {/* BOTTOM */}
    <div className="border-t border-[#4D774E]/30 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#4D774E] text-sm">

        <div>
          © 2026 Katyani Reddy. All Rights Reserved.
        </div>

        <div className="flex gap-4">
          <a href="#" className="hover:text-[#E1B34A]">Terms</a>
          <span>|</span>
          <a href="#" className="hover:text-[#E1B34A]">Privacy</a>
        </div>

      </div>
    </div>

  </div>
</footer>
{activeModal && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    
    <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-xl relative animate-fadeIn">
      
      {/* Close button */}
      <button
        onClick={() => setActiveModal(null)}
        className="absolute top-3 right-3 text-xl"
      >
        ✕
      </button>

      {/* Dynamic Content */}
      {activeModal === "ai" && (
        <>
          <h2 className="text-2xl font-bold mb-2">AI & Machine Learning</h2>
          <p className="text-gray-600">
            I build intelligent systems using ML models, data analysis, and automation.
            I work with Python, TensorFlow, and real-world datasets to create impactful solutions.
          </p>
        </>
      )}

      {activeModal === "web" && (
        <>
          <h2 className="text-2xl font-bold mb-2">Web Development</h2>
          <p className="text-gray-600">
            I create modern, responsive websites using React, Tailwind CSS, and clean UI practices.
            Focused on performance, design, and user experience.
          </p>
        </>
      )}

      {activeModal === "ui" && (
        <>
          <h2 className="text-2xl font-bold mb-2">UI/UX Design</h2>
          <p className="text-gray-600">
            I design intuitive interfaces using Figma, focusing on user-centered design,
            clean layouts, and engaging user experiences.
          </p>
        </>
      )}

    </div>
  </div>
)}
 </div>
 
  );
}

  
  