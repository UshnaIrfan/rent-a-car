import { applyDecorators } from "@nestjs/common";
import { ApiOperation, ApiParam, } from "@nestjs/swagger";

export function SwaggerGetDriver(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get a driver by ID"
    }),
    ApiParam({
      name: "driverId",
      type: String,
      description: "The unique identifier of the driver",
      example: "a9f3ba7c-f537-4dba-bcb2-b0f180c0a7a0"
    }),
  );
}
