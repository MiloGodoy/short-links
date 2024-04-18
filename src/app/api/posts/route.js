import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({ items: [
        {id: 1, title:"hello world" },
        {id: 2, title:"hello again" },
        {id: 3, title:"hello bus" },
    ]})

}



// export async function POST() {
//     return NextResponse.json({ hello: "abc"})
// }