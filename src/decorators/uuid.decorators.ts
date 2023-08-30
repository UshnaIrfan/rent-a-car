import * as uuid from "uuid";
import { NotFoundException } from "@nestjs/common";

export function validateUuid(id: string): void {
  if (!uuid.validate(id)) {
    throw new NotFoundException('Invalid UUID Format');
  }
}
