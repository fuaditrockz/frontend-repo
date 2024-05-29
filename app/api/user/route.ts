import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const accessToken = cookies().get("currentUser")?.value;
    console.log("COOKIES", accessToken);

    const userDataResult: any = await fetch(
      "http://localhost:4000/v2/fetch-user-data",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000",
          Authorization: "Bearer " + accessToken,
        },
        redirect: "follow",
        cache: "force-cache",
      }
    );

    const userData: any = await userDataResult.json();

    console.log("SERVER SIDE", userData);

    return NextResponse.json(userData);
  } catch (error: any) {
    console.log("SERVER ERROR", error);
    return NextResponse.error();
  }
}
