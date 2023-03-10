import { Breadcrumbs } from 'ui-kit';
import { TeamList } from './TeamList/TeamList';
import { TesamSearch } from './TeamSearch/TeamSearch';
import s from './TeamPageComponent.module.scss';


export const TeamPageComponent = () => {
  return (
    <div className={s.teamPage}>
      <Breadcrumbs />
      <TesamSearch/>
      <TeamList />
    </div>
  );
};
