import { useState } from 'react';
import { Pagination } from 'ui-kit';
import { TeamCard } from 'ui-kit/components/Card/TeamCard';
import { IMAGES } from 'ui-kit/images';
import team from 'utils/team.json';

import s from './TeamList.module.scss';

interface Links {
  behance: string,
  dribble: string,
  github: string,
  linkedin: string
}

interface TeamList {
  id: number;
  image: string;
  name: string;
  position: string;
  social: Links;
}

const itemsForPage = 4;
const totalPages = Math.ceil(team.length / itemsForPage);

export const TeamList = () => {
  const [array, setArray] = useState<TeamList[]>([]);

const onPageChange = (currentPage: number) => {
  const start = itemsForPage * (currentPage - 1);
  const end = start + itemsForPage;
  setArray(team.slice(start, end));
};

  return (
    <>
    <ul className={s.teamList}>
      {array.map((item) => (
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
    <Pagination totalPages={totalPages} onPageChange={onPageChange} className={s.teamList__pagination}/>
    </>
  );
};
