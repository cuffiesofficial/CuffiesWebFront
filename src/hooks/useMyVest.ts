import { useEffect, useState } from 'react';
import { BigNumber } from '@ethersproject/bignumber';
import { useWeb3React } from '@web3-react/core';
import useDiamondHand from './useDiamondHand';

const useMyVest = () => {
  const dh = useDiamondHand();
  const [myVestamount, setmyVestamount] = useState<BigNumber>();
  const { account } = useWeb3React();

  useEffect(() => {
    let mounted = true;
    if (!dh || !account) {
      return;
    }

    dh.EARLYSALE.getVested(account).then((result) => {
      if (!mounted) {
        return;
      }
      setmyVestamount(result);
    });
    return () => {
      mounted = false;
    };
  }, [dh, account]);

  return myVestamount;
};

export default useMyVest;
