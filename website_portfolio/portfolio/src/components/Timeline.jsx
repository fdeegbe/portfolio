import { MdSchool, MdWork } from 'react-icons/md';

const Timeline = () => (
    <div className="w-[80vw] mx-auto my-16" id="education">
        <span className="inline-block px-3 text-white mb-8 ml-8 font-body text-xl md:text-3xl tracking-widest">MY JOURNEY</span>
        <section className="w-full mt-8 rounded bg-transparent px-4 md:px-16">
            <div className="flex flex-col">
                <div className="relative pl-12 md:pl-20">
                    {/* Vertical line */}
                    <div className="absolute left-[72px] md:left-[105px] opacity-[0.5] top-0 bottom-0 w-2 bg-white z-0 rounded"></div>

                    {/* Freddie Mac */}
                    <div className="mb-14 flex items-start relative">
                        <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full shadow-lg ring-4 ring-blue-200 bg-blue-200 text-3xl text-gray-800">
                            <MdWork />
                        </div>
                        <div className="ml-8 flex-1 bg-gray-900 rounded-lg p-8 md:p-12 relative">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-white">
                                    Software Engineer<br />
                                    <span className="text-lg text-gray-400 font-normal">Freddie Mac - Government Sponsored Enterprise</span>
                                </h2>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">Feb 2025 – Present</div>
                                    <div className="text-base text-gray-400 font-normal">McLean, VA</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside mt-3 text-base text-gray-300">
                                <li className="mb-2">
                                    Developed automated tools using Python to accelerate data modernization efforts, streamlining migration of legacy data pipelines to cloud-native architectures.
                                </li>
                                <li className="mb-2">
                                    Designed and implemented automated System Integration Testing (SIT) and User Acceptance Testing (UAT) for key BI applications, reducing manual QA by 70%.
                                </li>
                                <li className="mb-2">
                                    Collaborated between 2 cross-functional teams to refine user stories and acceptance criteria, ensuring clear scope and well-defined technical requirements.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Boeing Intelligence and Analytics */}
                    <div className="mb-14 flex items-start relative">
                        <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full shadow-lg ring-4 ring-green-200 bg-green-200 text-3xl text-gray-800">
                            <MdWork />
                        </div>
                        <div className="ml-8 flex-1 bg-gray-900 rounded-lg p-8 md:p-12 relative">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-white">
                                    Boeing Intelligence and Analytics <span className="font-light text-xl">- Government Contractor</span><br />
                                    <span className="text-lg text-gray-400 font-normal">Software Engineer Intern</span>
                                </h2>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">May 2024 – Aug 2024</div>
                                    <div className="text-base text-gray-400 font-normal">Annapolis, MD</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside mt-3 text-base text-gray-300">
                                <li className="mb-2">
                                    Upgraded a RAG prototype into a ReAct agent, enabling the system to iteratively think and act to solve complex tasks dynamically, which improved task efficiency and problem-solving capabilities.
                                </li>
                                <li className="mb-2">
                                    Developed agent tools using LangChain and integrated them with LLMs from AWS Bedrock, facilitating modularity.
                                </li>
                                <li className="mb-2">
                                    Enhanced the security of the agent through Keycloak, allowing for fine-tuned access control when querying databases.
                                </li>
                            </ul>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-white">
                                    <span className="text-lg text-gray-400 font-normal">Software Engineer Intern</span>
                                </h2>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">Jun 2023 – Aug 2023</div>
                                    <div className="text-base text-gray-400 font-normal">Annapolis, MD</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside mt-3 text-base text-gray-300">
                                <li className="mb-2">
                                    Employed KeyBERT, SpaCy, and NLTK, NLP libraries to create an automatic document tagging application that enhanced internal database querying by embedding metadata, resulting in a 105% improvement in internal efficiency.
                                </li>
                                <li className="mb-2">
                                    Engaged in the design and testing phases of the keyword suggestion function for efficient processing.
                                </li>
                                <li className="mb-2">
                                    Worked on back-end development using SQLAlchemy to collect data metrics for the application.
                                </li>
                                <li className="mb-2">
                                    Performed statistical analysis to enhance user experience by setting commonly used tagging options as default settings.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* University of Maryland */}
                    <div className="mb-14 flex items-start relative">
                        <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full shadow-lg ring-4 ring-red-200 bg-red-200 text-3xl text-gray-800">
                            <MdSchool />
                        </div>
                        <div className="ml-8 flex-1 bg-gray-900 rounded-lg p-8 md:p-12 relative">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-white">
                                    Bachelor of Science in Computer Science<br />
                                    <span className="text-lg text-gray-400 font-normal">University of Maryland</span>
                                    <span className="block text-base text-gray-400 font-normal">GPA: 3.71 | ACES Honors College | CS Undergraduate Honors Program</span>
                                </h2>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">August 2022 – Dec 2024</div>
                                    <div className="text-base text-gray-400 font-normal">College Park, MD</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside mt-3 text-base text-gray-300">
                                <li className="mb-2">
                                    ACES Honors College: 1 of 70 students invited to the most prestigious STEM program for incoming freshmen at UMD
                                </li>
                                <li className="mb-2">
                                    CS Undergraduate Honors Program: Research program for students planning on pursuing higher education
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Projects & Clubs */}
                    <div className="mb-14 flex items-start relative">
                        <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full shadow-lg ring-4 ring-yellow-200 bg-yellow-200 text-3xl text-gray-800">
                            <MdWork />
                        </div>
                        <div className="ml-8 flex-1 bg-gray-900 rounded-lg p-8 md:p-12 relative">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-white">
                                    App Development Club <span className="font-light text-xl">- Children's National Hospital</span><br />
                                    <span className="text-lg text-gray-400 font-normal">Backend Techincal Lead</span>
                                </h2>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">Aug 2024 – Jan 2025</div>
                                    <div className="text-base text-gray-400 font-normal">Washington, D.C</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside mt-3 text-base text-gray-300">
                                <li className="mb-2">
                                    Spearheaded a team of 15 people to develop a full stack Chest X-Ray Analysis Tool, integrating real-time data pipelines for continuous improvement and leveraging MLOps automation to retrain models dynamically.
                                </li>
                                <li className="mb-2">
                                    Successfully integrated a tool with Picture Archiving and Communication Systems (PACS) to streamline medical imaging.
                                </li>
                                <li className="mb-2">
                                    Partnered closely with stakeholders and radiologists to iterate through product cycles, ensuring alignment with user needs.
                                </li>
                            </ul>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-lg text-gray-400 font-normal">Backend Techincal Lead</span>
                                <div className="text-right">
                                    <div className="text-base text-gray-400 font-normal">Jan 2024 – May 2024</div>
                                    <div className="text-base text-gray-400 font-normal">Washington, D.C</div>
                                </div>
                            </div>
                            <ul className="list-disc list-inside  text-base text-gray-300">
                                <li className="mb-2">
                                    Led a team of 15 engineers to develop a ~97% accurate convolutional neural network that estimates a child’s cervical range of motion and a ~70% accurate attentional convolutional neural network that captures a child’s neutral face while ensuring HIPAA-compliant handling of training data.
                                </li>
                                <li className="mb-2">
                                    Designed an application that will impact 11,000+ patients yearly by aiding in the process of diagnosing a spinal cord injury.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
);

export default Timeline;