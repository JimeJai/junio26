import { getTitle } from "./model/index";
console.log(1);

async function main(title: string) {
  console.log(3);

  const getTitles = await getTitle(title);

  return getTitles;
}
console.log(2);

main("war").then((res) => res);
console.log(7);
