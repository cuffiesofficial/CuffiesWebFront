import React from 'react';
import styled from 'styled-components';
import Spacer from '../Spacer';
import AccountButton from './AccountButton';
import ButtonMore from './ButtonMore';
import ButtonSlippage from './ButtonSlippage';
import imgLogo from '../../assets/img/mylittlelogo.png';
import farmLogo from '../../assets/img/farms.png';
import lottoLogo from '../../assets/img/baby.png';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {

  
  return (
    <StyledHeader>
      <StyledLeftHeader>
        <LogoLink to="/">
          <Logo src={imgLogo} />
        </LogoLink>
      </StyledLeftHeader>
      <StyledLeftHeader>
        <LogoLink to="/farms">
          <Logo src={farmLogo} />
        </LogoLink>
      </StyledLeftHeader>
      <StyledLeftHeader>
        <LogoLink to="/buy">
          <Logo src={lottoLogo} />
        </LogoLink>
      </StyledLeftHeader>
      <Spacer size="xs" />
      <AccountButton />
      <ButtonMore />
      <ButtonSlippage/>
    </StyledHeader>
  );
};
const StyledLeftHeader = styled.div`
  display: flex;
  flex: 1;
`;




const LogoLink = styled(NavLink)`
  text-decoration: none;
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
  }
`;

const Logo = styled.img`
  align-self: flex-start;
  height: 144px;
  &:hover{
    filter: brightness(1.08);}
  @media (max-width: 568px) {
    height: 150px;
    align-items: center;
   
  }
`;
const Logohover = styled.img`
  align-self: flex-start;
  height: 144px;
  @media (max-width: 568px) {
    height: 150px;
    align-items: center;
    
  }
`;
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
`;

export default Header;
