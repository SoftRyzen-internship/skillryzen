import { TeamCard } from 'ui-kit/components/Card/TeamCard';
import { IMAGES } from 'ui-kit/images';
import team from 'utils/team.json';

import s from './TeamList.module.scss';

export const TeamList = () => {
  return (
    <ul className={s.teamList}>
      {team.map((item) => (
        <li key={item.id}>
          <TeamCard
            name={item.name}
            position={item.position}
            image={IMAGES[item.image]}
            social={[
              { name: 'behance', url: `${item.social.behance}}` },
              { name: 'dribble', url: `${item.social.dribble}}` },
              { name: 'github', url: `${item.social.github}}` },
              { name: 'linkedin', url: `${item.social.linkedin}}` },
            ]}
          />
        </li>
      ))}
    </ul>
  );
};
