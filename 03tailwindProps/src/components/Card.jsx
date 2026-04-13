import React from 'react'

// function card(props) {
function card({username,ptext="Hi Tanvi"}) {
    // console.log(props.username); 
    // instead of props.username -> we can just directlly pass props as {username} in function Parameter
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
          <p className="text-gray-400">
            {ptext}
            {/* {ptext || "Hi Tanvi"}   */}
            {/* If no props passed print "Hi Tanvi"  -> but this method have less readability , therefore set default value in function parameters only*/} 
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default card
