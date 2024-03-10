import getProject from "@/server/actions/getProjectList";
import Talents from "./talents";
import { QueryClient } from "@tanstack/react-query";
import getTalentList from "@/server/actions/getTalentList";

export default async function Page() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["talent", 1, 24],
		queryFn: async () => {
			const data = await getTalentList(1);
			return data;
		},
	});

	return <Talents />;
}
