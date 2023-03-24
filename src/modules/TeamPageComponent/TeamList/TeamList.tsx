import { useMemo } from 'react';

import { team } from 'utils/team.js';
import { IMAGES } from 'ui-kit/images';
import { useThemeContext } from 'context/themeContext';
import { IThemeContext, UserSocial, SocialName } from 'constans/types';

import { TeamCard } from 'ui-kit';

import s from './TeamList.module.scss';

interface Links {
  behance?: string;
  dribble?: string;
  github?: string;
  linkedin?: string;
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

const returnSocialList = (social: Links): UserSocial[] => {
  return Object.entries(social).map((item: [SocialName, string]) => ({
    name: item[0],
    url: item[1],
  }));
};

export const TeamList = ({ name, positions }: TeamListProps) => {
  const { theme }: IThemeContext = useThemeContext();

  const array = useMemo(() => {
    let teamArray = [...team];
    if (name || positions.length) {
      teamArray = teamArray.filter(
        item =>
          (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
          (positions.length === 0 || positions.includes(item.position))
      );
    }
    return teamArray;
  }, [name, positions]);

  return (
    <ul className={s.teamList}>
      {array.map(item => (
        <li key={item.id}>
          <TeamCard
            theme={theme}
            name={item.name}
            position={item.position}
            image={IMAGES[item.image]}
            social={returnSocialList(item.social)}
          />
        </li>
      ))}
    </ul>
  );
};

// Варіант з пагінацією, поки не видаляти!!!

// import { IThemeContext, UserSocial, SocialName } from 'constans/types';
// import { useThemeContext } from 'context/themeContext';
// import { useEffect, useState, useCallback } from 'react';
// import { Pagination } from 'ui-kit';
// import { TeamCard } from 'ui-kit/components/Card/TeamCard';
// import { IMAGES } from 'ui-kit/images';
// import { team } from 'utils/team.js';

// import s from './TeamList.module.scss';

// interface Links {
//   behance?: string;
//   dribble?: string;
//   github?: string;
//   linkedin?: string;
// }

// interface TeamList {
//   id: number;
//   image: string;
//   name: string;
//   position: string;
//   social: Links;
// }

// interface TeamListProps {
//   name: string;
//   positions: string[];
// }

// const itemsForPage = 4;

// const returnSocialList = (social: Links): UserSocial[] => {
//   return Object.entries(social).map((item: [SocialName, string]) => ({
//     name: item[0],
//     url: item[1],
//   }));
// };

// export const TeamList = ({ name, positions }: TeamListProps) => {
//   const { theme }: IThemeContext = useThemeContext();
//   const [totalPages, setTotalPages] = useState<number>(null);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [array, setArray] = useState<TeamList[]>([]);

//   const onPageChange = useCallback(
//     (currentPage: number) => {
//       let teamArray = [...team];
//       if (name || positions.length > 0) {
//         teamArray = team.filter(
//           (item) =>
//             (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
//             (positions.length === 0 || positions.includes(item.position))
//         );
//       }
//       const totalPages = Math.ceil(teamArray.length / itemsForPage);
//       const start = itemsForPage * (currentPage - 1);
//       const end = start + itemsForPage;
//       setTotalPages(totalPages);
//       setArray(teamArray.slice(start, end));
//     },
//     [name, positions]
//   );

//   useEffect(() => {
//     onPageChange(1);
//     setCurrentPage(1);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [name, positions]);

//   return (
//     <>
//       <ul className={s.teamList}>
//         {array.map((item) => (
//           <li key={item.id}>
//             <TeamCard
//               theme={theme}
//               name={item.name}
//               position={item.position}
//               image={IMAGES[item.image]}
//               social={returnSocialList(item.social)}
//             />
//           </li>
//         ))}
//       </ul>
//       <Pagination
//         totalPages={totalPages}
//         onPageChange={onPageChange}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         className={s.teamList__pagination}
//       />
//     </>
//   );
// };
