"use client"

import { Award, GraduationCap } from "lucide-react"

export function Certifications() {
  const certifications = [
    "Google AI for Anyone Certification",
    "Product Marketing Alliance - Core",
    "The Complete Solidity Course - Blockchain - Zero to Expert (Udemy)",
    "Appsflyer Essentials Certified - Mobile App Analytics",
    "Level Access Certified - Website & Content Accessibility (WCAG)",
    "Sprout Social Certified",
    "Hubspot Social Media Marketing Certified",
    "Hootsuite Social Media Marketing Certified",
    "BuildSpace Nights & Weekends",
  ]

  const education = [
    {
      institution: "University At Buffalo",
      degree: "Business Administration - Finance & Marketing Concentrations",
      gpa: "3.7 GPA",
    },
    {
      institution: "Hilbert College",
      degree: "CyberSecurity/Infosec",
      gpa: "3.8 GPA",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight pb-2">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mt-4" />
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development in marketing, technology, and business strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications - Left Side */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-red-400 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education - Right Side */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="group">
                  <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-300 mb-2 leading-relaxed">{edu.degree}</p>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-full">
                    <span className="text-red-400 font-semibold text-sm">{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
