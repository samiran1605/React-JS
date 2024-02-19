import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/samiran1605')
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    // }, [])
    return (
        <div className=' flex flex-row gap-3 items-center text-center m-4 bg-gray-800 text-white p-4 text-3xl'>
            <img className='flex rounded-full' src={data.avatar_url} alt='github picture' width={40} />
            Github Followers : {data.followers}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/samiran1605')
    return response.json()
}