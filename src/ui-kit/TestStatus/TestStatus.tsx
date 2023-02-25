import s from './TestStatus.module.scss';

interface ITestStatus {
  status: 'success' | 'failure';
}

export const TestStatus = ({ status }: ITestStatus) => {
  return (
    <div className={`${status === 'success' ? s.success : s.failed}`}>
      {status === 'success' ? 'Completed' : 'Failed'}
    </div>
  );
};
