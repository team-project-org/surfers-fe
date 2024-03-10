"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.remote.dongholab.com");

export default async function getProject(id: string) {
	const result = await pb.collection("mockposts").getOne(id, {
		// expand: "relField1,relField2.subRelField",
	});
	return result;
}
