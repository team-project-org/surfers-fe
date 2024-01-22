import Detail from "./detail";
import { NotionAPI } from "notion-client";
import "./projectDetail.css";
import Notion from "@/app/notion";
import CardView from "@/app/cardview";
import { Divider } from "antd";

const notion = new NotionAPI();

export default async function Page({ params }: any) {
	const { projectId } = params;
	const recordMap = await getData();
	return (
		<CardView>
			<Detail projectId={projectId} />
			<Divider orientation="left">프로젝트 상세</Divider>
			<Notion recordMap={recordMap} />
		</CardView>
	);
}

export async function getData() {
	const recordMap = await notion.getPage("5c037a4e31ad422985d33a0a156e1ada");
	return recordMap;
}
