import guavus from '../img/work_thumb/1.jpg'
import csi from '../img/work_thumb/2.jpg'
import nolo from '../img/work_thumb/3.jpg'
import jsfinal from '../img/work_thumb/4.jpg'
import webtwoh from '../img/work_thumb/5.jpg'
import php from '../img/work_thumb/6.jpg'
import webone from '../img/work_thumb/7.jpg'
import japan from '../img/work_thumb/8.jpg'
import provisio from '../img/work_thumb/provisio.png'
import pgapp from '../img/work_thumb/app.petstergaming.png'
import bellevue from '../img/work_thumb/bellevuework.png'
import { Link } from 'react-router-dom'

export const workData = [
    {
        "title": "Software Development Bachelors Program",
        "desc": `Within this large repository you will find all of my bachelors program work, from Java to JavaScript.
        <br/>
        Every project and assignment can be found in here, easily accessible via the homepage
        <br/>`,
        "img_url": bellevue,
        "url": "https://petster.github.io/jpalmeri-bellevue/"
    },
    {
        "title": "Java Capstone Project - Provisio",
        "desc": `For our Java Capstone project, we were grouped into 3 teams to create a fully functional Online Hotel reservation website/app. I was voted to be the team leader and led the team to a 100% final product.<br/>
        <br/>
        The project was built using with some help from gradle and docker, with front-end components being build with JSP's and Tailwind
        <br/><br/>
        The source code, and all revision history can be seen at <a class='hover:underline text-blue-500' href='https://github.com/Petster/Provisio'>Github</a> and you can download and boot it up on your local machine.
        <br/><br/>
        <strong>Note:</strong> link brings you to the final presentation video
        `,
        "img_url": provisio,
        "url": "https://docs.google.com/presentation/d/1vfTYPYQ3zSm14WaSFn6HGA-hQC9taKNPHFFF__OQ4AA/edit?usp=sharing"
    },
    {
        "title": "My App (MERN Stack)",
        "desc": `During my classwork at Bellevue, I wanted to learn some Javascript stack, so I picked up the MERN stack<br/><br/>

        Over the last 2 years, I've been working on my personal project, to the average person, its just a blank website, but with admin rights its kind of like a notepad/bookmark/reminder app for myself. What I've done here is made it public. Anyone can make an account and use the functions that I've been using for a little while now. <br/><br/>

        The site features:<br/>
        A notepad block, for messages or reminders that you can take anywhere<br/>
        A shortcut system, where you can create links with custom icons (font awesome) and allows for expandable shortcuts<br/>
        A reminder system, add reminders with due dates, in specific categories<br/><br/>

        The site is still super in progress, and as I continue my education I hope to make it an app that is useful to everyone!
        `,
        "img_url": pgapp,
        "url": "https://app.petstergaming.com"
    },
    {
        "title": "Coating Systems Group Website Management",
        "desc": "Tasked with helping keep the WordPress hosted site up to date, as well as providing help with updating the sites content",
        "img_url": csi,
        "url": "http://www.coatingsystemsgroup.com/"
    },
    {
        "title": "Nashua Community College NoLo Finder",
        "desc": `This is my final project at Nashua Community College for the Capstone Web Development Course. The project was to read a CSV file, grab data, and output the important information in CSV format. This project allowed me to take a deeper dive into Javascript and its plugins.

        <strong>NOTE</strong>: You will not be able to fully utilize this project without key CSV files that cannnot be given out.

        View the Code <a class='hover:underline text-blue-500' target='_blank' href="https://bitbucket.org/nolocap/nolocap.bitbucket.io/src/master/" target="_blank">Here</a>`,
        "img_url": nolo,
        "url": "https://nolocap.bitbucket.io/"
    },
    {
        "title": "JavaScript Final",
        "desc": "The goal of the semester was to create a sort of Contact Form that would be validated using JavaScript. This project was different from the PHP form, as instead of having to create what accepts the data, we had to make sure the data was valid in the first place before submitting. Some functions might not work correctly due to server issues",
        "img_url": jsfinal,
        "url": "https://petster.github.io/AJAXform/"
    },
    {
        "title": "WEB200 Biosite Project",
        "desc": "Tasked with creating a biography website, I created this simple 3 page layout using bootstrap, and some custom JavaScript for the hobby page.",
        "img_url": webtwoh,
        "url": "https://petster.github.io/Bellevue/WEB200%20-%20Fundamentals%20of%20Web%20Dev/BioSiteProject/"
    },
    {
        "title": "PHP Final/Semester Work",
        "desc": "While learning PHP the students had a server to play around in, I took a little extra time to make my webpage easy to access the projects. The final for the class was to create a working Contact form, this was also my first peek into mySQL and creating an account like system with the PHP",
        "img_url": php,
        "url": "#"
    },
    {
        "title": "Web Development 2 Final Project",
        "desc": "Collage Web Development 2 Final Project, Basically a draft of a storefront webpage to buy trading card game cards. The project was to create whatever we wanted, and had to have certain aspects, like mobile ready scaling.",
        "img_url": webone,
        "url": "https://petster.github.io/Web2Final/"
    },
    {
        "title": "Guavus Zendesk Customer Success Center (Offline)",
        "desc": "Worked with the Customer Success Team to develop their Zendesk based Web Portal",
        "img_url": guavus,
        "url": "#"
    },
    {
        "title": "My App (LAMP Stack) (Offline)",
        "desc": "My friends and I have been planning on going to Japan for a trip and I created this website for us to be able to share trip ideas and such. The website turned into a really cool pet project of mine and I've built out lots of features for this website that are currently private including: <br> School To-Do List <br> Online Notepad <br> and a few other tools that I use on a daily basis <br><br> you can sign up on the website now and as I learn more web design and development I hope to publish this website for others to use <br><br><strong>NOTE:</strong> the website will be bare unless you have special permission to view features of the site, if you would like to see some of these features please feel free to <a class='hover:underline text-blue-500' href='/connect'>contact</a> me.",
        "img_url": japan,
        "url": "#"
    },
];