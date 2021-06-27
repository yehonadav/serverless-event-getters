import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";

export const missingCookiesError = httpError({
  statusCode: statusCode.forbidden,
  message: "missing cookies"
});