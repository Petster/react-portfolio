import React from 'react'
import Layout from '../components/Layout'
import { workData } from '../data/work'
import WorkCard from '../components/workCard';
import { skillsList } from '../data/skills';
import SkillCard from '../components/SkillCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const portfolio = () => {
  return (
    <Layout title="Jason Palmeri | Work & Skills">
      <div>

        <div className="lg:masonry-2-col xl:masonry-3-col p-2">
          {workData.map((da, index) => 
            <WorkCard key={index} name={da.title} desc={da.desc} url={da.url} img={da.img_url} />
          )}
        </div>
        
        <section className="p-4 text-white rounded-none sm:rounded-md">
        <div className="flex items-center justify-center content-center">
          <div>
            <h1 className="text-4xl">Programming Languages</h1>
          </div>
          <div className="flex-grow"></div>
        </div>
        <hr/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">
            {skillsList['Programming Languages'].map((da, index) => {
              return (<SkillCard bg="bg-red-500 code" name={da.name} key={index}><FontAwesomeIcon className="fa-2x  pr-2" icon={da.icon}></FontAwesomeIcon></SkillCard>)
            })}
        </div>

        <div className="flex items-center justify-center content-center">
          <div>
            <h1 className="text-4xl">Graphic Design/Video Editing</h1>
          </div>
          <div className="flex-grow"></div>
        </div>
        <hr/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">
            {skillsList['Graphic Design/Video Editing'].map((da, index) => {
              return (<SkillCard bg="bg-yellow-500 vp" name={da.name} key={index}><FontAwesomeIcon className="fa-2x  pr-2" icon={da.icon}></FontAwesomeIcon></SkillCard>)
            })}
        </div>
      </section>
      </div>
    </Layout>
  )
}

export default portfolio