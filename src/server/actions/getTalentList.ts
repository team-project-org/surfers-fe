"use server";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.remote.dongholab.com");

export default async function getTalentList(
	page: number = 1,
	size: number = 24
) {
	const result = await pb.collection("mockmembers").getList(page, size);
	return result;
}
