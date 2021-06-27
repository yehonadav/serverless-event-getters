import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";

export const missingCookieError = (cookie:string) => httpError({
  statusCode: statusCode.forbidden,
  message: `missing cookie ${cookie}`
});