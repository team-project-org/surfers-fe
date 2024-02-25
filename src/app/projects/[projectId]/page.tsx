import Detail from "./detail";
import "./projectDetail.css";
import Notion from "@/app/notion";
import CardView from "@/app/cardview";
import { Divider } from "antd";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import getNotion from "@/server/actions/getNotion";

export default async function Page({ params }: any) {
	const { projectId } = params;
	const notionId = "5c037a4e31ad422985d33a0a156e1ada";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['notion', notionId],
		queryFn: async () => {
			console.log('prefetchQuery')
			const data = await getNotion(notionId)
			return data
		},
	});

	return (
		<CardView>
			<Detail projectId={projectId} />
			<Divider orientation="left">프로젝트 상세</Divider>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Notion id={notionId} />
			</HydrationBoundary>
		</CardView>
	);
}
