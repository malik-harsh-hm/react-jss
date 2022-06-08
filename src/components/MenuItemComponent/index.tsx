import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoFocus : { value : boolean };
  dense : { value : boolean };
  disabled : { value : boolean };
  disableGutters : { value : boolean };
  divider : { value : boolean };
  focusVisibleClassName : { value : string };
  role : { value : string };
  selected : { value : boolean };
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

const MenuItemComponent = (props: Props): JSX.Element => {
  return (<MenuItem {...mapSitecorePropsToMUIProps(props)}></MenuItem>);
};

export default MenuItemComponent;
