import React from "react"
import cover from "../../../images/fuzz-2.gif"

const ProfileCover = () => {
  return (
    <div className="h-fit w-full md:-mt-28 lg:-mt-32">
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  )
}

export default ProfileCover