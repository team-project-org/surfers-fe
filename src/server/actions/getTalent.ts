"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.remote.dongholab.com");

export default async function getTalent(id: string) {
	const result = await pb.collection("mockmembers").getOne(id, {
		// expand: "relField1,relField2.subRelField",
	});
	return result;
}
