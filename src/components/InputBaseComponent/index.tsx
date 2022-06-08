import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  ariadescribedby : { value : string };
  autoComplete : { value : string };
  autoFocus : { value : boolean };
  className : { value : string };
  disabled : { value : boolean };
  disableInjectingGlobalStyles : { value : boolean };
  error : { value : boolean };
  fullWidth : { value : boolean };
  id : { value : string };
  multiline : { value : boolean };
  name : { value : string };
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

const InputBaseComponent = (props: Props): JSX.Element => {
  return (<InputBase {...mapSitecorePropsToMUIProps(props)}></InputBase>);
};

export default InputBaseComponent;
