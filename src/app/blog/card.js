'use client'

import { useState } from "react"

export default function BlogCard( { title } ){

    const [count, setCount] = useState(1)
    console.log(title) 

    const handleClick = (event) => {
        event.preventDefault()
        setCount(count + 1 )
    }

    if(!title){ return <div>Emty</div>}

    return(
        <div>
            <h1 onClick={ handleClick }>
              { title }
            </h1>
              { count }
        </div>
    )
}