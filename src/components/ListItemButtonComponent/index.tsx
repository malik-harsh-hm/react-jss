import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoFocus : { value : boolean };
  dense : { value : boolean };
  disabled : { value : boolean };
  disableGutters : { value : boolean };
  divider : { value : boolean };
  focusVisibleClassName : { value : string };
  href : { value : string };
  selected : { value : boolean };
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

const ListItemButtonComponent = (props: Props): JSX.Element => {
  return (<ListItemButton {...mapSitecorePropsToMUIProps(props)}></ListItemButton>);
};

export default ListItemButtonComponent;
