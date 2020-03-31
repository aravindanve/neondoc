import React from 'react';
import { Button } from 'rebass';

export const OasResponseCodeSelect = ({ defaultResponseCode, responseCodes, onInput, ...props }) =>
  responseCodes.map((responseCode, key) => (
    <Button
      key={key}
      mr={2}
      px={3}
      py={1}
      fontSize={2}
      variant={responseCode === defaultResponseCode ? 'primary' : 'outline'}
      {...{
        [responseCode === defaultResponseCode ? 'bg' : 'color']: /^2/.test(responseCode)
          ? 'success'
          : /^3/.test(responseCode)
          ? 'warning'
          : /^4/.test(responseCode)
          ? 'danger'
          : 'gray',
      }}
      {...props}
      onClick={onInput ? () => onInput({ target: { value: responseCode } }) : null}
    >
      {responseCode}
    </Button>
  ));
