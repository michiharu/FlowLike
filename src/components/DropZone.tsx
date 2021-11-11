import * as React from 'react';

import { Rect } from 'react-konva';

import type { AddablePointOfEntity } from '../types/flow-entity';

type Props = {
  point: AddablePointOfEntity;
};

const DropZone: React.FC<Props> = ({ point }) => {
  const { x, y, width, height } = point;
  const props = { x, y, width, height };
  return <Rect {...props} fill="#00ff5510" />;
};

export default DropZone;
