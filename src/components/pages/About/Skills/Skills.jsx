import React from "react";
import {GithubContribution} from 'react-github-contributions-component'

const Skills = () => {
  return (

    <div className="rounded-md pl-5 h-40 flex p-4rounded-md">
      <div className="overflow-x-scroll flex-auto self-center">
        <GithubContribution userName="maxmay94" theme="dark"/>
      </div>
    </div>
  )
}

export default Skills;
