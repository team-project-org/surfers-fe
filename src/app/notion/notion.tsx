"use client";
import React, { useEffect, useState, FunctionComponent } from "react";
import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";

interface INotionProps {
	recordMap: any;
}

const Notion: FunctionComponent<INotionProps> = (props) => {
	const { recordMap } = props;

	return (
		<div style={{ width: "100%", maxWidth: 1000 }}>
			{recordMap && (
				<NotionRenderer
					disableHeader // notion 헤더 안보이도록
					recordMap={recordMap}
					fullPage={true} // 전체 페이지 설정
				/>
			)}
		</div>
	);
};

export default Notion;
