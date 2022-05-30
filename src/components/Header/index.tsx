import { FiPlusSquare } from 'react-icons/fi';

import * as S from './styles';
import Logo from '../../assets/logo.svg';

type HeaderProps = {
  openModal: () => void;
}

const Header = ({ openModal }: HeaderProps) => {
  return (
    <S.Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </S.Container>
  );
}

export default Header;
