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
import getTalent from "@/server/actions/getTalent";
import Notion from "@/app/notion";
import Loading from "@/app/loading";

const { Title } = Typography;

interface IDetailProps {
	talentId: string;
}

const items: DescriptionsProps["items"] = [
	{
		key: "1",
		label: "description",
		children: (
			<>
				Data disk type: MongoDB
				<br />
				Database version: 3.4
				<br />
				Package: dds.mongo.mid
				<br />
				Storage space: 10 GB
				<br />
				Replication factor: 3
				<br />
				Region: East China 1
				<br />
			</>
		),
	},
];

const Detail: FunctionComponent<Partial<IDetailProps>> = ({ talentId }) => {
	const {
		data = {},
		error,
		isFetched,
		isFetching,
		isFetchedAfterMount,
	} = useQuery({
		queryKey: ["talent", talentId],
		queryFn: async () => {
			const data = await getTalent(talentId!!);
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

	const { name, email, job, portfolioLinkPlainText, profileImageUrl } =
		data as any;

	const items: DescriptionsProps["items"] = [
		{
			key: "1",
			label: "email",
			children: email,
		},
		{
			key: "2",
			label: "job",
			children: job,
		},
	];

	return (
		<div className="project-detail">
			<Title>{name}</Title>
			<Descriptions bordered title="이력 소개" items={items} />
			<Divider orientation="left" style={{ fontWeight: "bold" }}>
				이력서 상세
			</Divider>
			<Flex justify={"center"} align={"center"} vertical={true}>
				{portfolioLinkPlainText?.split(",").map((link: string) => {
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
