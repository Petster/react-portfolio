import guavus from '../img/work_thumb/1.jpg'
import csi from '../img/work_thumb/2.jpg'
import nolo from '../img/work_thumb/3.jpg'
import jsfinal from '../img/work_thumb/4.jpg'
import webtwoh from '../img/work_thumb/5.jpg'
import php from '../img/work_thumb/6.jpg'
import webone from '../img/work_thumb/7.jpg'
import japan from '../img/work_thumb/8.jpg'
import { Link } from 'react-router-dom'

export const workData = [
    {
        "title": "Guavus Zendesk Customer Success Center",
        "desc": "Worked with the Customer Success Team to develop their Zendesk based Web Portal",
        "img_url": guavus,
        "url": "https://guavus.zendesk.com/hc/en-us"
    },
    {
        "title": "Personal Project",
        "desc": "My friends and I have been planning on going to Japan for a trip and I created this website for us to be able to share trip ideas and such. The website turned into a really cool pet project of mine and I've built out lots of features for this website that are currently private including: <br> School To-Do List <br> Online Notepad <br> and a few other things <br><br> you can sign up on the website now and as I learn more web design and development I hope to publish this website for others to use <br><br><strong>NOTE:</strong> the website will be bare unless you have special permission to view features of the site, if you would like to see some of these features please feel free to <a class='hover:underline text-blue-500' href='/connect'>contact</a> me.",
        "img_url": japan,
        "url": "https://japan.petstergaming.com/"
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
        
        View the Code <a href="https://bitbucket.org/nolocap/nolocap.bitbucket.io/src/master/" target="_blank">Here</a>`,
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
        "url": "https://petster.github.io/Bellevue/WEB200/BioSiteProject/"
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
];