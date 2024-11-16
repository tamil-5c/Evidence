import React from 'react';

const Sidenavbar = ({ activeSection, setActiveSection }) => {
    const sections = [
        { name: 'Highlights', color: 'text-red-500' },
        { name: 'Architecture', color: 'text-red-500' },
        { name: 'Detection', color: 'text-red-500' },
        { name: 'Stats', color: 'text-red-500' },
    ];

    return (
        <div className="p-6 pt-0">
            <nav className="w-64">
                <ul className="space-y-4">
                    {sections.map((section) => (
                        <li key={section.name}>
                            <button
                                onClick={() => setActiveSection(section.name)}
                                className={`
                                    w-full px-4 py-2 text-left transition-all duration-300 rounded
                                    ${activeSection === section.name
                                        ? 'text-xl font-bold'
                                        : 'text-gray-400 hover:text-white text-base hover:bg-gray-800'
                                    }
                                `}
                            >
                                {activeSection === section.name ? (
                                    <span className="font-bold text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#9381FF] to-[#4DA8FF] bg-clip-text">
                                        {section.name}
                                    </span>
                                ) : (
                                    section.name
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidenavbar;
