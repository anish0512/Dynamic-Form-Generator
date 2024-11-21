# Dynamic-Form-Generator
<h1>#Overview</h1>
<p></p>Dynamic Form Generator is a web application that allows users to dynamically generate forms based on a JSON schema. The application supports all major field types, offers live form previews, and allows users to toggle between light and dark modes. Additionally, users can download form data as JSON.</p>
<h1>#Features</h1>
<ul>
  <li>Dynamic form generation from JSON schema.</li>
  <li>Real-time validation and error handling.</li>
  <li>Light and dark mode support.</li>
  <li>Copy and download generated form data as JSON.</li>
  <li>Example JSON schemas for easy integration.</li>
  <li>Minimal setup and Tailwind CSS-based styling.</li>
</ul>
<h1>#Setup Instructions</h1>
<h2>
  Prerequisites
</h2>
<p>
  Before you start, make sure you have the following installed:
</p>
<ul>
  <li>Node.js (v14 or later)</li>
  <li>
    Git
  </li>
</ul>
<h2>
  Steps to Setup:
</h2>
<p>1. Clone the repository:</p>
<p>
  git clone https://github.com/<your-username>/Dynamic-Form-Generator.git
cd Dynamic-Form-Generator
</p>
<p>2. Install Dependencies</p>
<p>npm install</p>
<p>3. Start the development server:</p>
<p>npm run start</p>
<p>4. Open your browser and visit the generated url.</p>
<h2>Usage</h2>
<ul>
  <li>Paste a JSON schema in the JSON Editor section.</li>
   <li>The form will be dynamically generated in the Form Preview section.</li>
   <li>Fill out the form and submit it to see the data logged in the console.</li>
   <li>Toggle between light and dark modes for accessibility.
</li>
</ul>
<h1>#Example Schemas</h1>
<h2>1. Simple Registration Form</h2>
{
  "formTitle": "User Registration",<br>
  "formDescription": "Register a new account",<br>
  "fields": [<br>
    {<br>
      "id": "username",<br>
      "type": "text",<br>
      "label": "Username",<br>
      "required": true,<br>
      "placeholder": "Enter your username"<br>
    },<br>
    {<br>
      "id": "email",<br>
      "type": "email",<br>
      "label": "Email Address",<br>
      "required": true,<br>
      "placeholder": "Enter your email"<br>
    },<br>
    {<br>
      "id": "password",<br>
      "type": "password",<br>
      "label": "Password",<br>
      "required": true,<br>
      "placeholder": "Enter your password"<br>
    }<br>
  ]<br>
}<br>
<h1>2. FEEDBACK FORM</h1>
{<br>
  "formTitle": "Feedback Form",<br>
  "formDescription": "We value your feedback!",<br>
  "fields": [<br>
    {<br>
      "id": "name",<br>
      "type": "text",<br>
      "label": "Your Name",<br>
      "required": true,<br>
      "placeholder": "Enter your name"<br>
    },<br>
    {<br>
      "id": "comments",<br>
      "type": "textarea",<br>
      "label": "Comments",<br>
      "required": false,<br>
      "placeholder": "Share your thoughts..."<br>
    }<br>
  ]<br>
}<br>
