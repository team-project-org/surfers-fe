import Projects from "./projects";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import getProject from "@/server/actions/getProjectList";

export default async function Page() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["project", 1, 24],
		queryFn: async () => {
			const data = await getProject(1);
			return data;
		},
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Projects />
		</HydrationBoundary>
	);
}
