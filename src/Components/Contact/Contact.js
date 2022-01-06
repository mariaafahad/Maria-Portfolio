import { send } from 'emailjs-com';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        const notify = () => toast("Your message sent successfully!");

        send(
            'service_510etri',
            'template_ofoyj1r',
            toSend,
            'user_zdPS1RNHrfC6nbgYlNQDG'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                notify();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        e.preventDefault();

    };



    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div data-aos="zoom-in" id="contact" className="bg-gray-100">
            <h2 className="text-green-900  sm:text-4xl text-3xl mb-1 font-medium title-font my-36 underline">
                Contact Me
            </h2>
            <section className="container md-container sm-container px-5 pt-6 pb-8 mx-auto">
                <div className=" px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap border rounded-2xl">

                    <form onSubmit={onSubmit}
                        netlify
                        name="contact"
                        className="lg:w-full md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <p className="leading-relaxed mb-5 text-green-900 text-center">
                            If you have any questions or queries I will always happy to help you.Feel free to contact me by email.
                        </p>
                        <div className="relative mb-4">

                            <input
                                type="text"
                                name='from_name'
                                placeholder='Your Name'
                                value={toSend.from_name}
                                onChange={handleChange}
                                className="w-full bg-gray-400 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className=" mb-4">

                            <input
                                type="email"
                                name='reply_to'
                                placeholder='Your email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                className="w-full bg-gray-400 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">

                            <textarea
                                name='message'
                                placeholder='Your message'
                                value={toSend.message}
                                onChange={handleChange}
                                className="w-full bg-gray-400 rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                        <script src="https://www.100forms.com/js/FORMKEY:LNENXACFN7UP/SEND:mariaafahad@gmail.com" type="text/javascript"></script>
                    </form>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Contact;