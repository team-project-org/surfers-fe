"use client";
import React, {
	FunctionComponent,
	LegacyRef,
	useEffect,
	useRef,
	useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import type { MenuProps } from "antd";
import { Flex, Layout, Menu } from "antd";
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
	const space = useRef<any>(null);
	const [scrollPercent, setScrollPercent] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		const winHeight = window.innerHeight;
		const scrollHeight = (space as any).current.getBoundingClientRect().height;
		const scrollPercent = position / (scrollHeight - winHeight);
		console.log("scrollPercent", scrollPercent);
		setScrollPercent(scrollPercent);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="space" ref={space}>
			<div className="stars" style={{ opacity: Math.max(1 - scrollPercent * 10 / 4, 0) }} />
			<Layout>
				<Flex justify={"center"} align={"center"} style={{ width: "100%" }}>
					<Header
						style={{
							display: "flex",
							alignItems: "center",
							position: "sticky",
							top: 0,
							zIndex: 100,
							maxWidth: 1200,
							width: "100%",
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
				<Content style={{ padding: "16px", zIndex: 1 }}>
					<Flex justify={"center"} align={"flex-start"}>
						<div style={{ maxWidth: 1200, width: "100%" }}>{children}</div>
					</Flex>
				</Content>
			</Layout>
		</div>
	);
};

export default MainHeader;
