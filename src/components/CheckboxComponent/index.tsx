import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  checked : { value : boolean };
  defaultChecked : { value : boolean };
  disabled : { value : boolean };
  disableRipple : { value : boolean };
  id : { value : string };
  indeterminate : { value : boolean };
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

const CheckboxComponent = (props: Props): JSX.Element => {
  return (<Checkbox {...mapSitecorePropsToMUIProps(props)}></Checkbox>);
};

export default CheckboxComponent;
