import React from 'react';
import Navbar from '../Header/Navbar';


const Blog = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className="w-full" h-full>
                <h1 className=" m-20 animate-pulse text-blue-100 text-center text-3xls ">This is my Blog</h1>
                <div className="container m-20 border-t-2">
                    <div className="container text-gray-100 border-t-2 underline decoration-slate-600">
                        <h2>20/12/2021</h2>
                        <h2>JSX</h2>
                    </div>
                    <p className="text-blue-400">
                        In this blog, I am going to tell you about one interesting and important thing. In your react project you see this type of code
                        <pre> <code> &lt;h1&gt;This is my blog &lt;h1&gt;</code></pre>
                        This is actually called JSX. JSX syntax looks a lot like HTML. But neither HTML nor JavaScript's string. Rather, it is a syntax extension of JavaScript. It has been added for the benefit of developers.
                        The main function of JSX is to create an element of React. You can write any JavaScript expression inside JSX.In JSX you can also take attributes like HTML. Reacts with attributes do a different job.
                        You can also take attributes like this:
                        <pre> <code> &lt;h1&gt;Hello World! &lt;/h1&gt;</code></pre>
                        A JSX can contain many more JSX child elements:
                        <pre> <code> &lt;h1&gt;Hello World! &lt;/h1&gt;
                            &lt;span&gt;you? &lt;/span&gt;
                            &lt;span&gt;My age is 21 years old!! &lt;/span&gt;
                        </code></pre>
                    </p>
                </div>
            </div>
            <div>
                <div className="container m-20 border-t-2">
                    <div className="container text-gray-100 border-t-2 underline decoration-slate-600">
                        <h2>28/12/2021</h2>
                        <h2>REACT HOOKS</h2>
                    </div>
                    <p className="text-blue-300">
                        In this blog, I am going to tell you about another interesting and important thing. That is React hooks.
                        <i> React class-based components are messy, confusing, hard for humans and machines. But before React 16.8, class-based components were mandatory for any projects that require states, life-cycle methods, and many other important functionalities. All these changed with the introduction of hooks in React 16.8. Hooks are game-changers. They have simplified React, made it neater, easier to write and debug, and also reduced the learning curve.</i>

                    </p>
                    <p className="text-blue-300">Hooks are simply functions that allow you to <strong> hook into</strong> or <strong> make use of </strong>React features. They were introduced at the React Conf 2018 to address three major problems of class components: wrapper hell, huge components, and confusing classes. Hooks give power to React functional components, making it possible to develop an entire application with it.

                        The aforementioned problems of class components are connected and solving one without the other could introduce further problems. Thankfully, hooks solved all the problems simply and efficiently while creating room for more interesting features in React. Hooks do not replace already existing React concepts and classes, they merely provide an API to access them directly.

                        The React team introduced several hooks in React 16.8. However, you could also use hooks from third-party providers in your application or even create a custom hook. In this tutorial, we’ll take a look at some useful hooks in React and how to use them. We’ll go through several code examples of each hook and also explore how you’d create a custom hook.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;