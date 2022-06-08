import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoComplete : { value : string };
  autoFocus : { value : boolean };
  disabled : { value : boolean };
  error : { value : boolean };
  fullWidth : { value : boolean };
  id : { value : string };
  multiline : { value : boolean };
  name : { value : string };
  notched : { value : boolean };
  placeholder : { value : string };
  readOnly : { value : boolean };
  required : { value : boolean };
  type : { value : string };
};

type Props = {
  /**
   * Authorable fields
   */
  fields: SitecoreFields;
  /**
   * Non-Authorable fields
   */
  /**
   * Handlers
   */
};

const OutlinedInputComponent = (props: Props): JSX.Element => {
  return (<OutlinedInput {...mapSitecorePropsToMUIProps(props)}></OutlinedInput>);
};

export default OutlinedInputComponent;
