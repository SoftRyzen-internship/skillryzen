import { useState } from 'react';

import { Breadcrumbs, ScrollContainer } from 'ui-kit';

import { TeamList } from './TeamList/TeamList';
import { TeamFilter } from './TeamFilter/TeamFilter';

export const TeamPageComponent = () => {
  const [name, setName] = useState('');
  const [positions, setPositions] = useState<string[]>([]);

  return (
    <ScrollContainer>
      <Breadcrumbs />
      <TeamFilter setName={setName} setPositions={setPositions} />
      <TeamList name={name} positions={positions} />
    </ScrollContainer>
  );
};
