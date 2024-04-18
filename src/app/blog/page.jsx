//'use client'
import getDomain from "../lib/getDomain"
import BlogCard from "./card"

async function getData() {

  const domain = getDomain()
  const endpoint = `${domain}/api/posts`

  // const res = await fetch(endpoint, {next: {revalidate: 10}})

  const res = await fetch(endpoint, { cache: 'no-store' })

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  if (res.headers.get("content-type") !== "application/json") {
    return {items: []}
  }

  return res.json()
  //return{items: []}
}


export default async function BlogPage() {
  const data = await getData()
  console.log(data)
  const items = data && data.items ? [...data.items] : []
  console.log(items)
  return (
    <div>
      <h1>Hello World</h1>
      <p>Posts: </p>
      {items && items.map((item, idx) => {
        return <BlogCard title={ item.title } key={`post-${idx}`}  />
      })}
    </div>
  )
}

