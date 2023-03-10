import { Breadcrumbs } from 'ui-kit';
import { TeamList } from './TeamList/TeamList';
import { TeamFilter } from './TeamFilter/TeamFilter';
import s from './TeamPageComponent.module.scss';
import { useState } from 'react';


export const TeamPageComponent = () => {
  const [name, setName] = useState('');
  const [positions, setPositions] = useState<string[]>([]);

  return (
    <div className={s.teamPage}>
      <Breadcrumbs />
      <TeamFilter setName={setName} setPositions={setPositions}/>
      <TeamList name={name} positions={positions}/>
    </div>
  );
};
