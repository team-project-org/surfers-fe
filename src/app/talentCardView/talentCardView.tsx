"use client";
import React, { FunctionComponent } from "react";
import { Avatar, Card, Flex, Skeleton, Tag } from "antd";
import { white } from "@/app/color";
import URLTag from "@/app/component/URLTag";

interface ICoverProps {
	alt?: string;
	url: string;
}

interface ICardViewProps {
	avatar?: string;
	cover?: ICoverProps;
	job?: string | any;
	name?: string | any;
	title?: string | any;
	style?: any;
	portfolioLinkPlainText?: string | any;
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
		job = undefined,
		name = undefined,
		title = "스타트업에 관심 있어요 🚀",
		description = undefined,
		portfolioLinkPlainText = undefined,
		loading,
		style,
		children = undefined,
		onClick = undefined,
	} = props;
	return (
		<Card
			hoverable={onClick != undefined}
			onClick={onClick && ((e) => onClick(e))}
			style={style}
			cover={
				cover && (
					<div style={{ position: "relative" }}>
						<div
							className="blur"
							style={{
								backgroundImage: `url(${cover.url})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								borderRadius: "16px 16px 0px 0px",
								height: 200,
							}}
						/>
						<div
							style={{
								position: "absolute",
								bottom: 16,
								left: 16,
								color: white,
							}}
						>
							<div style={{ fontWeight: "bold", fontSize: 20 }}>{name}</div>
							<div>{job}</div>
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
			{(portfolioLinkPlainText != undefined ||
				portfolioLinkPlainText != "") && (
				<Flex justify={"flex-end"} align={"center"} style={{ paddingTop: 5 }}>
					{portfolioLinkPlainText?.split(",").map((portfolioLink: string) => {
						try {
							const hostname = new URL(portfolioLink).hostname;
							let selectType = undefined;
							if (hostname.includes("notion")) {
								selectType = "Notion";
							} else if (hostname.includes("behance")) {
								selectType = "Behance";
							} else if (hostname.includes("linkedin")) {
								selectType = "Linkedin";
							}
							return (
								selectType && <URLTag key={portfolioLink} name={selectType} />
							);
						} catch (e) {
							return null;
						}
					})}
				</Flex>
			)}
			{children}
		</Card>
	);
};

export default CardView;
