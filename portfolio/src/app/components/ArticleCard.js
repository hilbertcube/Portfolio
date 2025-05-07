import Image from 'next/image';

export default function ArticleCard({ info }) {
  return (
    <a 
      className="group w-full max-w-3xl mx-auto hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-Jura flex flex-col-reverse md:flex-row bg-inherit shadow-md rounded-lg p-4 mb-4 text-[15px] md:text-base gap-3" 
      href={info.link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {/* Left Column: Image Frame */}
      <div className="md:w-1/3 md:pr-3 flex items-start">
        <img 
          src={info.image} 
          alt="Image" 
          className="w-full max-w-full h-auto object-contain rounded border-gray-100 mt-2 sm:mt-0"
          loading="lazy"
        />
      </div>

      {/* Right Column: Information */}
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold text-slate-300">
          {info.title}
          {info.link && (
            <i 
              className="fa fa-external-link ml-2 text-sm group-hover:-translate-y-0.5 transition-transform duration-200" 
              aria-hidden="true"
            ></i>
          )}
        </h3>
        <span className="text-gray-400 text-base font-semibold pt-2 my-2">{info.date}</span>
        <h4 className="mt-1 text-lg text-gray-500 group-hover:text-green-500">{info.topic}</h4>
        <p className="mt-2 text-gray-300 pt-3 text-justify">{info.description}</p>
      </div>
    </a>
  );
}
