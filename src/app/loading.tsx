"use client";
import { Flex, Spin } from "antd";

export default function Loading() {
	return (
		<Flex justify={"center"} align={"center"} style={{ height: 500 }}>
			<Spin />
		</Flex>
	);
}
