import * as React from 'react';
import Input from '@mui/material/Input';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoComplete : { value : string };
  autoFocus : { value : boolean };
  disabled : { value : boolean };
  disableUnderline : { value : boolean };
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

const InputComponent = (props: Props): JSX.Element => {
  return (<Input {...mapSitecorePropsToMUIProps(props)}></Input>);
};

export default InputComponent;
