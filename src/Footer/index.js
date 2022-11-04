import React from 'react'
import "./../App.css"
import zuri from "./../images/zuri.png";
import i4g from "./../images/I4G.png";
const index = () => {
  return (
    <div>
      <footer>
        <div>
          <img src={zuri} alt="zuri logo" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={i4g} alt="I4G logo" />
        </div>
      </footer>
    </div>
  )
}

export default index
