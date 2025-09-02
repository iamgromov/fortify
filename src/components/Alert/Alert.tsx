import { useEffect } from 'react';
import type { IAlertProps } from '../../types/interfaces';

const Alert: React.FC<IAlertProps> = ({ name, closeAlert }) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} added</div>
    </div>
  );
};

export default Alert;
