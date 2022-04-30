import * as React from "react"

const SkillCard = ({ name, children, bg }) => {

  let classNames = ['gitem justify-center items-center content-center border-white border rounded-md p-5 bg-opacity-75 backdrop-filter backdrop-blur-sm text-white text-center sm:text-left flex', bg].join(' ');

  return (
    <div className={classNames}>
      <div>
        {children}
      </div>
      <div className="flex-grow">
        <h1 className="object-fill font-bold">{name}</h1>
      </div>
    </div>
  )
}

export default SkillCard