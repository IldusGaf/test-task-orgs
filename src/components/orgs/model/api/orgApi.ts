import { IOrgResponse } from "../types/OrgTypes";

export interface IFetchOptions {
  body?: unknown;
  method?: "POST" | "GET" | "DELETE";
}

export const fetcher = async ({ body, method }: IFetchOptions) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_BAKEND_HOST}/${process.env.REACT_APP_API_TOKEN}/orgs/`,
      body || method
        ? {
            method,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        : {}
    );
    const json: IOrgResponse = await response.json();
    if (json.status === "ok") {
      return json;
    } else {
      throw new Error(json.status);
    }
  } catch (e: any) {
    throw e.message;
  }
};
