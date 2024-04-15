//'use client'


async function getData() {
  const endpoint = "http://abc:3000/api/posts"
  const res = await fetch(endpoint)

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}


export default async function BlogPage() {
  const data = await getData()
  const items = data && data.items ? [...data.items] : []
  console.log(items)
  return (
    <div>
      <h1>Hello World</h1>
      <p>Posts: </p>
      {items && items.map((item, idx) => {
        return <li key={`post-${idx}`}>{item.title}</li>
      })}
    </div>
  )
}

