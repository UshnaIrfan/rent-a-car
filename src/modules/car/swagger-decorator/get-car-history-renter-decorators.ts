import { applyDecorators } from "@nestjs/common";
import { ApiOperation,  } from "@nestjs/swagger";

export function getCarHistoryRenterDecorators(): PropertyDecorator {
  return applyDecorators(
    ApiOperation({
      summary: "Get  car history by renter ID and car Id"
    }),

  );
}
