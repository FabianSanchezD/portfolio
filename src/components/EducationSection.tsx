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
        "school": "Colegio Científico Cartago",
        "degree": "High School",
        "location": "Costa Rica",
        "date1": "2023",
        "date2": "2024"
    }
]

const EducationSection = () => {
  return (
    <div id="education" className="flex flex-col gap-6 w-full md:items-center">
      <h1 className="text-5xl font-bold text-center">Education</h1>
        
        {education.map((education, index) => {
          return (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:w-1/2 w-full justify-center items-center">
          <div className="flex flex-col gap-1.5 justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-400 text-center">{education.school}  ({education.date1} - {education.date2})</h2>
            <p className="text-gray-300 leading-relaxed">{education.degree}</p>
            <p className="text-gray-300 leading-relaxed">{education.location}</p>
          </div>
        </div>
          )
        })}
      </div>
  )
}

export default EducationSection