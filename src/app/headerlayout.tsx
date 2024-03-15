"use client";
import React, { FunctionComponent } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Button, Flex, Layout, Menu } from "antd";
import { pageRouter } from "@/router";

const menus: MenuProps["items"] = pageRouter.map(({ path, title }) => ({
	key: path,
	label: title,
}));

interface IHeaderProps {
	children: any;
}

const { Header, Content } = Layout;

const getHeaderAction = (pathname: string) => {
	switch (pathname) {
		case "/projects":
			return (
				<Button
					type="primary"
					size="large"
					href="https://forms.gle/eRBXKorxwi1SQ9fz5"
					target="_blank"
					style={{ fontWeight: 'bold' }}
				>
					프로젝트 등록
				</Button>
			);
		case "/talents":
			return (
				<Button
					type="primary"
					size="large"
					href="https://forms.gle/eRBXKorxwi1SQ9fz5"
					target="_blank"
					style={{ fontWeight: 'bold' }}
				>
					인재풀 등록
				</Button>
			);
	}
	return undefined;
};

const HeaderLayout: FunctionComponent<Partial<IHeaderProps>> = (props) => {
	const { children } = props;
	const router = useRouter();
	const pathname = usePathname();

	const headerAction = getHeaderAction(pathname);

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
					<div className="logo" onClick={() => router.push("/")} />
					<Menu
						mode="horizontal"
						selectedKeys={[pathname]}
						items={menus}
						onClick={({ key }) => {
							router.push(key);
						}}
						style={{ flex: 1, minWidth: 0 }}
					/>
					{headerAction && (
						<div style={{ marginLeft: "auto" }}>{headerAction}</div>
					)}
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

export default HeaderLayout;
