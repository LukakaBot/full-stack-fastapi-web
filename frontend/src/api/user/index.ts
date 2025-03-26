import request from "@/utils/service";
import type { AccountUserTokenParams, AccountUserTokenResponse } from "./types";


export function fetchAccountUserToken(data: AccountUserTokenParams): Promise<AccountUserTokenResponse> {
  return request.Post("/user/account/token", data);
}