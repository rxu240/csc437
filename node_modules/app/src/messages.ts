// app/src/messages.ts
import { Credential } from "../../server/src/models";

export type Msg =
  | ["profile/save", { userid: string; profile: Credential }]
  | ["profile/select", { userid: string }]
  | ["machine/select", { machineid: string }];