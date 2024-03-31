"use client";
import React, { FunctionComponent, useState } from "react";
import { Flex, Pagination, Segmented } from "antd";
import GridView from "@/app/gridview";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/app/loading";
import getTalentList from "@/server/actions/getTalentList";
import TalentCardView from "@/app/talentCardView";
import getImages from "@/app/utils/getImages";
import getRandomOne from "@/app/utils/getRandomOne";

interface ITalentsProps {}

const profiles = getImages([
	"profile/profile.png",
	"profile/profile2.png",
	"profile/profile3.png",
	"profile/profile4.png",
]);

const Talents: FunctionComponent<ITalentsProps> = (props) => {
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
		queryKey: ["talent", page, 24],
		queryFn: async () => {
			const data = await getTalentList(1);
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
			<Flex
				justify={"start"}
				align={"center"}
				style={{ width: "100%", paddingBottom: 10 }}
			>
				<Segmented
					options={["디자이너", "개발자", "기타 직군"]}
					onChange={(value) => {
						console.log(value); // string
					}}
				/>
			</Flex>
			<GridView>
				{items.map((item: any) => {
					const {
						collectionId,
						id,
						email,
						name,
						job,
						profileImageUrl,
						portfolioLinkPlainText,
					} = item;
					return (
						<TalentCardView
							key={id}
							name={name}
							cover={{
								url: getRandomOne(profiles),
							}}
							job={job}
							loading={loading}
							onClick={() => {
								router.push(`talents/${id}?token=${token}`);
							}}
							style={{ height: 342 }}
							portfolioLinkPlainText={portfolioLinkPlainText}
							// avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
							description={email}
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

export default Talents;
