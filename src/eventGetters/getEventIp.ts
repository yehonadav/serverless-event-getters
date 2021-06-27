import {LambdaEvent} from "../types";
import {missingIpError} from "../errors/missingIpError";

export const getEventIp = (event:LambdaEvent):string => {
  const ipAddress = event['requestContext']['identity']['sourceIp'];

  if (!ipAddress)
    throw missingIpError;

  return ipAddress;
}