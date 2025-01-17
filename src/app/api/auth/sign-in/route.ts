import { Response } from "@/lib/apiResponse";
import { prisma } from "@/lib/prisma";
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    const data = user ? user : null;


    return Response({
      message: "Success Get User Data",
      data,
      status: 200,
    });
  } catch (error) {
    return Response({
      message: "Error Get Data",
      data: null,
      status: 500,
    });
  }
}
