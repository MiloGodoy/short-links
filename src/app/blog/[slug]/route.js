
import { NextResponse } from 'next/server'

export async function GET( request, context ) {
    console.log(request, context)
    return NextResponse.json({ hello: "World" })
}