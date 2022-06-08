import * as React from 'react';
import Button from '@mui/material/Button';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  disableElevation : { value : boolean };
  disableFocusRipple : { value : boolean };
  disableRipple : { value : boolean };
  focusVisibleClassName : { value : string };
  fullWidth : { value : boolean };
  href : { value : string };
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

const ButtonComponent = (props: Props): JSX.Element => {
  return (<Button {...mapSitecorePropsToMUIProps(props)}></Button>);
};

export default ButtonComponent;
