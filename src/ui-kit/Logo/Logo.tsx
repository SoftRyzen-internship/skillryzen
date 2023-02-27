import s from './Logo.module.scss';

interface LogoProps {
  content: string;
}

export const Logo = ({ content }: LogoProps) => {
  const logoContent = content.length === 2 ? ['S', 'R'] : ['Skill', 'Ryzen'];

  return (
    <div className={s.logoWrapper}>
      <span className={s.accentLogo}>{logoContent[0]}</span>
      {logoContent[1]}
    </div>
  );
};
