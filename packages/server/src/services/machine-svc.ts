import { Schema, model } from "mongoose";
import { Instructions } from "../models/instructions";

const MachineSchema = new Schema<Instructions>(
  {
    subtitle: { type: String, required: true, trim: true },
    steps: { type: [String], required: true },
    imageSrc: { type: String }
  },
  { collection: "Machine" }
);

const MachineModel = model<Instructions>(
  "Machine",
  MachineSchema
)

function index(): Promise<Instructions[]> {
  return MachineModel.find();
}

function get(userid: String): Promise<Instructions> {
  return MachineModel.findById( userid )
    .then((doc) => doc as Instructions)
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(json: Instructions): Promise<Instructions> {
  const t = new MachineModel(json);
  return t.save();
}

function update(
  userid: String,
  machine: Instructions
): Promise<Instructions> {
  return MachineModel.findOneAndUpdate({ userid }, machine, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated as Instructions;
  });
}

function remove(userid: String): Promise<void> {
  return MachineModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}


export default { index, get, create, update, remove };