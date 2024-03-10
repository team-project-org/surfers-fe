"use client";
import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Switch } from "antd";
import CardView from "@/app/cardview";
import GridView from "@/app/gridview";
import { useRouter } from "next/navigation";
import getProject from "@/server/actions/getProject";
import Loading from "../loading";

interface IProjectsProps {}

const Projects: FunctionComponent<IProjectsProps> = (props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const onChange = (checked: boolean) => {
		setLoading(!checked);
	};

	const {
		data = {},
		error,
		isFetched,
		isFetching,
		isFetchedAfterMount,
	} = useQuery({
		queryKey: ["project", 1, 20],
		queryFn: async () => {
			const data = await getProject(1, 20);
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

	console.log("data", data);
	const { items = [] }: { items: any } = data as any;

	return (
		<div>
			<Switch
				checked={!loading}
				onChange={onChange}
				style={{ marginBottom: 16 }}
			/>
			<GridView>
				{/* {[...Array(16)].map((_, i) => {
					return (
						<CardView
							key={i}
							title="스프린터 프로젝트"
							loading={loading}
							onClick={() => {
								router.push(`projects/${i}`);
							}}
							cover={{
								alt: "example",
								url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
							}}
							description="This is the description"
						/>
					);
				})} */}
				{items.map((item: any) => {
					const {
						collectionId,
						id,
						collectionName,
						projectName,
						email,
						created,
						updated,
						image,
						link,
						openChatLink,
					} = item;
					return (
						<CardView
							key={id}
							title={projectName}
							loading={loading}
							onClick={() => {
								router.push(`projects/${id}`);
							}}
							cover={{
								url: image,
							}}
							description={email}
						/>
					);
				})}
			</GridView>
		</div>
	);
};

export default Projects;
