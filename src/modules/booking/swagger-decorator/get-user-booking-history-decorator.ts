import { applyDecorators } from "@nestjs/common";
import { ApiOperation,  } from "@nestjs/swagger";

export function getUserBookingHistoryDecorator(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get a booking history by user ID"
    }),

  );
}
