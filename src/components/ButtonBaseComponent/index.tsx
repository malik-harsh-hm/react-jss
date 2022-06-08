import * as React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  centerRipple : { value : boolean };
  className : { value : string };
  disabled : { value : boolean };
  disableRipple : { value : boolean };
  disableTouchRipple : { value : boolean };
  focusRipple : { value : boolean };
  focusVisibleClassName : { value : string };
  tabIndex : { value : number };
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

const ButtonBaseComponent = (props: Props): JSX.Element => {
  return (<ButtonBase {...mapSitecorePropsToMUIProps(props)}></ButtonBase>);
};

export default ButtonBaseComponent;
