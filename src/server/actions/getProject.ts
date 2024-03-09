"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.remote.dongholab.com");

export default async function getNotion(id: string) {
	const result = await pb.collection("example").getList(1, 20, {
		filter: 'status = true && created > "2022-08-01 10:00:00"',
	});
	return result;
}
