import React from 'react';
import { Select } from '@rebass/forms';

export const OasMediaTypeSelect = ({ defaultMediaType, mediaTypes, ...props }) => (
  <Select
    defaultValue={defaultMediaType}
    disabled={!mediaTypes.length}
    sx={{
      fontSize: 1,
      py: 1,
      ':disabled': {
        color: 'lightgray',
      },
    }}
    {...props}
  >
    {!mediaTypes.length ? (
      <option>No media types&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
    ) : (
      mediaTypes.map((mediaType) => (
        // HACK: &nbsp;s are for sizing the select control properly
        <option key={mediaType} value={mediaType}>
          {mediaType}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </option>
      ))
    )}
  </Select>
);
