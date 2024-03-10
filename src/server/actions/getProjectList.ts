"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.remote.dongholab.com");

export default async function getProjectList(
	page: number = 1,
	size: number = 24
) {
	const result = await pb.collection("mockposts").getList(page, size);
	return result;
}
