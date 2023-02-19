import { Type } from "@sinclair/typebox";

export const ClientSchema = Type.Object({
  id: Type.String(),
  name: Type.String(),
});
