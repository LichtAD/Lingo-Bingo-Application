import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import SingleLessonCard from './SingleLessonCard';
import Marquee from "react-fast-marquee";

const LessonDetailsCard = () => {

    const { lessonId } = useParams();
    // console.log(lessonId);

    const data = useLoaderData();

    // data.find(lesson => console.log(parseInt(lesson.id.slice(-2))));

    // const lessonArr = data.filter(lesson => parseInt(lesson.id.slice(-2)) === parseInt(lessonId));
    const lessonArr = data.filter(lesson => lesson.lesson_no === parseInt(lessonId));
    console.log(lessonArr);

    return (
        <div className='mb-20'>
            <h1 className='text-3xl font-bold text-center mb-10'>Lesson No: {lessonId}</h1>

            <div class=" flex gap-5 items-center text-gray-600 bg-red-100 py-2 mb-10">
                <span class="ml-4 bg-red-500 text-white px-2 py-2 my-2 w-40"> Important Note:</span>
                <Marquee pauseOnHover={true} speed={50} direction="left">
                    <p>If This Dont work then Goto your PC Setting {'>'} Language and Download Japanese Speech. Then It will work perfectly</p>
                </Marquee>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    lessonArr.map(lesson => <SingleLessonCard key={lesson.id} lesson={lesson}></SingleLessonCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <NavLink to={'/learning'} className='btn bg-cold border-black hover:bg-cold/90 hover:shadow-md hover:border-none transition duration-150'>Back to Lesson</NavLink>
            </div>
        </div>
    );
};

export default LessonDetailsCard;