import * as React from 'react';
import Switch from '@mui/material/Switch';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  checked : { value : boolean };
  className : { value : string };
  defaultChecked : { value : boolean };
  disabled : { value : boolean };
  disableRipple : { value : boolean };
  id : { value : string };
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

const SwitchComponent = (props: Props): JSX.Element => {
  return (<Switch {...mapSitecorePropsToMUIProps(props)}></Switch>);
};

export default SwitchComponent;
