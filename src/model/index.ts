import { API_URL } from "../constants";
import { writeDb } from "../utils/fs";

async function getAllData(title: string) {
  console.log(5);

  const response = await fetch(API_URL + title);
  const movies = await response.json();
  console.log(8);

  return movies;
}

async function getTitle(title: any) {
  console.log(4);
  writeDb(title);
  const movies = getAllData(title);
  console.log(6);

  return movies;
}

export { getTitle };
