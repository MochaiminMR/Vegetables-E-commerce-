import { NextResponse } from "next/server";

interface ApiResponse {
    status?: ResponseInit['status'];
    message?: string;
    data?: any;
}

export const Response = ({ message = "Succes", data, status = 200 }: ApiResponse) => {
  return NextResponse.json({ message, data }, { status: status });
};

