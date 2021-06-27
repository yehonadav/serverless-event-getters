import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";

export const invalidJsonError = httpError({
  statusCode: statusCode.badRequest,
  message: 'Validation error: Expected valid JSON',
});