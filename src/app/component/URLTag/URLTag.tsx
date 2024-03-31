import React, { FunctionComponent } from "react";

import getImages from "@/app/utils/getImages";
import getRandomOne from "@/app/utils/getRandomOne";
import { lightGrey } from "@/app/color";
import { Flex } from "antd";

interface IURLTagProps {
	name?: string;
}

const icons = getImages([
	"icons/BehanceLogo.png",
	"icons/LinkedinLogo.png",
	"icons/NotionLogo.png",
]);

const URLTag: FunctionComponent<IURLTagProps> = ({ name }) => {
	return (
		<Flex
			justify={"center"}
			align={"center"}
			style={{
				borderRadius: "50%",
				backgroundColor: lightGrey,
				width: 32,
				height: 32,
				display: "inline-flex",
				margin: 4,
			}}
		>
			<img
				src={icons.find((v) => name && v.includes(name)) || getRandomOne(icons)}
				alt={name}
			/>
		</Flex>
	);
};

export default URLTag;
