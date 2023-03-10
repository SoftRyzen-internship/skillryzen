import { TeamList } from './TeamList/TeamList';
import s from './TeamPageComponent.module.scss';

export const TeamPageComponent = () => {
  return <div className={s.teamPage}><TeamList/></div>;
};
