import React, { useState } from 'react';

function Home() {
  const [pageTitle, setPageTitle] = useState("Welcome to my portfolio website!");

  return (
    <div>
      <h1>{pageTitle}</h1>
      <p>Here is some information about me and my work:</p>
      <ul>
        <li>Experience 1</li>
        <li>Experience 2</li>
        <li>Experience 3</li>
      </ul>
    </div>
  );
}

export default Home;
