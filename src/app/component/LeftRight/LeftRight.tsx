import { Flex } from 'antd';
import React from 'react';

interface ILeftRightProps {
  left: any
  right: any
  leftWeight?: number
  rightWeight?: number
  leftStyle?: any
  rightStyle?: any
}

const LeftRight: React.FunctionComponent<ILeftRightProps> = ({ left, right, leftWeight = 5, rightWeight = 5, leftStyle, rightStyle }: ILeftRightProps) => {
  return <Flex className='left_right'>
    <Flex className='left' style={{ width: '100%', flexGrow: leftWeight, ...leftStyle }}>
      {left}
    </Flex>
    <Flex className='right' style={{ width: '100%', flexGrow: rightWeight, ...rightStyle }}>
      {right}
    </Flex>
  </Flex>;
};

export default LeftRight;
