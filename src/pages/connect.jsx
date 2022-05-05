import React from 'react'
import Layout from '../components/Layout'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    "icon": faTwitter,
    "name": "@Petsterr",
    "url": "https://twitter.com/Petsterr",
  },
  {
    "icon": faGithub,
    "name": "Petster",
    "url": "http://github.com/petster",
  },
  {
    "icon": faLinkedin,
    "name": "Jason T Palmeri",
    "url": "https://linkedin.com/in/jasontpalmeri",
  },
]

const connect = () => {
  const formCheck = () => {
    const inputList = [
        document.getElementById("name"),
        document.getElementById("email"),
        document.getElementById("subject"),
        document.getElementById("message")
    ];
    const inputListErr = [
        document.getElementById("nameerr"),
        document.getElementById("emailerr"),
        document.getElementById("suberr"),
        document.getElementById("meserr")
    ];
    let validInput = {
        0: false,
        1: false,
        2: false,
        3: false
      };

    for(let i = 0; i < inputList.length; i++) {
        if(inputList[i].value === "") {
            inputListErr[i].classList.remove('hidden');
            validInput[i] = false;
        } else {
            if(inputList[i].id==="email") {
              if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputList[i].value)) {
                inputListErr[i].classList.add('hidden');
                validInput[i] = true;
              } else {
                inputListErr[i].classList.remove('hidden');
                validInput[i] = false;
              }
            } else if(inputList[i].id==="message") {
              if(inputList[i].value.length < 25) {
                inputListErr[i].classList.remove('hidden');
                validInput[i] = false;
              } else {
                inputListErr[i].classList.add('hidden');
                validInput[i] = true;
              }
            } else {
              inputListErr[i].classList.add('hidden');
              validInput[i] = true;
            }
        }
    }
    return validInput;
}

const submitForm = (e) => {
    e.preventDefault();
    let check = formCheck();
    if(check[0] === true && check[1] === true && check[2] === true && check[3] === true) {
        emailjs.sendForm('service_8kzfl4q', 'template_73g89ol', '#myForm', 'user_VcIGVN78EA4SviSvY06Ot').then(function(response) {
            Swal.fire({
              icon: 'success',
              title: 'Your Email was Submitted!',
              text: 'I will get back to you soon!'
            });
            document.getElementById("myForm").reset();
         }, function(err) {
            Swal.fire({
              icon: 'warning',
              title: 'Your Email was NOT Submitted!',
              text: 'Please try Again Later!'
            });
            console.log(err);
         });
    } else {
        Swal.fire({
          icon: 'warning',
          title: 'Check Fields!',
          text: 'Make sure all fields are filled out correctly!'
        });
    }
}

  return (
    <Layout title="Jason Palmeri | Connect">
      <section className="flex flex-grow items-center justify-center bg-port sm:p-5">
        <div className="t-bg rounded-md w-full mx-auto p-5">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex-grow">
              <form onChange={formCheck} id="myForm" className="w-full text-black p-3 mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">Your Name</label>
                    <input required className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name" id="name" type="text" placeholder="Your Name"/>
                    <p id="nameerr" className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">Your Email</label>
                    <input required className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" title="please ensure your email follows the 'you@example.com' guideline" name="email" id="email" type="email" placeholder="you@example.com"/>
                    <p id="emailerr" className="text-red-500 text-xs italic hidden">Please fill out this field. <strong>guideline: 'you@example.com'</strong></p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="subject">Subject</label>
                    <input required className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="subject" id="subject" type="text" placeholder="Contacting You For..."/>
                    <p id="suberr" className="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">Message</label>
                    <textarea minLength="25" required rows="4" style={{resize: 'none'}} className="appearance-none block w-full bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" title="please ensure this field contains 25 characters or more" name="message" id="message" type="text" placeholder="Hey, ..."/>
                    <p id="meserr" className="text-red-500 text-xs italic hidden">Please fill out this field. <strong>25 characters minimum</strong></p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end flex-wrap -mx-3 mb-6">
                  <button className="bg-blue-600 rounded-md text-white p-3 text-right hover:bg-blue-900" type="submit" onClick={submitForm}>Submit</button>
                </div>
              </form>
            </div>
            <div className="lg:hidden w-1/2 rounded-md h-1 bg-white mx-auto m-6"></div>
            <div className="flex-grow lg:w-1/12 p-3 mx-auto">
              <p className="hidden lg:block uppercase tracking-wide text-white text-xs font-bold">My Socials</p>
              <div className="flex flex-wrap lg:flex-col">
                {socialLinks.map((da, index) => 
                  <a href={da.url} key={index} target="_blank" rel="noreferrer" className="w-full rounded-md p-4">
                    <div className="flex flex-row rounded-md bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm hover:shadow-xl border-2 border-transparent hover:border-white">
                      <div className="p-2"><FontAwesomeIcon className="fa-2x md:fa-3x text-white hover:drop-shadow-lg" icon={da.icon} /></div>
                      <div className="p-2 uppercase tracking-wid text-white font-bold flex-grow text-center">{da.name}</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export default connect