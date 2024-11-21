import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import StaticLessonCard from './StaticLessonCard';
import Tutorial from './Tutorial';

const StartLearning = () => {

    const data = useLoaderData();
    // console.log(data);

    // let total_lesson_no = 0;
    // data.find(lesson => {
    //     if (lesson.lesson_no > total_lesson_no) {
    //         total_lesson_no = total_lesson_no + 1;
    //     }
    // });
    // console.log(total_lesson_no);                 // 13

    return (
        <div className='mb-20'>
            <h1 className='text-3xl font-bold text-center mb-10'>Start Learning</h1>
            <div>
                {/* <h1>Total Lessons: {total_lesson_no}</h1> */}
                <StaticLessonCard></StaticLessonCard>
            </div>
            
            <Tutorial></Tutorial>

            <div className='text-center'>
                <NavLink to="/tutorials" className='btn hover:btn-info'>View More</NavLink>
            </div>

        </div>
    );
};

export default StartLearning;