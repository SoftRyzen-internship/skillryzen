import { useEffect, useState } from 'react';
import { Pagination } from 'ui-kit';
import { TeamCard } from 'ui-kit/components/Card/TeamCard';
import { IMAGES } from 'ui-kit/images';
import team from 'utils/team.json';

import s from './TeamList.module.scss';

interface Links {
  behance: string;
  dribble: string;
  github: string;
  linkedin: string;
}

interface TeamList {
  id: number;
  image: string;
  name: string;
  position: string;
  social: Links;
}

interface TeamListProps {
  name: string;
  positions: string[];
}

const itemsForPage = 4;

export const TeamList = ({ name, positions }: TeamListProps) => {
  const [totalPages, setTotalPages] = useState<number>(null);
  const [array, setArray] = useState<TeamList[]>([]);

  const onPageChange = (currentPage: number) => {
    const filteredTeamArray = team.filter((item) => item.name.includes(name));
    const totalPages = Math.ceil(filteredTeamArray.length / itemsForPage);
    const start = itemsForPage * (currentPage - 1);
    const end = start + itemsForPage;
    setTotalPages(totalPages);
    setArray(filteredTeamArray.slice(start, end));
  };

  useEffect(() => {
    onPageChange(1);
  }, [name, positions]);

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
                { name: 'behance', url: `${item.social.behance}` },
                { name: 'dribble', url: `${item.social.dribble}` },
                { name: 'github', url: `${item.social.github}` },
                { name: 'linkedin', url: `${item.social.linkedin}` },
              ]}
            />
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        onPageChange={onPageChange}
        className={s.teamList__pagination}
      />
    </>
  );
};
