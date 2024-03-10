import Detail from "./detail";
import "./projectDetail.css";
import CardView from "@/app/cardview";

export default async function Page({ params }: any) {
	const { projectId } = params;

	return (
		<CardView>
			<Detail projectId={projectId} />
		</CardView>
	);
}
