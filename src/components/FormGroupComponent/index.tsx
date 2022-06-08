import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  row : { value : boolean };
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

const FormGroupComponent = (props: Props): JSX.Element => {
  return (<FormGroup {...mapSitecorePropsToMUIProps(props)}></FormGroup>);
};

export default FormGroupComponent;
