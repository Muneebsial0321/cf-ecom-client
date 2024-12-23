import { NextResponse } from "next/server";
export async function GET():any {
const data = {
    "title":"Google",
    "desc":"lorem40",

}
return NextResponse.json(data, { status: 200 });
}