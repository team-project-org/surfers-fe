"use client";
import React, { FunctionComponent } from "react";
import { Avatar, Card, Skeleton, Tag } from "antd";
import { white } from "@/app/color";
import {
	FacebookOutlined,
	LinkedinOutlined,
	TwitterOutlined,
	YoutubeOutlined,
} from "@ant-design/icons";
import URLTag from "@/app/component/URLTag";

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
			<div style={{ paddingTop: 5 }}>
				{/* <Tag icon={<TwitterOutlined />} style={{ margin: 2 }} color="#55acee">
					Twitter
				</Tag>
				<Tag icon={<YoutubeOutlined />} style={{ margin: 2 }} color="#cd201f">
					Youtube
				</Tag>
				<Tag icon={<FacebookOutlined />} style={{ margin: 2 }} color="#3b5999">
					Facebook
				</Tag>
				<Tag icon={<LinkedinOutlined />} style={{ margin: 2 }} color="#55acee">
					LinkedIn
				</Tag> */}

				<URLTag name="Linkedin" />
				<URLTag name="Behance" />
				<URLTag name="Notion" />
			</div>
			{children}
		</Card>
	);
};

export default CardView;
