import Detail from "./detail";
import "./projectDetail.css";
import CardView from "@/app/cardview";

export default async function Page({ params }: any) {
	const { talentId } = params;
	return (
		<CardView>
			<Detail talentId={talentId} />
		</CardView>
	);
}
