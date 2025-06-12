// app/src/update.ts
import { Auth, Update } from "@calpoly/mustang";
import { Msg } from "./messages";
import { Model } from "./model";
import {MachineElement as Machine} from "./components/machine";

export default function update(
  message: Msg,
  apply: Update.ApplyMap<Model>,
  user: Auth.User
) {
  switch (message[0]) {
    case "profile/select":
      loadProfile(message[1], user)
        .then((profile) =>
          apply((model) =>
            ({ ...model, profile })
          )
        );
      break;
    case "machine/select":
      loadMachine(message[1], user)
        .then((machine) =>
          apply((model) =>
            ({ ...model, machine })
          )
        );
      break;
    default:
      throw new Error(`Unhandled Auth message "${unhandled}"`);
  }
}

function loadProfile(
  payload: { userid: string },
  user: Auth.User
) {
  return fetch(`/api/machines/${payload.userid}`, {
    headers: Auth.headers(user)
  })
    .then((response: Response) => {
      if (response.status === 200) {
        return response.json();
      }
      return undefined;
    })
    .then((json: unknown) => {
      if (json) {
        console.log("Profile:", json);
        return json as Credential; //idk if Traveler = Credential
      }
    });
}

function loadMachine(
  payload: { machineid: string },
  user: Auth.User
): Promise<Machine|undefined> {
  const src = `/api/machines/${payload.machineid}`;

  return fetch(src, {
    headers: Auth.headers(user)
  })
    .then((res: Response) => {
      if (res.status === 200) return res.json();
    })
    .then((json: object) => {
      if (json) {
        console.log("Machine:", json);
        // let machine: Machine = convertStartEndDates<Tour>(json);
        // machine.destinations = machine.destinations.map(
        //   convertStartEndDates<Destination>
        // );
        return json as Machine;
      }
    })
}
