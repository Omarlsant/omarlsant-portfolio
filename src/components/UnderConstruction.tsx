import React from 'react';
import { Link } from 'react-router-dom';
import constructionImage from '/under.png';

const UnderConstruction: React.FC = () => {
    return (
        <section className="flex items-center justify-center min-h-screen p-4">
            <div className="text-center">
                <img
                    src={constructionImage}
                    alt="Website Under Construction - We are currently working on this page"
                    className="max-w-2xl w-150 h-150 rounded-2xl shadow-xl shadow-gray-300 -mx-auto mb-8"
                />

                <div className="mt-8">
                    <Link to="/" className="inline-block px-8 py-3 text-gray-100 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 font-semibold shadow-md">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default UnderConstruction;