"use client";
import { FunctionComponent } from "react";
import { useSearchParams } from "next/navigation";
import type { MenuProps } from "antd";
import { pageRouter } from "@/router";

interface IHeaderProps {
	children: any;
}

const TokenChecker: FunctionComponent<Partial<IHeaderProps>> = (props) => {
	const { children } = props;
	const searchParams = useSearchParams();

	const token = searchParams.get("token");
	if (btoa("sprinter_beta") === token) {
		return children;
	} else {
		return undefined;
	}
};

export default TokenChecker;
