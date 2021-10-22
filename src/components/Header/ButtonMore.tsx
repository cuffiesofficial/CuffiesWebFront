import React, { useRef, useState } from 'react';
import { ExternalLinks } from 'src/config';
import useOutsideClick from 'src/hooks/useClickOutside';
import styled from 'styled-components';
import icTwitter from '../../assets/img/setting/ic-twitter.svg';
import icinstagram from '../../assets/img/setting/ic-instagram.png';
import icDoc from '../../assets/img/setting/ic-doc.svg';
import icMedium from '../../assets/img/setting/ic-medium.svg';
import icTelegram from '../../assets/img/setting/ic-telegram.svg';
import icGit from '../../assets/img/setting/ic-git.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ButtonMore: React.FC = () => {
  const [showed, setShowed] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => hide());

  const toggle = () => {
    setShowed(!showed);
  };

  const hide = () => {
    setShowed(false);
  };

  return (
    <StyledDropdown ref={ref}>
      <button className="btn btn-icon btn-icon-highlight  ml-1" onClick={toggle}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </button>
      {showed && (
        <StyledDropdownContent onClick={hide}>
          <StyledDropdownItem href={ExternalLinks.codes} target="_blank">
            <img src={icGit} />
            Codes
          </StyledDropdownItem>
          <StyledDropdownItem href={ExternalLinks.medium} target="_blank">
            <img src={icMedium} />
            Medium
          </StyledDropdownItem>
          <StyledDropdownItem href={ExternalLinks.telegram} target="_blank">
            <img src={icTelegram} />
            Telegram
          </StyledDropdownItem>
          <StyledDropdownItem href={ExternalLinks.instagram} target="_blank">
            <img src={icinstagram} />
            instagram
          </StyledDropdownItem>
          <StyledDropdownItem href={ExternalLinks.twitter} target="_blank">
            <img src={icTwitter} />
            Twitter
          </StyledDropdownItem>
        </StyledDropdownContent>
      )}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;


  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDropdownContent = styled.div`
  min-width: 9rem;
  border-radius: 25px;
  background-color: ${(p) => p.theme.color.primary.main};
  border: solid 3px ${(p) => p.theme.color.primary.main};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 2.6rem;
  right: 0rem;
  z-index: 100;
`;

const StyledDropdownItem = styled.a`
  flex: 1 1 0%;
  align-items: center;
  display: flex;
  padding: 0.5rem;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  img {
    margin-right: 10px;
    width: 24px;
    text-align: center;
  }
  &:hover {
    color: ${(p) => p.theme.color.grey[50]};
    cursor: pointer;
    text-decoration: none;
  }
`;

export default ButtonMore;
