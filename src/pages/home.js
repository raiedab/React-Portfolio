import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio website!</h1>
      <p>Here is some information about me and my work:</p>
      <ul>
        <li>Experience 1</li>
        <li>Experience 2</li>
        <li>Experience 3</li>
      </ul>
      <p>Check out my <Link to="/about">About Me</Link> page to learn more about me!</p>
    </div>
  );
}

export default Home;
