"use client";
import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";


export default function EducationCard({ education, open_close = false }) {
  // Start with provided default from open_close prop for server-side rendering
  const [showAllState, setShowAllState] = useState(open_close);
  const [courseworkStates, setCourseworkStates] = useState(
    Array(education.length).fill(open_close)
  );
  const [activitiesStates, setActivitiesStates] = useState(
    Array(education.length).fill(open_close)
  );

  // Track expanded course details
  const [expandedCourses, setExpandedCourses] = useState({});

  // Client-side only: Load from localStorage after mount
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're client-side now
    setIsClient(true);

    // Try to load values from localStorage
    try {
      const savedShowAll = localStorage.getItem("education-show-all");
      if (savedShowAll !== null) {
        setShowAllState(JSON.parse(savedShowAll));
      } else {
        // If nothing in localStorage, use the open_close prop
        setShowAllState(open_close);
      }

      const savedCoursework = localStorage.getItem(
        "education-coursework-states"
      );
      if (savedCoursework !== null) {
        const parsed = JSON.parse(savedCoursework);
        // Handle potential length mismatch
        if (parsed.length === education.length) {
          setCourseworkStates(parsed);
        } else {
          const newArray = Array(education.length).fill(open_close);
          parsed.forEach((val, i) => {
            if (i < education.length) newArray[i] = val;
          });
          setCourseworkStates(newArray);
        }
      } else {
        // If nothing in localStorage, use the open_close prop
        setCourseworkStates(Array(education.length).fill(open_close));
      }

      const savedActivities = localStorage.getItem(
        "education-activities-states"
      );
      if (savedActivities !== null) {
        const parsed = JSON.parse(savedActivities);
        // Handle potential length mismatch
        if (parsed.length === education.length) {
          setActivitiesStates(parsed);
        } else {
          const newArray = Array(education.length).fill(open_close);
          parsed.forEach((val, i) => {
            if (i < education.length) newArray[i] = val;
          });
          setActivitiesStates(newArray);
        }
      } else {
        // If nothing in localStorage, use the open_close prop
        setActivitiesStates(Array(education.length).fill(open_close));
      }

      // Load expanded courses state
      const savedExpandedCourses = localStorage.getItem(
        "education-expanded-courses"
      );
      if (savedExpandedCourses !== null) {
        setExpandedCourses(JSON.parse(savedExpandedCourses));
      }
    } catch (error) {
      console.error("Error loading state from localStorage:", error);
      // Fallback to default values
      setShowAllState(open_close);
      setCourseworkStates(Array(education.length).fill(open_close));
      setActivitiesStates(Array(education.length).fill(open_close));
      setExpandedCourses({});
    }
  }, [education.length, open_close]);

  // Update localStorage when states change, but only after first client render
  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(
          "education-show-all",
          JSON.stringify(showAllState)
        );
      } catch (error) {
        console.error("Error saving showAllState to localStorage:", error);
      }
    }
  }, [showAllState, isClient]);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(
          "education-coursework-states",
          JSON.stringify(courseworkStates)
        );
      } catch (error) {
        console.error("Error saving courseworkStates to localStorage:", error);
      }
    }
  }, [courseworkStates, isClient]);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(
          "education-activities-states",
          JSON.stringify(activitiesStates)
        );
      } catch (error) {
        console.error("Error saving activitiesStates to localStorage:", error);
      }
    }
  }, [activitiesStates, isClient]);

  useEffect(() => {
    if (isClient) {
      try {
        localStorage.setItem(
          "education-expanded-courses",
          JSON.stringify(expandedCourses)
        );
      } catch (error) {
        console.error("Error saving expandedCourses to localStorage:", error);
      }
    }
  }, [expandedCourses, isClient]);

  // Reset to initial state
  useEffect(() => {
    if (isClient) {
      // If open_close prop changes after mount, update all states
      setShowAllState(open_close);
      setCourseworkStates(Array(education.length).fill(open_close));
      setActivitiesStates(Array(education.length).fill(open_close));
    }
  }, [open_close]);

  // Check if all sections are in the same state to update the global toggle
  useEffect(() => {
    if (isClient) {
      // Check if all coursework sections are shown
      const allCourseworkShown = courseworkStates.every(
        (state) => state === true
      );
      // Check if all activities sections are shown
      const allActivitiesShown = activitiesStates.every(
        (state) => state === true
      );

      // If all sections are shown, update global state to "Show All"
      if (allCourseworkShown && allActivitiesShown && !showAllState) {
        setShowAllState(true);
      }
      // If one of the section is hidden, update global state to "Hide All"
      else if (!allCourseworkShown || (!allActivitiesShown && showAllState)) {
        setShowAllState(false);
      }
    }
  }, [courseworkStates, activitiesStates, isClient]);

  // Toggle all sections
  const toggleAll = () => {
    const newState = !showAllState;
    setShowAllState(newState);
    setCourseworkStates(Array(education.length).fill(newState));
    setActivitiesStates(Array(education.length).fill(newState));
  };

  // Toggle individual coursework
  const toggleCoursework = (index) => {
    setCourseworkStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Toggle individual activities
  const toggleActivities = (index) => {
    setActivitiesStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  // Toggle course details
  const toggleCourseDetails = (eduIndex, courseName) => {
    const key = `${eduIndex}-${courseName}`;
    setExpandedCourses((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Check if a course has details to expand
  const hasCourseDetails = (course) => {
    // Check if course details exist in the courseDetails mapping
    return course in courseDetailsMapping;
  };

  // Course details mapping
  const courseDetailsMapping = {
    "Engineering Physics I, II, III": [
      "I: Classical Mechanics and Dynamics",
      "II: Thermodynamics and Electromagnetism",
      "III: Wave Mechanics, Optics, Relativity, and Fluids Dynamics",
    ],
    "Calculus I, II, III": [
      "I: Limits, Derivatives, and Applications",
      "II: Integral Calculus, Sequences and Series",
      "III: Multivariate and Vector Calculus",
    ],
    "C++ and Advanced C++ Programming": [
      "Basics: C++ Fundamentals and OOP Design",
      "Advanced: Desktop Applications, Graphical-User Interface (GUI), and Database Access",
    ],
  };

  return (
    <div className="relative w-full max-w-4xl mt-10 mx-auto">
      {/* Global Toggle Button */}
      <div className="flex justify-center mb-4 w-full sm:w-3/4 mx-auto text-[14px]">
        <button
          onClick={toggleAll}
          className="px-2 py-2 w-40 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors flex items-center justify-center gap-2"
        >
          {showAllState ? "Hide All Sections" : "Show All Sections"}
        </button>
      </div>

      {/* Education Cards*/}
      <div className="relative space-y-4 w-full flex flex-col items-center">
        {education.map((edu, eduIndex) => {
          return (
            <div key={eduIndex} className="relative flex items-center w-full">
              {/* Education Card */}
              <div
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-once
                className="group hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-Jura bg-inherit shadow-md rounded-lg p-4 w-full sm:w-3/4 mx-auto text-[15px] md:text-base border-[1px] border-solid border-slate-800"
              >
                <h3 className="text-xl font-bold text-slate-300 my-1">{edu.organization}</h3>

                {/* {edu.college_and_department && (
                  <div className="text-gray-400 text-base font-semibold my-2 flex items-center gap-2">
                    {edu.college_and_department}
                  </div>
                )} */}
                
                <div className="text-gray-400 text-base font-semibold my-2 flex items-center gap-2">
                  <LuGraduationCap />
                  {edu.time}
                </div>
                <h4 className="text-gray-500 text-[17px] my-1 group-hover:text-green-500">
                  {edu.degree_and_major}
                </h4>

                {edu.field_of_study && (
                  <div className="text-gray-500 text-base my-1 group-hover:text-blue-400">
                    Field of Study: {edu.field_of_study}
                  </div>
                )}

                {edu.minor && (
                  <div className="text-gray-500 text-base my-1 group-hover:text-blue-400">
                    Minor in {edu.minor}
                  </div>
                )}

                {edu.thesis && (
                  <div className="text-gray-500 text-base my-1 group-hover:text-gray-300">
                    Thesis: <a href={edu.thesis[1]} className="">{edu.thesis[0]}</a>
                    <i className="fa fa-external-link ml-2 text-[11px]" aria-hidden="true"></i>
                  </div>
                )}



                {edu.gpa && (
                  <div className="text-gray-400 text-base font-semibold my-2 mb-4">
                    GPA: {edu.gpa}
                  </div>
                )}

                {/* Coursework */}
                {edu.relevant_coursework?.length > 0 && (
                  <>
                    <div className="flex items-start justify-between my-2">
                      <h2>
                        Relevant Coursework
                        {courseworkStates[eduIndex] && <span>:</span>}
                      </h2>
                      <button
                        onClick={() => toggleCoursework(eduIndex)}
                        className="text-sm text-blue-400 hover:underline"
                      >
                        {courseworkStates[eduIndex] ? "Hide" : "Show"}
                      </button>
                    </div>
                    {courseworkStates[eduIndex] && (
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {edu.relevant_coursework.map((course, i) => (
                          <div key={i} className="text-gray-300 text-[14px]">
                            {hasCourseDetails(course) ? (
                              <div className="flex flex-col">
                                <div className="flex items-start">
                                  <span className="mr-2">•</span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleCourseDetails(eduIndex, course);
                                    }}
                                    className="flex items-center text-left hover:text-blue-400 focus:outline-none"
                                  >
                                    {course}
                                    <span className="ml-3 flex items-center justify-center">
                                      {expandedCourses[
                                        `${eduIndex}-${course}`
                                      ] ? (
                                        <FaChevronUp className="inline" size={10}/>
                                      ) : (
                                        <FaChevronDown className="inline" size={10}/>
                                      )}
                                    </span>
                                  </button>
                                </div>
                                {expandedCourses[`${eduIndex}-${course}`] && (
                                  <div className="ml-3 mt-1 flex flex-col space-y-1">
                                    {courseDetailsMapping[course].map(
                                      (detail, j) => (
                                        <div
                                          key={j}
                                          className="flex items-start text-gray-400 text-[13px]"
                                        >
                                          <span className="mr-2">-</span>
                                          {detail}
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-start">
                                <span className="mr-2">•</span>
                                {course}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Activities and Awards */}
                {edu.activities_and_awards?.length > 0 && (
                  <>
                    <div className="flex items-center justify-between my-2">
                      <h2>
                        Activities and Awards
                        {activitiesStates[eduIndex] && <span>:</span>}
                      </h2>
                      <button
                        onClick={() => toggleActivities(eduIndex)}
                        className="text-sm text-blue-400 hover:underline"
                      >
                        {activitiesStates[eduIndex] ? "Hide" : "Show"}
                      </button>
                    </div>
                    {activitiesStates[eduIndex] && (
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
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}