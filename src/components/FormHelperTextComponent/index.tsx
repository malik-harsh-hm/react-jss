import * as React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  error : { value : boolean };
  filled : { value : boolean };
  focused : { value : boolean };
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

const FormHelperTextComponent = (props: Props): JSX.Element => {
  return (<FormHelperText {...mapSitecorePropsToMUIProps(props)}></FormHelperText>);
};

export default FormHelperTextComponent;
