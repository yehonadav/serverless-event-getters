import cookie from 'cookie';
import {getEventHeader} from "./getEventHeader";
import {LambdaEvent} from "../types";
import {missingCookiesError} from "../errors/missingCookiesError";
import {missingCookieError} from "../errors/missingCookieError";

export const getEventCookies = (event: LambdaEvent): { [key: string]: string } => {
  const cookies = getEventHeader(event, "Cookie");

  if (cookies === undefined)
    throw missingCookiesError;

  return cookie.parse(cookies);
}

export const getEventCookie = (event: LambdaEvent, cookie: string): string => {
  const cookies = getEventCookies(event);

  if (cookies[cookie] === undefined)
    throw missingCookieError(cookie);

  return cookies[cookie];
}