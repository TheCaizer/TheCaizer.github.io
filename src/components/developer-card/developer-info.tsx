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
        <span>University of New South Wales</span>
      </Row>
      <Row small={small}>
        <span>Degree:</span>
        <span>Computer Science & Econometrics</span>
      </Row>
    </RowGroup>
    <RowGroup>
      <Row small={small}>
        <span>Favourite Pokemon:</span>
        <span>Aegislash</span>
      </Row>
    </RowGroup>
  </>
));

export default DeveloperInfo;
