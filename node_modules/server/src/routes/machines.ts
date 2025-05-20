import express, { Request, Response } from "express";
import { Instructions } from "../models/instructions";

import Machines from "../services/machine-svc";

const router = express.Router();

router.get("/", (_, res: Response) => {
  Machines.index()
    .then((list: Instructions[]) => res.json(list))
    .catch((err) => res.status(500).send(err));
});

router.get("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Machines.get(userid)
    .then((machine: Instructions) => res.json(machine))
    .catch((err) => res.status(404).send(err));
});

router.post("/", (req: Request, res: Response) => {
  const newTraveler = req.body;

  Machines.create(newTraveler)
    .then((machine: Instructions) =>
      res.status(201).json(machine)
    )
    .catch((err) => res.status(500).send(err));
});

router.put("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;
  const newTraveler = req.body;

  Machines.update(userid, newTraveler)
    .then((machine: Instructions) => res.json(machine))
    .catch((err) => res.status(404).end());
});

router.delete("/:userid", (req: Request, res: Response) => {
  const { userid } = req.params;

  Machines.remove(userid)
    .then(() => res.status(204).end())
    .catch((err) => res.status(404).send(err));
});

export default router;  //added