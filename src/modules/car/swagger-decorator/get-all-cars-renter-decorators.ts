import { applyDecorators } from "@nestjs/common";
import { ApiOperation,  } from "@nestjs/swagger";

export function getAllCarsRenterDecorators(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get all cars by renter ID"
    }),

  );
}
