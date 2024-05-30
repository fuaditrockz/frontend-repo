import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { displayName, email, password } = await req.json();

    const registerResult: any = await fetch(
      "http://localhost:4000/v2/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000",
        },
        body: JSON.stringify({
          displayName,
          email,
          password,
        }),
      }
    );

    const registeredUser: any = await registerResult.json();

    if (!registeredUser.error) {
      cookies().set(
        "currentUser",
        registeredUser.data?.tokenManager.access_token,
        {
          secure: true,
        }
      );
    }

    return NextResponse.json(registeredUser);
  } catch (error: any) {
    return NextResponse.error();
  }
}
