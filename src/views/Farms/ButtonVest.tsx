import React, { forwardRef,useCallback, useEffect, useMemo, useState }  from 'react';
import { ButtonAction } from 'src/components/ButtonAction';
import { BigNumber } from '@ethersproject/bignumber';
import styled from 'styled-components';
import useDiamondHand from 'src/hooks/useDiamondHand';
import useHandleTransactionReceipt from 'src/hooks/useHandleTransactionReceipt';
import { useConfiguration } from 'src/contexts/ConfigProvider/ConfigProvider';
import { useTokenBalance } from 'src/contexts/AccountBalanceProvider/AccountBalanceProvider';
import useApprove, { ApprovalState } from 'src/hooks/useApprove';
import ERC20 from 'src/diamondhand/ERC20';

enum ButtonStatus {
  notConnected = 1,
  insufficient = 2,
  requireApproval = 3,
  approvalPending = 4,
  paused = 15,
  ready = 20,
  notEnough = 21,
}

interface ButtonStakeProps {
  amount?: BigNumber;
}

export const ButtonVest: React.ForwardRefRenderFunction<unknown, ButtonStakeProps> = ({ amount }) => {

  const dh = useDiamondHand();
  const handleTransactionReceipt = useHandleTransactionReceipt();
  const config = useConfiguration();
  const [token, setToken] = useState<ERC20 | undefined>();
const balance = useTokenBalance(token);

useEffect(() => {
  if (!dh || token) return;
  setToken(dh.BUSD);
}, [dh, token]);

const buyAddress = useMemo(() => {
  if (!config) {
    return;
  }
  return config?.addresses?.EarlySale;
}, [config]);

const [approvalTokenState, approveToken] = useApprove(token, buyAddress);

  const stake = async () => {
    try {
      const tx = await handleTransactionReceipt(
        dh.EARLYSALE?.VestmyCuffies(amount),
        `Buy Vested Cuffies`,
      );
      if (tx && tx.response) {
        await tx.response.wait();
        tx.hideModal();
      }
    } catch {
      //
    }
  };

  const status = useMemo(() => {


    if (approvalTokenState == ApprovalState.PENDING) {
      return ButtonStatus.approvalPending;
    }

    if (approvalTokenState !== ApprovalState.APPROVED) {
      return ButtonStatus.requireApproval;
    }

    return ButtonStatus.ready;
  }, [approvalTokenState, balance]);

  const buttonText = useMemo(() => {
    switch (status) {
      case ButtonStatus.approvalPending:
        return `Approving ${token?.symbol}...`;

      case ButtonStatus.requireApproval:
        return 'Approve';
      default:
        return 'Buy';
    }
  }, [status, token]);


  const onClickBuy = useCallback(async () => {
    switch (status) {
      case ButtonStatus.requireApproval:
        await approveToken();
        break;
      case ButtonStatus.approvalPending:
        break;
      case ButtonStatus.ready:
        stake();
        break;
    }
  }, [status,  approveToken, stake]);

  return <StyledButtonAction onClick={onClickBuy}>{buttonText}</StyledButtonAction>;
};

const StyledButtonAction = styled(ButtonAction)`
  display: inline-block;
  width: initial;
  text-color: #f4b5d2;
  background-color: #fcdcf2;
  :hover {
    background-color:#a1118b;
  }
`;
