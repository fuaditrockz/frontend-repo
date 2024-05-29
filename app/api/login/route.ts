import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();

    const loginResult: any = await fetch("http://localhost:4000/v2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:4000",
      },
      redirect: "follow",
      cache: "force-cache",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const loggedUser: any = await loginResult.json();

    console.log("SERVER SIDE", loggedUser);

    if (loggedUser.code === 200) {
      cookies().set("currentUser", loggedUser.data?.tokenManager.access_token, {
        secure: true,
      });
    }

    return NextResponse.json(loggedUser);
  } catch (error: any) {
    return NextResponse.error();
  }
}
