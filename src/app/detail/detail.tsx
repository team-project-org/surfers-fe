"use client"
import React, { useEffect, useState, FunctionComponent } from "react";
import { NotionRenderer } from "react-notion-x";
import 'react-notion-x/src/styles.css'

interface IDetailProps {
	recordMap: any;
}

const Detail: FunctionComponent<IDetailProps> = (props) => {
	const { recordMap } = props;
  
	return (
		<div>
      상세페이지
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

export default Detail;
