import * as React from 'react';
import TextField from '@mui/material/TextField';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoComplete : { value : string };
  autoFocus : { value : boolean };
  className : { value : string };
  disabled : { value : boolean };
  error : { value : boolean };
  fullWidth : { value : boolean };
  id : { value : string };
  multiline : { value : boolean };
  name : { value : string };
  placeholder : { value : string };
  required : { value : boolean };
  select : { value : boolean };
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

const TextFieldComponent = (props: Props): JSX.Element => {
  return (<TextField {...mapSitecorePropsToMUIProps(props)}></TextField>);
};

export default TextFieldComponent;
