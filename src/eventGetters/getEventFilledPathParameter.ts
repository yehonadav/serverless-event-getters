import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";
import {LambdaEvent} from "../types";

export const getEventFilledPathParameter = (event: LambdaEvent, parameter:string):string => {
  const value:string = event.pathParameters?.[parameter];

  // value can't be empty ''
  if (!value)
    throw httpError({
      statusCode: statusCode.internalServerError,
      message: `missing path parameter ${parameter}`,
    })

  return value;
}