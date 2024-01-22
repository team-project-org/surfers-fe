"use client";
import React, { FunctionComponent, useState } from "react";
import { Switch } from "antd";
import CardView from "@/app/cardview";
import GridView from "@/app/gridview";
import { useRouter } from "next/navigation";

interface ITalentsProps {}

const Talents: FunctionComponent<ITalentsProps> = (props) => {
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
							key={i}
							title="강동호"
							loading={loading}
							onClick={() => {
								router.push(`talents/${i}`);
							}}
							avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
							description="This is the description"
						/>
					);
				})}
			</GridView>
		</div>
	);
};

export default Talents;
