import { TeamCard } from 'ui-kit/components/Card/TeamCard';
import { IMAGES } from 'ui-kit/images';
import team from 'utils/team.json';

export const TeamList = () => {
  return (
    <ul>
      {team.map((item) => (
        <li key={item.id}>
          <TeamCard
            name={item.name}
            position={item.position}
            image={IMAGES[item.image]}
            social={{
              behance: `${item.social.behance}}`,
              dribble: `${item.social.dribble}}`,
              github: `${item.social.github}}`,
              linkedin: `${item.social.linkedin}}`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};
