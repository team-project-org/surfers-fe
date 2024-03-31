"use client";
import React, { FunctionComponent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Flex, Pagination, Switch } from "antd";
import CardView from "@/app/cardview";
import GridView from "@/app/gridview";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import getProjectList from "@/server/actions/getProjectList";
import getImages from "@/app/utils/getImages";
import getRandomOne from "@/app/utils/getRandomOne";

interface IProjectsProps {}

const projectBanners = getImages([
	"banner/project/project_banner_1.png",
	"banner/project/project_banner_2.png",
]);

console.log("projectBanners", projectBanners);

const Projects: FunctionComponent<IProjectsProps> = (props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const [page, setPage] = useState(1);
	const searchParams = useSearchParams();
	const token = searchParams.get("token");
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
		queryKey: ["project", page, 24],
		queryFn: async () => {
			const data = await getProjectList(1);
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
	const { items = [], totalPages }: { items: any; totalPages: number } =
		data as any;

	return (
		<div>
			{/* <Switch
				checked={!loading}
				onChange={onChange}
				style={{ marginBottom: 16 }}
			/> */}
			<GridView
				glutter={[
					{ xs: 8, sm: 16, md: 24, lg: 24 },
					{ xs: 8, sm: 16, md: 24, lg: 24 },
				]}
				xs={24}
				sm={12}
				md={8}
				lg={8}
			>
				{items.map((item: any) => {
					const {
						collectionId,
						id,
						collectionName,
						projectName,
						projectDescription,
						email,
						name,
						created,
						updated,
						image,
						postImageUrl,
						applyEndDate
					} = item;
					return (
						<CardView
							key={id}
							title={projectName}
							loading={loading}
							onClick={() => {
								router.push(`projects/${id}?token=${token}`);
							}}
							cover={{
								url: postImageUrl || getRandomOne(projectBanners),
							}}
							description={projectDescription}
						/>
					);
				})}
			</GridView>
			<Flex justify={"center"} align={"flex-start"} style={{ paddingTop: 20 }}>
				<Pagination
					defaultCurrent={page}
					onChange={setPage}
					total={totalPages}
				/>
			</Flex>
		</div>
	);
};

export default Projects;
