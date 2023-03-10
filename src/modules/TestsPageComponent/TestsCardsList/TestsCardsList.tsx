import { CardsList } from 'modules/common';

interface TestsListProps {
  size?: 'large' | 'small';
}

export const TestsCardsList = ({ size }: TestsListProps) => {
  const testsArray = [
    {
      id: 1,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
    },
  ];

  return <CardsList size={size} testsArray={testsArray} />;
};
