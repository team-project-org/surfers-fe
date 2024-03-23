"use client";
import React, { FunctionComponent } from "react";
import { Avatar, Card, Skeleton } from "antd";
import { black, grey, lightPrimary, primary, white } from "@/app/color";

interface ICoverProps {
	alt?: string;
	url: string;
}

interface ICardViewProps {
	avatar?: string;
	cover?: ICoverProps;
	title: string | any;
	description?: string | any;
	loading: boolean;
	children?: any;
	onClick?: (e: any) => void;
}

const { Meta } = Card;

const CardView: FunctionComponent<Partial<ICardViewProps>> = (props) => {
	const {
		avatar = undefined,
		cover = undefined,
		title,
		description = undefined,
		loading,
		children = undefined,
		onClick = undefined,
	} = props;
	return (
		<Card
			hoverable={onClick != undefined}
			onClick={onClick && ((e) => onClick(e))}
			cover={
				cover && (
					<div style={{ position: "relative" }}>
						<div
							className="blur"
							style={{
								backgroundImage: `url(${cover.url})`,
								backgroundPosition: "center",
								backgroundSize: "contain",
								borderRadius: "16px 16px 0px 0px",
								height: 200,
							}}
						/>
						<div
							style={{
								position: "absolute",
								top: 16,
								left: 16,
								borderRadius: 16,
								padding: "3px 10px",
								backgroundColor: primary,
								color: white
							}}
						>
							<div>🚨마감 3.10~3.30</div>
						</div>
						<div
							style={{
								position: "absolute",
								bottom: 16,
								left: 16,
								color: white,
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: 20 }}>
								XXX 디자이너
							</div>
							<div>디자이너</div>
						</div>
					</div>
				)
			}
			loading={avatar === undefined && loading}
			className={cover !== undefined ? "ant-card-cover" : undefined}
		>
			<Skeleton
				loading={avatar !== undefined && loading}
				avatar={avatar !== undefined}
				active
			>
				<Meta
					avatar={avatar && <Avatar src={avatar} />}
					title={title}
					description={description}
				/>
			</Skeleton>
			<div
				style={{
					marginTop: 10,
					width: '100%',
					borderRadius: 16,
					padding: "5px 10px",
					backgroundColor: lightPrimary,
					color: black,
					fontWeight: 'bold'
				}}
			>
				<span>🗓️ 프로젝트 진행 기간</span>
				<span style={{ color: grey, paddingLeft: 3 }}>3개월</span>
			</div>
			{children}
		</Card>
	);
};

export default CardView;
