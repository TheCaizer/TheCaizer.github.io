import React, { FC } from 'react';
import { RowGroup, Row } from './styled';

const DeveloperInfo: FC<{small?: boolean}> = (({ small = false }) => (
  <>
    <RowGroup>
      <Row small={small}>
        <span>Name:</span>
        <span>Jackie Cai</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row small={small}>
        <span>University:</span>
        <span>UNSW Sydney</span>
      </Row>
      <Row small={small}>
        <span>Degree:</span>
        <span>Computer Science & Economics</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row small={small}>
        <span>Favourite Language:</span>
        <span>English (C++)</span>
      </Row>
    </RowGroup>
  </>
));

export default DeveloperInfo;
