import { writeFile, readFile } from "fs/promises";

async function writeDb(title: string) {
  const data = await readFile("./src/db/history.txt", { encoding: "utf-8" });

  await writeFile("./src/db/history.txt", `${data}\n${title}`);
}

export { writeDb };
