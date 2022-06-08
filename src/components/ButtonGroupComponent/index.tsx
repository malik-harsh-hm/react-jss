import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  disableElevation : { value : boolean };
  disableFocusRipple : { value : boolean };
  disableRipple : { value : boolean };
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

const ButtonGroupComponent = (props: Props): JSX.Element => {
  return (<ButtonGroup {...mapSitecorePropsToMUIProps(props)}></ButtonGroup>);
};

export default ButtonGroupComponent;
