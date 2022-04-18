import React from 'react'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout title="Jason Palmeri | About Me">
        <div className="flex flex-grow">
            <div className="t-bg flex-grow p-3 rounded-lg text-white">
              <div id="myface" className="float-right border border-black shadow-2xl bg-black rounded-full h-72 w-72 m-4"></div>
              <p className="text-left leading-loose">
              Hey! My name is Jason Palmeri, I'm 21 years old, I have an Associates Degree in Web Application Development, and am currently enrolled at Bellevue University for the Software Development Bachelors Program. When I was younger I was always fascinated with technology, and with that I took an interest into video games like most people, although unlike some I started on PC, playing the original Call of Duty game on an old IBM laptop. My father always had junk computers in the basement so I enjoyed cracking them open and playing around with the component's, eventually teaching myself how to build a computer. Today I have my custom built PC, with a I7-8700k, RTX FTW3 3080, and 32GB of Ram. Sophomore year of High School I took the entry level HTML course, and was fascinated with what you could do with just some simple text. With the instruction of my teacher Mark Illingworth I was taught simple HTML and CSS, which got me interested in programming. After I took his course I took the initiative and started my dual enrollment at Nashua Community College, where I began my Associates in Web Application Development, while finishing up High School. You can see a list of my current skillset Here. This Itteration of PetsterGaming was built using Gatsby and TailwindCSS. I've redone my portfolio alongside this, trying to get a basic understanding of react and how to create component driven web pages. Take a look at my Portfolio Here. Before I got into Web Development, I, like many others, had a Youtube Channel, uploading a variety of content, from Video Games, to a weekly series I had called "Friday Pickups", which was essentially things I did over the week, and loot I got. For almost 6 years I taught myself how to record, setup lighting, edit, and do many other post production stuff. Again, You can see a list of my current skillset Here. I'm available pretty much everyday! Feel free to contact me Here. You can also add me on Discord! Petster#0012
              </p>
            </div>
        </div>
    </Layout>
  )
}

export default about