import * as React from 'react';
import FilledInput from '@mui/material/FilledInput';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoComplete : { value : string };
  autoFocus : { value : boolean };
  disabled : { value : boolean };
  disableUnderline : { value : boolean };
  error : { value : boolean };
  fullWidth : { value : boolean };
  hiddenLabel : { value : boolean };
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

const FilledInputComponent = (props: Props): JSX.Element => {
  return (<FilledInput {...mapSitecorePropsToMUIProps(props)}></FilledInput>);
};

export default FilledInputComponent;
