import { applyDecorators } from "@nestjs/common";
import { ApiOperation,  } from "@nestjs/swagger";

export function getAllDriversRenterDecorators(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get all drivers by renter ID"
    }),

  );
}
