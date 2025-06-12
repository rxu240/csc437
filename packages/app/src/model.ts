// src/model.ts
import { Credential, Instructions } from "../../server/src/models";

export interface Model {
  cred?: Credential;
  instr?: Instructions;
}

export const init: Model = {};
