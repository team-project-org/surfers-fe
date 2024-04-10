import { Flex } from 'antd';
import React from 'react';

interface ILeftRightProps {
  left: any
  right: any
  leftWeight?: number
  rightWeight?: number
}

const LeftRight: React.FunctionComponent<ILeftRightProps> = ({ left, right, leftWeight = 5, rightWeight = 5 }: ILeftRightProps) => {
  return <Flex flex={"center"} style={{ flexDirection: 'row' }}>
    <Flex flex={'center'} style={{ flexGrow: leftWeight }}>
      {left}
    </Flex>
    <Flex flex={'center'} style={{ flexGrow: rightWeight }}>
      {right}
    </Flex>
  </Flex>;
};

export default LeftRight;
