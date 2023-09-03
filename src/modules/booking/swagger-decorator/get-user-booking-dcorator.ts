import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiParam, } from "@nestjs/swagger";

export function getUserBookingDcorator(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get a booking data by user ID"
    }),
    ApiParam({
      name: "userId",
      type: String,
      description: "The unique identifier of the user",
      example: "a43d3709-7db9-464b-82f6-e5c71a29288e"
    }),
  );
}
