import React from 'react'; // Import React (needed to use JSX)
import ReactDOM from 'react-dom/client'; // Import ReactDOM to render the app in the browser
import App from './App'; // Import the main App component
import './App.css'; // Import global CSS styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root container tied to the <div id="root"> in index.html
root.render(<App />); // Render the App component inside that root container
