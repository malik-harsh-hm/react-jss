import * as React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  exclusive : { value : boolean };
  fullWidth : { value : boolean };
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

const ToggleButtonGroupComponent = (props: Props): JSX.Element => {
  return (<ToggleButtonGroup {...mapSitecorePropsToMUIProps(props)}></ToggleButtonGroup>);
};

export default ToggleButtonGroupComponent;
