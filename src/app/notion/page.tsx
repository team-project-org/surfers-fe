import Notion from "./notion";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export default async function Page() {
	const recordMap = await getData();
	return (
		<div>
			노션 테스트
			<Notion recordMap={recordMap} />
		</div>
	);
}

export async function getData() {
	const recordMap = await notion.getPage("65f9c48b5a624405b14e7711570e1ab0");
	return recordMap;
}
