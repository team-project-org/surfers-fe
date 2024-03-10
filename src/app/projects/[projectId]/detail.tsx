"use client";
import React, { FunctionComponent } from "react";
import {
	Descriptions,
	DescriptionsProps,
	Divider,
	Empty,
	Flex,
	Typography,
} from "antd";
import { useQuery } from "@tanstack/react-query";
import getProject from "@/server/actions/getProject";
import Loading from "@/app/loading";
import Notion from "@/app/notion";

const { Title } = Typography;

interface IDetailProps {
	projectId: string;
}

const Detail: FunctionComponent<Partial<IDetailProps>> = ({ projectId }) => {
	const {
		data = {},
		error,
		isFetched,
		isFetching,
		isFetchedAfterMount,
	} = useQuery({
		queryKey: ["project", projectId],
		queryFn: async () => {
			const data = await getProject(projectId!!);
			return data;
		},
	});

	console.log("isFetched", isFetched);
	console.log("isFetching", isFetching);
	console.log("isFetchedAfterMount", isFetchedAfterMount);

	if (!isFetched) {
		return <Loading />;
	}

	if (error != undefined) {
		return (
			<div>
				<h1>{error.name}</h1>
				<div>{error.message}</div>
			</div>
		);
	}

	const { projectName, email, link, image, openChatLink } = data as any;

	const items: DescriptionsProps["items"] = [
		{
			key: "1",
			label: "email",
			children: email,
		},
		{
			key: "2",
			label: "link",
			children: link,
		},
	];

	return (
		<div className="project-detail">
			<Title>{projectName}</Title>
			<Descriptions bordered title="프로젝트 소개" items={items} />
			<Divider orientation="left" style={{ fontWeight: "bold" }}>
				프로젝트 상세
			</Divider>
			<Flex justify={"center"} align={"center"} vertical={true}>
				{link?.split(",").map((link: string) => {
					const url = link.trim();
					console.log("url", url);
					let comp;
					try {
						const { host, pathname } = new URL(url);
						if (host.includes("notion.site")) {
							const pathList = pathname.split("-");
							const notionId = pathList[pathList.length - 1];
							comp = <Notion id={notionId} />;
						} else {
							comp = <iframe src={url} width={1150} height={2000} />;
						}
					} catch (e) {
						comp = <Empty description={"이력서 항목이 존재하지 않습니다"} />;
					}
					return comp;
				})}
			</Flex>
		</div>
	);
};

export default Detail;
