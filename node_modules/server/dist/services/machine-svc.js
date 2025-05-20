"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var machine_svc_exports = {};
__export(machine_svc_exports, {
  default: () => machine_svc_default
});
module.exports = __toCommonJS(machine_svc_exports);
var import_mongoose = require("mongoose");
const MachineSchema = new import_mongoose.Schema(
  {
    subtitle: { type: String, required: true, trim: true },
    steps: { type: [String], required: true },
    imageSrc: { type: String }
  },
  { collection: "Machine" }
);
const MachineModel = (0, import_mongoose.model)(
  "Machine",
  MachineSchema
);
function index() {
  return MachineModel.find();
}
function get(userid) {
  return MachineModel.findById(userid).then((doc) => doc).catch((err) => {
    throw `${userid} Not Found`;
  });
}
function create(json) {
  const t = new MachineModel(json);
  return t.save();
}
function update(userid, machine) {
  return MachineModel.findOneAndUpdate({ userid }, machine, {
    new: true
  }).then((updated) => {
    if (!updated) throw `${userid} not updated`;
    else return updated;
  });
}
function remove(userid) {
  return MachineModel.findOneAndDelete({ userid }).then(
    (deleted) => {
      if (!deleted) throw `${userid} not deleted`;
    }
  );
}
var machine_svc_default = { index, get, create, update, remove };
