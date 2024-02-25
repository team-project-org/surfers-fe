"use server"
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function getNotion(id: string) {
  return await notion.getPage(id);
}