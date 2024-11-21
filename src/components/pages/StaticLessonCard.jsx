import React from 'react';
import { NavLink } from 'react-router-dom';

const StaticLessonCard = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {/* card-1 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/1'} className="text-center font-bold text-2xl">Text Lesson-1</NavLink>
                </div>
            </div>

            {/* card-2 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/2'} className="text-center font-bold text-2xl">Text Lesson-2</NavLink>
                </div>
            </div>

            {/* card-3 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/3'} className="text-center font-bold text-2xl">Text Lesson-3</NavLink>
                </div>
            </div>

            {/* card-4 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/4'} className="text-center font-bold text-2xl">Text Lesson-4</NavLink>
                </div>
            </div>

            {/* card-5 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/5'} className="text-center font-bold text-2xl">Text Lesson-5</NavLink>
                </div>
            </div>

            {/* card-6 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/6'} className="text-center font-bold text-2xl">Text Lesson-6</NavLink>
                </div>
            </div>

            {/* card-7 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/7'} className="text-center font-bold text-2xl">Text Lesson-7</NavLink>
                </div>
            </div>

            {/* card-8 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/8'} className="text-center font-bold text-2xl">Text Lesson-8</NavLink>
                </div>
            </div>

            {/* card-9 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/9'} className="text-center font-bold text-2xl">Text Lesson-9</NavLink>
                </div>
            </div>

            {/* card-10 */}
            <div className="card bg-btn_bg shadow-xl hover:cursor-pointer">
                <div className="card-body">
                    <NavLink to={'/learning/10'} className="text-center font-bold text-2xl">Text Lesson-10</NavLink>
                </div>
            </div>
        </div>
    );
};

export default StaticLessonCard;
