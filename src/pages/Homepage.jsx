import React, { useRef, useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Sidenavbar from '../components/Sidenavbar';
import Stats from '../components/Stats';
import Detection from '../components/Detection';
import Architecture from '../components/Architecture';
import { Menu,X} from 'lucide-react';

function Homepage() {
    const sectionsRef = useRef({}); // A dictionary to store refs for each section
    const [activeSection, setActiveSection] = useState('Highlights');
    const [scrollingUp, setScrollingUp] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const sections = ['Highlights', 'Architecture', 'Detection', 'Stats'];

    // Function to scroll to a section when clicked in the sidebar
    const scrollToSection = (section) => {
        const element = sectionsRef.current[section];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // IntersectionObserver to track which section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute('data-section'));
                    }
                });
            },
            { threshold: 0.4 } // Trigger when 60% of the section is visible
        );

        Object.values(sectionsRef.current).forEach((section) => {
            if (section instanceof Element) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Scroll event listener to track scroll direction
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollingUp(false); // Scrolling Down
            } else {
                setScrollingUp(true); // Scrolling Up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div>
                <section className="fixed top-0 left-0 right-0 z-[100] bg-black">
                    <div className="flex items-center justify-between pl-6 pr-6 navbar-container">
                        {/* Logo Section */}
                        <div className="logo-wrapper">
                            <img src="./img/logo.png" className="m-4 ml-0 h-14" alt="Logo" />
                        </div>
                        {/* Action Button Section */}
                        <div className="action-wrapper pt-[18px] sm:pt-0">
                            <div className="flex items-center justify-center gap-4 sm:hidden">
                                {['XRAY', 'CT Inprogress', 'MRI Inprogress'].map((text, index) => {
                                    // Check if the text includes "Inprogress"
                                    const isInprogress = text.includes('Inprogress');
                                    const mainText = isInprogress ? text.replace(' Inprogress', '') : text;

                                    return (
                                        <div
                                            key={index}
                                            className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                                        >
                                            <button className="relative px-5 py-1 text-sm font-bold tracking-wider text-center text-gray-400 bg-black rounded-full" disabled>
                                                {mainText}
                                                {isInprogress && (
                                                    <span className="block text-xs font-normal text-gray-400">
                                                        (In-progress)
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    );
                                })}


                            </div>

                            <div className="relative md:hidden">
                                {/* Hamburger Button */}
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                                >
                                    {isOpen ? (
                                        <X size={24} className='text-white' />
                                    ) : (
                                        <Menu size={24} className='text-white' />
                                    )}
                                </button>

                                {/* Menu Content */}
                                {isOpen && (
                                    <div className="absolute right-0 z-50 w-64 p-4 mt-2 bg-black rounded-lg shadow-lg">
                                        <div className="flex flex-col gap-4">
                                            {['XRAY', 'CT Inprogress', 'MRI Inprogress'].map((text, index) => {
                                                const isInprogress = text.includes('Inprogress');
                                                const mainText = isInprogress ? text.replace(' Inprogress', '') : text;

                                                return (
                                                    <div
                                                        key={index}
                                                        className="relative inline-block p-[1px] rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                                                    >
                                                        <button
                                                            className="relative w-full px-5 py-1 text-sm font-bold tracking-wider text-center text-gray-400 bg-black rounded-full"
                                                            disabled
                                                        >
                                                            {mainText}
                                                            {isInprogress && (
                                                                <span className="block text-xs font-normal text-gray-400">
                                                                    (In-progress)
                                                                </span>
                                                            )}
                                                        </button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

                <div className="pl-6 pr-6 bg-black pt-36 hero-section">
                    <div className="flex items-center gap-12 mx-auto sm:flex-col lg:flex-row">
                        {/* Text Content - Left Side */}
                        <div className="flex-1">
                            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                                <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">Autonomous AI System</span>
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">for Multi-Pathology</span>
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">Detection in Chest</span>
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">X-Rays</span>
                            </h1>

                            <p className="mt-6 text-lg text-gray-400 md:text-xl">
                                A Multi-Site Study in Indian Healthcare Systems
                            </p>
                        </div>

                        {/* Image - Right Side */}
                        <div className="flex-1 w-full lg:w-1/2">
                            <div className="overflow-hidden bg-gray-800 rounded-lg aspect-video">
                                <img
                                    src="./img/hero.png"
                                    alt="Medical AI visualization"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <div
                    className="fixed left-0 z-20 w-64 transform -translate-y-1/2 bg-black top-1/2 sm:hidden"
                >
                    <Sidenavbar
                        activeSection={activeSection}
                        setActiveSection={scrollToSection}
                        sections={sections}
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 ml-64 sm:ml-0">
                    {sections.map((section) => (
                        <div
                            key={section}
                            data-section={section}
                            ref={(el) => (sectionsRef.current[section] = el)}
                            className="p-6 mb-28 sm:p-0 sm:mb-10"
                        >
                            {section === 'Highlights' && <Cards />}
                            {section === 'Architecture' && <Architecture />}
                            {section === 'Detection' && <Detection />}
                            {section === 'Stats' && <Stats />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Homepage;
