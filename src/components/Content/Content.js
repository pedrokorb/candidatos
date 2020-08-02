import React from "react"

const Content = ({ children }) => {

  return (
    <div className="w-full px-4">
      <div className="max-w-screen-lg shadow-md p-4 md:p-10 bg-white relative mx-auto -mt-24 mb-24">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content
