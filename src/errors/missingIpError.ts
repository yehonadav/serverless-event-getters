import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";

export const missingIpError = httpError({
  statusCode: statusCode.forbidden,
  message: "missing ip address",
});

