import { BigNumber } from '@ethersproject/bignumber';
import React, { useEffect, useMemo, useState,MouseEvent} from 'react';
import {Link } from "react-router-dom";
import { Box, BoxBody, BoxHeader, BoxTitle } from 'src/components/Box';
import NumberDisplay from 'src/components/Number';
import { ExternalLinks } from 'src/config';
import styled from 'styled-components';
import useDiamondHand from 'src/hooks/useDiamondHand';
import theme from 'src/theme';
import TokenSymbol from 'src/components/TokenSymbol';
import ERC20 from 'src/diamondhand/ERC20';
import scv from 'src/assets/img/scv.png';
interface HowItWorksProps {
  costPerTicket: BigNumber;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ costPerTicket }) => {
  const dh = useDiamondHand();
  const [token, setToken] = useState<ERC20 | undefined>();

  useEffect(() => {
    if (!dh || token) return;
    setToken(dh.CUFFIES);
  }, [dh, token]);
  return (
    <Box>
      <BoxHeader bg="#12161e">
        <BoxTitle>Join $CUFFIES Early Sale</BoxTitle>
      </BoxHeader>
      <BoxBody>
        <StyledWrapper>
        A DeFi startup powered by crypto.
        <p>
        We are now in developing stages, seeking an investment from the community to bootstrap the developments of the Cuffies app.
        </p>


              <a href={ExternalLinks.buyCuffies} target="_blank">
                How to invest:
              </a>{' '}



          <StyledItem>
            <StyledOrder>1</StyledOrder>
            <StyledContent>

              Wrap your BNB by converting {' '}
              <a href={ExternalLinks.convertWBNB} target="_blank">
              BNB to WBNB
              </a>{' '}

            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder>2</StyledOrder>
            <StyledContent>
              Choose one of our plans and get your hands on the lowest available price possible of our token!




            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>3</StyledOrder>
            <StyledContent>
             Enjoy!
                <TokenSymbol size={24} symbol={token?.symbol} />{' '}
             {' '}

            </StyledContent>
          </StyledItem>

        </StyledWrapper>
      </BoxBody>
    </Box>
  );
};

const StyledWrapper = styled.div`
  padding: 12px 25px;
  @media (max-width: 768px) {
    padding: 12px 1px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: start;
  :not(:last-child) {
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    min-height: 70px;
    :not(:last-child) {
      padding-bottom: 20px;
    }
  }
`;

const StyledOrder = styled.div<{ lastOrder?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  ${({ lastOrder }) =>
    !lastOrder &&
    `:after {
      content: '';
      height: 60px;
      width: 1px;
      border-right: 2px dashed #f2f2f2;
      top: 32px;
      position: absolute;
      @media (max-width: 768px) {
        height: 60px;
      }
    }`}
`;

const Scv = styled.img`
  height: 40px;

  position: relative;
  z-index:2;
top:10px;
`;
const StyledContent = styled.div`
  margin-left: 15px;
  font-weight: 300;
  flex: 1;
  a {
   color: ${(p) => p.theme.color.secondary};
    font-weight: 600;
    &:hover {
      color: ${(p) => p.theme.color.primary.light};
    }
  }
  @media (max-width: 768px) {
    margin-left: 8px;
  }
  ul {
    margin: 0;
  }
`;

export default HowItWorks;
