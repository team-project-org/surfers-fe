import Detail from "./detail";
import "./projectDetail.css";
import Notion from "@/app/notion";
import CardView from "@/app/cardview";
import { Divider } from "antd";
import getNotion from "@/server/actions/getNotion";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function Page({ params }: any) {
	const { projectId } = params;
	const notionId = "65f9c48b5a624405b14e7711570e1ab0";
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ['notion', notionId],
		queryFn: async () => {
			const data = await getNotion(notionId)
			return data
		}
	});
	return (
		<CardView>
			<Detail projectId={projectId} />
			<Divider orientation="left">이력서 상세</Divider>
			<HydrationBoundary state={dehydrate(queryClient)}>
				<Notion id={notionId} />
			</HydrationBoundary>
		</CardView>
	);
}
