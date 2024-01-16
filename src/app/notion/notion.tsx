"use client"
import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import 'react-notion-x/src/styles.css'

interface INotionProps {
	recordMap: any;
}

const Notion: React.FunctionComponent<INotionProps> = (props) => {
	const { recordMap } = props;
  
	return (
		<div>
      노션 테스트
			<div style={{ width: '100%', maxWidth: 1000 }}>
				{recordMap && <NotionRenderer
					disableHeader // notion 헤더 안보이도록
					recordMap={recordMap}
					fullPage={true} // 전체 페이지 설정
				/>}
			</div>
		</div>
	);
};

export default Notion;
