import * as React from 'react';
import Radio from '@mui/material/Radio';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  checked : { value : boolean };
  disabled : { value : boolean };
  disableRipple : { value : boolean };
  id : { value : string };
  name : { value : string };
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

const RadioComponent = (props: Props): JSX.Element => {
  return (<Radio {...mapSitecorePropsToMUIProps(props)}></Radio>);
};

export default RadioComponent;
