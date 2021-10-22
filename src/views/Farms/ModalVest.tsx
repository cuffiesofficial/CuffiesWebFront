import React, { useCallback, useState } from 'react';
import Modal, {
  ModalCloseButton,
  ModalHeader,
  ModalProps,
  ModalTitle,
} from 'src/components/Modal';
import styled from 'styled-components';
import TokenInput from 'src/components/TokenInput';
import useDiamondHand from 'src/hooks/useDiamondHand';
import { FormRow, FormToken } from 'src/components/Form';
import TokenSymbol from 'src/components/TokenSymbol';
import Number from 'src/components/Number';
import { BigNumber } from '@ethersproject/bignumber';
import { useTokenBalance } from 'src/contexts/AccountBalanceProvider/AccountBalanceProvider';
import { ButtonVest } from './ButtonVest';
import icDiamondChest from '../../assets/img/ic-diamondchest.svg';

export type ModalStakeProps = ModalProps & {

  token?: string;
};

export const ModalVest: React.FC<ModalStakeProps> = ({ onDismiss, token }) => {
  const diamondHand = useDiamondHand();
  const [stakeAmount, setStakeAmount] = useState<BigNumber>(BigNumber.from(0));
  const BnbBalance = useTokenBalance(diamondHand?.BUSD);
  const shareBalance = useTokenBalance(diamondHand?.CUFFIES);
  const price=BigNumber.from(108);
  let cuffieAmount= stakeAmount.mul(price);
  console.log(cuffieAmount);

  const updateShareAmount = useCallback((ev) => {
    setStakeAmount(ev);
    cuffieAmount= stakeAmount.mul(price);
    console.log(cuffieAmount);
  }, []);

  return (
    <Modal size="md" padding="0">

      <ModalContent>
        <FormRowLeftTitle>

          You have{' '}
          <strong>
            {BnbBalance && (
              <Number
                value={BnbBalance}
                decimals={diamondHand?.BUSD.decimals}
                precision={6}
              />
            )}{' '}
            {diamondHand?.BUSD.symbol}
          </strong>{' '}
          &nbsp;available
        </FormRowLeftTitle>
        <FormRowLeftTitle>

          1 BUSD = {price.toNumber()} {' '}{diamondHand?.CUFFIES.symbol}
          </FormRowLeftTitle>


        <FormRow>
          <div className="row-input">
            <TokenInput
              hasError={false}
              token={diamondHand?.BUSD}
              decimals={18}
              precision={6}
              onChange={updateShareAmount}
            />
<TextColor>
<strong>
{' '}
  You Receive: {' '}
            <Number
                value={cuffieAmount}
                decimals={diamondHand?.BUSD.decimals}
                precision={6}
              />
              {' '}

          </strong>{' '}

          </TextColor>


            <FormToken>
              <TokenSymbol size={32} symbol={diamondHand?.CUFFIES.symbol} noBorder />
              <span>{diamondHand.CUFFIES.symbol}</span>
            </FormToken>


          </div>
        </FormRow>


          <strong>
Enter the amount of BNB you wish to invest
          </strong>{' '}

        <div className="group-button">
          <ButtonVest amount= {stakeAmount}/>
        </div>

      </ModalContent>
    </Modal>
  );
};


const TextColor = styled.div`
color: #c42f2f;

`;
const ModalContent = styled.div`
  padding: 32px;
  .group-button {
    margin-top: 33px;
    justify-content: flex-end;
    display: flex;
  }
`;

const FormRowLeftTitle = styled.div`
  font-size: 16px;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.color.primary.light};
  display: flex;
  align-items: center;
  white-space: pre;
  .image {
    height: 40px;
    margin-right: 10px;
  }
`;

export const ButtonCancel = styled.button`
  padding: 0 15px;
  text-align: center;
  outline: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  border: none;
  margin-right: 20px;
  background: none;
  color: ${({ theme }) => theme.color.primary.main};
  &:hover {
    color: ${({ theme }) => theme.color.green[100]};
  }
`;
