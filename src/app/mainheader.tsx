"use client";
import React, { FunctionComponent } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Button, Flex, Layout, Menu } from "antd";
import { pageRouter } from "@/mainrouter";

const menus: MenuProps["items"] = pageRouter.map(({ path, title }) => ({
	key: path,
	label: title,
}));

interface IHeaderProps {
	children: any;
}

const { Header, Content } = Layout;

const MainHeader: FunctionComponent<Partial<IHeaderProps>> = (props) => {
	const { children } = props;
	const router = useRouter();
	const pathname = usePathname();

	return (
		<Layout>
			<Flex justify={"center"} align={"center"} style={{ width: "100%" }}>
				<Header
					style={{
						display: "flex",
						alignItems: "center",
						position: "sticky",
						top: 0,
						zIndex: 100,
						width: 1200,
						paddingLeft: 16,
						paddingRight: 16,
					}}
				>
					<div className="white_logo" onClick={() => router.push("/")} />
					<Menu
						mode="horizontal"
						selectedKeys={[pathname]}
						items={menus}
						onClick={({ key }) => {
							router.push(key);
						}}
						style={{ flex: 1, minWidth: 0 }}
					/>
				</Header>
			</Flex>
			<Content style={{ padding: "16px" }}>
				<Flex justify={"center"} align={"flex-start"}>
					<div style={{ maxWidth: 1200, width: "100%" }}>{children}</div>
				</Flex>
			</Content>
		</Layout>
	);
};

export default MainHeader;
