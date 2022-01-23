import React from 'react';

const About = (props) => {
    return <div className='container text-center'>
        <article>
            <header>
                <h1>About Text Utils</h1>
            </header>
            <section>
                <p class="container">
                    This is my first attempt to create a React Application. This application has tools to convert the entered text based on the desired functions like converting
                    the text to Uppercase, Lowercae, Removing extra spaces & many more.
                    I will be constantly upgrading this web application as I learn more concepts of React during my journery of learning new frontend web technologies.
                    <div className="clearfix"></div>
                    <span className="float-end ">
                    <address className="author">- By <a rel="author" class="url text-decoration-none fn n" href="/author/Deepak-Singh"><strong>Deepak Singh</strong></a></address>
                    on<time pubdate datetime="2022-01-24" title="January 24th, 2022"> 01/24/22</time>
                    </span>
                </p>
            </section>
        </article>
    </div>;
};
export default About;
