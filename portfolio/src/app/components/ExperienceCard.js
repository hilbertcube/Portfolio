import Image from 'next/image';

export default function ExperienceCard({ experiences}) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      
      {/* Timeline vertical line */}
      <div className="absolute left-0 w-[1px] h-full bg-gray-500"></div>

      {/* Experience Cards with Timeline */}
      <div className="relative space-y-8 w-full flex flex-col items-center">
        {experiences.map((job, index) => (
          <div key={index} className="relative flex items-center w-full">
            
            {/* Timeline Circle */}
            <div className="absolute left-0 transform -translate-x-1/2 flex flex-col items-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full border-0"></div>
            </div>
            
            {/* Experience Card */}
            <div data-aos="fade-up" className="group hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-Jura bg-inherit shadow-md rounded-lg p-4 w-[90%] sm:w-3/4 mx-auto text-[15px] md:text-base">
              <span className="text-gray-400 text-base font-semibold">{job.time_frame}</span>
              <h3 className="text-xl font-bold text-slate-300 mt-2">{job.organization}</h3>
              <h4 className="mt-1 text-lg text-gray-500 group-hover:text-green-500">{job.job_title}</h4>
              <p className="mt-2 text-gray-300 pt-3 pb-5 text-justify">{job.description}</p>
              
              {/* Languages and Tools */}
              <div className="mt-2 flex flex-wrap">
                {job.languages_and_tools.map((tool, i) => (
                  <div key={i} className="bg-blue-800 text-slate-100 rounded-full px-3 py-1 mr-2 mb-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
