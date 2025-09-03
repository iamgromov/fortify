import { useEffect, useContext } from 'react';
import { ShopContext } from '../../services/ShopContext';

const Alert: React.FC = () => {
  const { alertName = '', closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);

  return (
    <div id='toast-container'>
      <div className='toast'>{alertName} added</div>
    </div>
  );
};

export default Alert;
