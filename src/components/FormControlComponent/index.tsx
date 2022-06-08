import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  error : { value : boolean };
  focused : { value : boolean };
  fullWidth : { value : boolean };
  hiddenLabel : { value : boolean };
  required : { value : boolean };
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

const FormControlComponent = (props: Props): JSX.Element => {
  return (<FormControl {...mapSitecorePropsToMUIProps(props)}></FormControl>);
};

export default FormControlComponent;
