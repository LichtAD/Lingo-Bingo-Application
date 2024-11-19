import React from 'react';

const AboutSection = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-600 leading-relaxed md:text-2xl md:leading-relaxed">
                        Learning new words can be a tedious task, but with our website, you can easily learn new words and expand your vocabulary. We provide a variety of tools and resources to help you learn new words, including a dictionary, flashcards, and a section for learning new words in context.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed md:text-2xl md:leading-relaxed">
                        Our website is designed to be user-friendly and accessible to everyone, regardless of age or language proficiency. We believe that learning should be fun and engaging, which is why we have included a variety of interactive features, such as games and quizzes, to help you learn new words in an enjoyable way.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;