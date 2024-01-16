"use client"
import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import 'react-notion-x/src/styles.css'

interface INotionProps {
	call: () => any;
}

const Notion: React.FunctionComponent<INotionProps> = (props) => {
	const { call } = props;
  const [recordMap, setRecordMap] = useState(undefined)

  useEffect(() => {
    call().then((data: any) => {
      setRecordMap(data)
    })
  }, [])
  

	return (
		<div>
      dawdwa
			{recordMap && <NotionRenderer
				disableHeader // notion 헤더 안보이도록
				recordMap={recordMap}
				fullPage={true} // 전체 페이지 설정
			/>}
		</div>
	);
};

export default Notion;
