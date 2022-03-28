import React from 'react';
import banner from './../../images/bnner2.jpg'

const Banner = () => {
    const bg = {
        background: `url(${banner})`,
        width: "100%",
        minHeight: "570px",
        backgroundSize: "cover"
    }
    return (
        <div style={bg}>
            <div className='position-absolute top-50 start-50 translate-middle mt-5'>
                <h1 className='text-white fw-bold mb-5'>Online Courses in Technology Studies 2022</h1>
            </div>
            <div className='bg-white w-75 rounded-3 p-3 mx-auto position-absolute top-100 start-50 translate-middle shadow-lg text-justify pt-5'>
                <p>An online course is a good way for students to enhance their skills, boost their knowledge, and build their educational credentials. Because they are offered via the internet, these programs provide students the chance to learn without having to worry about the logistics of attending at a specific time or place.

                    You might be wondering: “What is an online course in technology studies?” This type of class is meant to help students learn all about modern devices and inventions, including how to use them and the principles that underlie their operation. Possible topics might include visual display technology, specific software usage, product design, sound systems, or communications. Students might learn about general topics such as innovation or management, as well as more specific subjects. Programs may touch on multiple types of technology or focus on just one</p>
            </div>
        </div>
    );
};

export default Banner;