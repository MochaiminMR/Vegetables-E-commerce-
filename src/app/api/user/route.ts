import { Response } from "@/lib/apiResponse";
import { NextResponse } from "next/server";

export function GET() {
  const response = {
    success: true,
    message: "Success Get All Data",
    data: [
      { id: 1, name: "Rizky" },
      { id: 2, name: "Budi" },
    ],
  };

  const status = {
    status: 200,
  };

  // Gabungkan objek-objek tersebut saat memanggil Response
  return Response({
    ...response,
    ...status,
  });
}
export function POST() {
 const request = {
     succes: true,
     message: "Succes Add New User",
     data: {
         id: 3,
         name: "Joko"
     }
 }

 const status = {
     status: 200
 }

 return Response({
     ...request,
     ...status
 })


}
