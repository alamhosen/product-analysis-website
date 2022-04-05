import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>What is Context API?</h2>
            <p>React Context API is a way for React app to effectively produce global variables. Context API is the alternative to "prop drilling" from grandparent to a child to parent, and so on. In React application data is passed top to down (parent to child) via props but if we use context API, we can pass data from parent to child easily. Context provides a way to share values between components without passing the values by props through every level of the tree.</p>
            
            <h2>What are semantic tags?</h2>
            <p>Semantic tags clearly describe the purpose of the HTML element. It also defines the type of content that the element should contain. For example, &lt;header&gt; &lt;footer&gt;, &lt;section&gt;, &lt;aside&gt; are semantic tag, they are clearly describe their purpose and which type of content they will contain. Semantic tags help search engines to understand the website and find the correct information. In this way, semantic tags help search engines correctly index pages.</p>
        </div>
    );
};

export default Blogs;