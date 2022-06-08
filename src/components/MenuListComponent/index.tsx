import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoFocus : { value : boolean };
  autoFocusItem : { value : boolean };
  className : { value : string };
  disabledItemsFocusable : { value : boolean };
  disableListWrap : { value : boolean };
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

const MenuListComponent = (props: Props): JSX.Element => {
  return (<MenuList {...mapSitecorePropsToMUIProps(props)}></MenuList>);
};

export default MenuListComponent;
