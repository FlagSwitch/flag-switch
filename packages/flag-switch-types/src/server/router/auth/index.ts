import { serverGlobalPrefix } from "..";

export const auth = "auth";
export const authRoute = `${serverGlobalPrefix}/${auth}`;

export * as email from "./email";
export * as forgot from "./forgot";
export * as reset from "./reset";
