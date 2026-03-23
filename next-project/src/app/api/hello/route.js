import { createHelloMessage, getHelloMessage } from "@/lib/hello";
import { NextResponse } from "next/server";

export async function GET() {
	const data = getHelloMessage();
	return NextResponse.json(data);
}

export async function POST(req) {
	const data = await req.json();

	const { name } = data;

	const { message } = createHelloMessage(name);

	return NextResponse.json(message);
}
