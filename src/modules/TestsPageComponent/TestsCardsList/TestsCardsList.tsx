import { CardsList } from 'modules/common';

interface TestsListProps {
  size?: 'large' | 'small';
}

interface Item {
  id: number;
  author: string;
  title: string;
  text: string;
  fields: string[];
  number: number;
  time: number;
  wasStarted: boolean;
  nextRetakeDate: null | Date;
  testStatus?: string;
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
      wasStarted: false,
      nextRetakeDate: null,
    },
    {
      id: 2,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: true,
      nextRetakeDate: null,
    },
    {
      id: 3,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: false,
      nextRetakeDate: new Date('2023-03-10'),
    },
    {
      id: 4,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: false,
      nextRetakeDate: null,
    },
    {
      id: 5,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: false,
      nextRetakeDate: new Date('2023-03-05'),
    },
    {
      id: 6,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: true,
      nextRetakeDate: null,
    },
    {
      id: 7,
      title: 'FullStuck_Final_Test',
      text: 'Welcome to Star class LMS! Study anytime and anywhere with us and discover the unknown.',
      fields: ['HTML', 'CSS', 'REACT', 'JAVASCRIPT'],
      author: 'GoIt',
      number: 50,
      time: 3,
      wasStarted: true,
      nextRetakeDate: new Date('2023-03-15'),
    },
  ];

  const getFilteredArrayByStatus = (testsArray: Item[]) => {
    // const newArr = testsArray.map((item) => ({
    //   ...item,
    //   testStatus: item.nextRetakeDate
    //     ? 'disabled'
    //     : item.wasStarted
    //     ? 'tryAgain'
    //     : 'aviable',
    // }));
    const newArr = testsArray.map((item) => {
      if (item.nextRetakeDate) {
        return { ...item, testStatus: 'disabled' };
      }
      if (item.wasStarted && !item.nextRetakeDate) {
        return { ...item, testStatus: 'tryAgain' };
      }
      if (!item.wasStarted) {
        return { ...item, testStatus: 'aviable' };
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newObj = newArr?.reduce((acc: any, item: Item) => {
      const callback = (item: Item) => item.testStatus;
      const key = callback(item);

      let sublist = acc[key];
      if (!sublist) {
        sublist = [];
        acc[key] = sublist;
      }
      sublist.push(item);

      return acc;
    }, {});

    newObj.disabled.sort(
      (a: Item, b: Item) =>
        a.nextRetakeDate.getTime() - b.nextRetakeDate.getTime()
    );

    return [...newObj.aviable, ...newObj.tryAgain, ...newObj.disabled];
  };

  const sortedTestsList = getFilteredArrayByStatus(testsArray);
  // console.log('sortedTestsList', sortedTestsList);

  return <CardsList size={size} sortedTestsList={sortedTestsList} />;
};
