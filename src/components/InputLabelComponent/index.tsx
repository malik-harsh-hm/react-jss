import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  disableAnimation : { value : boolean };
  disabled : { value : boolean };
  error : { value : boolean };
  focused : { value : boolean };
  required : { value : boolean };
  shrink : { value : boolean };
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

const InputLabelComponent = (props: Props): JSX.Element => {
  return (<InputLabel {...mapSitecorePropsToMUIProps(props)}></InputLabel>);
};

export default InputLabelComponent;
