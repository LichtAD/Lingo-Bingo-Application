import React from 'react';

const SingleLessonCard = ({ lesson }) => {

    // console.log(lesson);

    const { id, word, pronunciation, meaning, part_of_speech, difficulty, lesson_no, when_to_say, example } = lesson;

    const handlePronunciation = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; // Japanese
        window.speechSynthesis.speak(utterance);
    }

    const handleModal = (modalId) => {
        // event.preventDefault();
        document.getElementById(modalId).showModal();
    }

    return (
        <div>
            {/* <h1>Lesson: {lesson.id} {lesson.pronunciation} {lesson.meaning}</h1> */}
            <div className={`card bg-base-100 shadow-xl border-2 h-72 hover:cursor-pointer ${difficulty === 'easy' ? 'border-green-500' : difficulty === 'medium' ? 'border-red-500' : 'border-cold'}`}>
                <div onClick={() => handlePronunciation(word)} className="card-body">
                    <h2 className="card-title">Word: {word}</h2>
                    <p>Meaning: {meaning}</p>
                    <p>Pronunciation: {pronunciation}</p>
                    <p>Part of Speech: {part_of_speech}</p>
                </div>
                <div className='ml-8 mb-8'>
                    <button onClick={() => handleModal(`modal_${id}`)} className='btn btn-outline'>When to Say</button>

                    <dialog id={`modal_${id}`} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Word: {word}</h3>
                            <p className="py-2">Meaning: {meaning}</p>
                            <p className="py-2">When to Say: {when_to_say}</p>
                            <p className="py-2">Example: {example}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

            </div>
        </div>
    );
};

export default SingleLessonCard;