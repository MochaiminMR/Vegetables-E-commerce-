import { Response } from "@/lib/apiResponse";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";
export function GET(request: Request, params: Params) {
    const id = params.params.id
    return Response({
        message:'Success Get All Data',
        data: [
          {
            id,
            name: "Rizky",
          }],

        status: 200
    }

)
}
    