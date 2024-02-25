"use client";
import React, { FunctionComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import "react-notion-x/src/styles.css";
import getNotion from "@/server/actions/getNotion";
import { NotionRenderer } from "react-notion-x";
import Loading from "@/app/loading";

interface INotionProps {
	id: string;
}

const Notion: FunctionComponent<INotionProps> = (props) => {
	const { id } = props;
	const { data, error, isFetched, isFetching, isFetchedAfterMount } = useQuery({
		queryKey: ['notion', id],
		queryFn: async () => {
			console.log('useQuery')
			const data = await getNotion(id)
			return data
		},
	});

	console.log('isFetched', isFetched)
	console.log('isFetching', isFetching)
	console.log('isFetchedAfterMount', isFetchedAfterMount)

	if (!isFetched) {
		return <Loading />
	}

	if (error != undefined) {
		return <div>
			<h1>
				{error.name}
			</h1>
			<div>
				{error.message}
			</div>
		</div>
	}

	return (
		<div style={{ width: "100%", maxWidth: 1000 }}>
			{data && (
				<NotionRenderer
					disableHeader // notion 헤더 안보이도록
					recordMap={data}
					fullPage={true} // 전체 페이지 설정
				/>
			)}
		</div>
	);
};

export default Notion;
