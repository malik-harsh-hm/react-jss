import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoFocus : { value : boolean };
  button : { value : boolean };
  className : { value : string };
  dense : { value : boolean };
  disabled : { value : boolean };
  disableGutters : { value : boolean };
  disablePadding : { value : boolean };
  divider : { value : boolean };
  focusVisibleClassName : { value : string };
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

const ListItemComponent = (props: Props): JSX.Element => {
  return (<ListItem {...mapSitecorePropsToMUIProps(props)}></ListItem>);
};

export default ListItemComponent;
