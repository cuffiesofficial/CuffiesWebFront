import React from 'react';

import CuffiesLogo from 'src/assets/img/tokens/Cuffies.png';
import NoLogo from 'src/assets/img/no_name.png';
import styled from 'styled-components';

const logosBySymbol: { [title: string]: string } = {
  Cuffies: CuffiesLogo,
  NOLOGO: NoLogo,
};

type TokenSymbolProps = {
  symbol: string;
  size?: number;
  noBorder?: boolean;
};

const TokenSymbol: React.FC<TokenSymbolProps> = ({ symbol, size = 64, noBorder = false }) => {
  return (
    <StyleImage
      src={logosBySymbol[symbol] ? logosBySymbol[symbol] : logosBySymbol['NOLOGO']}
      alt={`${symbol} Logo`}
      height={size}
      noBorder={noBorder}
    />
  );
};

export default TokenSymbol;

const StyleImage = styled.img<{ noBorder?: boolean }>``;
