import { CardsList } from 'modules/common/components/CardsList/CardsList';

interface TestsListProps {
    size?: 'large' | 'small';
}

export const TestsCardsList = ({size}: TestsListProps) => {
  const testsArray = [
    {
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
    {
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      number: 50,
      time: 3,
    },
  ];

  return <CardsList type='info' size={size} testsArray={testsArray} />;
};
