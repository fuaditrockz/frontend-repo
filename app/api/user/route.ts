import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const accessToken = cookies().get("currentUser")?.value;
    console.log("COOKIES GET USER DATA", accessToken);

    const userDataResult: any = await fetch(
      "http://localhost:4000/v2/fetch-user-data",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000",
          Authorization: "Bearer " + accessToken,
        },
      }
    );

    const userData: any = await userDataResult.json();

    console.log("SERVER SIDE USER", userData);

    return NextResponse.json(userData);
  } catch (error: any) {
    console.log("SERVER ERROR", error);
    return NextResponse.error();
  }
}
