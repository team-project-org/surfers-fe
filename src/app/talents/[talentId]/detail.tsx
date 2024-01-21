"use client";
import React, { FunctionComponent } from "react";
import { Descriptions, DescriptionsProps, Typography } from "antd";

const { Title } = Typography;

interface IDetailProps {
	projectId: string;
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

const Detail: FunctionComponent<Partial<IDetailProps>> = (props) => {
	return (
		<div className="project-detail">
			<Title>강동호</Title>
			<Descriptions bordered title="이력 소개" items={items} />
		</div>
	);
};

export default Detail;
