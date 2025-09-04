const Header: React.FunctionComponent = () => {
  return (
    <nav className='cyan darken-2'>
      <div className='nav-wrapper'>
        <a
          href='#'
          className='brand-logo'
        >
          Fortnite Shop
        </a>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <a
              href='https://github.com/iamgromov/fortify'
              rel='noreferrer'
              target='_blank'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
