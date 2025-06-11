import express, { Request, Response } from "express";
import { connect } from "./services/mongo";
import Instructions from "./services/machine-svc"
import machines from "./routes/machines";
import auth, {authenticateUser} from "./routes/auth";

import fs from "node:fs/promises";
import path from "path";

connect("rxu240");

const app = express();
const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC || "../app/dist";

app.use(express.static(staticDir));

app.use(express.json());
app.use("/api/machines", authenticateUser, machines);
app.use("/auth", auth);

// app.get("/hello", (req: Request, res: Response) => {
//     const {userid} = req.params;
    
//     Instructions.get(userid).then((data) => {
//       if (data) res
//       .set("Content-Type", "application/json")
//       .send(JSON.stringify(data));
//       else res
//         .status(404).send();
//     });
// });

// Serve index.html for the root path
app.get("/", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  ).catch(() => res.status(404).send("index.html not found"));
});

app.use("/app", (req: Request, res: Response) => {
  const indexHtml = path.resolve(staticDir, "index.html");
  fs.readFile(indexHtml, { encoding: "utf8" }).then((html) =>
    res.send(html)
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

