import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
    <div className='flex flex-wrap m-6 justify-center gap-3'>

    <img src={data.avatar_url} alt="Git picture" className='h-56' />
    <div className='text-center bg-gray-600 text-white p-4 text-3xl h-56 flex flex-col items-center justify-around'>
      <div>
        Github Username: {data.login}
      </div>
      <div>
        Github followers: {data.followers}
      </div>
    </div>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nandkasar10')
    return response.json()
}