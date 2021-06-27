import {httpError} from "@yehonadav/lambdahttp";
import {statusCode} from "@yehonadav/statuscodes";
import {LambdaEvent} from "../types";

export const getEventPathParameter = (event: LambdaEvent, parameter:string):string => {
  const value:string = event.pathParameters?.[parameter];

  if (value === undefined)
    throw httpError({
      statusCode: statusCode.internalServerError,
      message: `missing path parameter ${parameter}`,
    })

  return value;
}