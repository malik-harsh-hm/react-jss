import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
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

const FormLabelComponent = (props: Props): JSX.Element => {
  return (<FormLabel {...mapSitecorePropsToMUIProps(props)}></FormLabel>);
};

export default FormLabelComponent;
