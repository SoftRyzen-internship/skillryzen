import { Breadcrumbs } from 'ui-kit';
import { TeamList } from './TeamList/TeamList';
import { TeamSearch } from './TeamSearch/TeamSearch';
import s from './TeamPageComponent.module.scss';
import { useState } from 'react';


export const TeamPageComponent = () => {
  const [search, setSearch] = useState('');
  console.log("search", search)

  return (
    <div className={s.teamPage}>
      <Breadcrumbs />
      <TeamSearch onClick={setSearch}/>
      <TeamList search={search}/>
    </div>
  );
};
