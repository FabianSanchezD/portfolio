import React from 'react'

const education = [
    {
        "school": "Tecnológico de Costa Rica",
        "degree": "Computer Science (Ing. Sistemas)",
        "location": "Costa Rica",
        "date1": "2025",
        "date2": "Present"
    },
    {
        "school": "Científico Cartago",
        "degree": "High School",
        "location": "Costa Rica",
        "date1": "2023",
        "date2": "2024"
    }
]

const EducationSection = () => {
  return (
    <div id="education" className="flex flex-col gap-6">
      <h1 className="text-5xl font-bold text-center">Education</h1>
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white rounded-full transform -translate-x-1/2"></div>
        
        {education.map((education, index) => {
          return (
            <div key={index} className="relative flex items-start mb-8 last:mb-0">
              <div className="w-1/2 pr-8 flex flex-col items-end">
                <p className="text-xl text-white">{education.date2}</p>
                <p className="text-xl text-white">{education.date1}</p>
              </div>

              <div className="w-1/2 pl-8 flex flex-col items-start">
                <h2 className="text-3xl font-bold text-white mb-1">{education.school}</h2>
                <p className="text-xl text-white mb-1">{education.degree}</p>
                <p className="text-xl text-white">{education.location}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EducationSection