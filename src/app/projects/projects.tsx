"use client";
import React, { FunctionComponent, useState } from "react";
import { Switch } from "antd";
import CardView from "@/app/cardview";
import GridView from "@/app/gridview";
import { useRouter } from "next/navigation";

interface IProjectsProps {}

const Projects: FunctionComponent<IProjectsProps> = (props) => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const onChange = (checked: boolean) => {
		setLoading(!checked);
	};

	return (
		<div>
			<Switch
				checked={!loading}
				onChange={onChange}
				style={{ marginBottom: 16 }}
			/>
			<GridView>
				{[...Array(16)].map((_, i) => {
					return (
						<CardView
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
				})}
			</GridView>
		</div>
	);
};

export default Projects;
