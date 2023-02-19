import { Static } from "@sinclair/typebox";
import { ClientSchema } from "../schema/client.schema";

export type TClient = Static<typeof ClientSchema>;
