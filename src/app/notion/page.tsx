import Notion from './notion'
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function Page() {
  async function create() {
    'use server'
    const recordMap = await notion.getPage("65f9c48b5a624405b14e7711570e1ab0");
    return recordMap
  }
  return (
    <Notion call={create} />
  )
}
