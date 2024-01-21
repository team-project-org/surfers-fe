"use client";
import React, { FunctionComponent } from "react";
import { Avatar, Card, Skeleton } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import "./cardview.css";

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
}

const { Meta } = Card;

const CardView: FunctionComponent<Partial<ICardViewProps>> = (props) => {
	const {
		avatar = undefined,
		cover = undefined,
		title,
		description = undefined,
		loading,
	} = props;
	return (
		<div>
			<Card
				cover={cover && <img alt={cover.alt} src={cover.url} />}
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
			</Card>
		</div>
	);
};

export default CardView;
