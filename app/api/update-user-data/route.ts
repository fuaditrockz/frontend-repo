import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { full_name } = await req.json();

    const accessToken = cookies().get("currentUser")?.value;

    const userDataResult: any = await fetch(
      "http://localhost:4000/v2/update-user-data",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4000",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify({
          full_name,
        }),
      }
    );

    const userData: any = await userDataResult.json();

    return NextResponse.json(userData);
  } catch (error: any) {
    console.log("SERVER ERROR", error);
    return NextResponse.error();
  }
}
