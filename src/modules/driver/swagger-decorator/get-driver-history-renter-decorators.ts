import { applyDecorators } from "@nestjs/common";
import { ApiOperation,  } from "@nestjs/swagger";

export function getDriverHistoryRenterDecorators(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get  driver history by renter ID and driver Id"
    }),

  );
}
