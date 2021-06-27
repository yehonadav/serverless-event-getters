import {LambdaEvent} from "../types";
import {invalidJsonError} from "../errors/invalidJsonError";

export const getEventBody = <T=any>(event: LambdaEvent):T => {
  try {
    return JSON.parse(event.body);
  }
  catch (e) {
    throw invalidJsonError
  }
}