"use client";
import React, { FunctionComponent } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { pageRouter } from "@/router";

const menus: MenuProps["items"] = pageRouter.map(({ path, title }) => ({
	key: path,
	label: title,
}));

interface IHeaderProps {
	children: any;
}

const { Header, Content } = Layout;

const HeaderLayout: FunctionComponent<IHeaderProps> = (props) => {
	const { children } = props;
  const router = useRouter();
  const pathname = usePathname();
  console.log('pathname', pathname)

	return (
		<Layout>
			<Header style={{ display: "flex", alignItems: "center" }}>
				<div className="demo-logo" onClick={() => router.push("/")}>Suffers</div>
				<Menu
					theme="dark"
					mode="horizontal"
					selectedKeys={[pathname]}
					items={menus}
					onClick={({ key }) => {
            router.push(key)
          }}
					style={{ flex: 1, minWidth: 0 }}
				/>
			</Header>
			<Content style={{ padding: "0 48px" }}>{children}</Content>
		</Layout>
	);
};

export default HeaderLayout;
