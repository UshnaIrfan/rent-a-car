import { applyDecorators, HttpStatus } from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
} from "@nestjs/swagger";

export function updateCarDecorators(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Update a car by car id"
    }),
    ApiParam({
      name: "carId",
      type: String,
      description: "The unique identifier of the driver",
      example: "a9f3ba7c-f537-4dba-bcb2-b0f180c0a7a0"
    }),

  );
}
