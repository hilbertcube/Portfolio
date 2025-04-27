import { FaMapMarkerAlt } from "react-icons/fa";

export default function EducationCard({ education }) {
  return (
    <div className="relative w-full max-w-4xl mt-10">
      {/* Timeline vertical line */}
      <div className="absolute left-0 w-px h-full bg-gray-700 hidden sm:block"></div>

      {/* Education Cards with Timeline */}
      <div className="relative space-y-4 w-full flex flex-col items-center">
        {education.map((edu, index) => (
          <div key={index} className="relative flex items-center w-full">
            {/* Timeline Circle */}
            <div className="absolute left-0 -translate-x-1/2 transform hidden sm:flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="absolute top-1/2 left-3 -translate-y-1/2 transform w-2 sm:w-10 h-px bg-gray-700"></div>
            </div>

            {/* Education Card */}
            <div
              data-aos="fade-up"
              data-aos-mirror="true"
              className="group hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-Jura bg-inherit shadow-md rounded-lg p-4 w-full sm:w-3/4 mx-auto text-[15px] md:text-base border-[1px] border-solid border-slate-800"
            >
              <h3 className="text-xl font-bold text-slate-300 my-1">
                {edu.organization}
              </h3>
              <div className="text-gray-400 text-base font-semibold my-2">
                {edu.time}
              </div>
              <h4 className="inline-flex items-start gap-2 sm:gap-2 my-1 text-[17px] text-gray-500 group-hover:text-green-500">
                {edu.degree_and_major}
              </h4>
              {edu.gpa !== "" && (
                <div className="text-gray-400 text-base font-semibold my-2">
                  GPA: {edu.gpa}
                </div>
              )}


              {/* Coursework */}
              {edu.relevant_coursework?.length > 0 && (
                <>
                  <h2 className="my-2 mt-4">Relevant Coursework:</h2>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.relevant_coursework.map((relevant_coursework, i) => (
                      <div
                        key={i}
                        className="flex items-start text-gray-300 text-[14px]"
                      >
                        <span className="mr-2">•</span>
                        {relevant_coursework}
                      </div>
                    ))}
                  </div>
                </>
              )}

              {edu.activities_and_awards?.length > 0 && (
                <>
                  <h2 className="my-2 mt-6">Activities and Awards:</h2>
                  <div className="mt-2 flex flex-wrap">
                    {edu.activities_and_awards.map((item, i) => (
                      <div
                        key={i}
                        className="bg-gray-600 text-slate-100 rounded-full px-2 py-[2px] mr-2 mb-2 text-[11px] sm:text-[13px]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
