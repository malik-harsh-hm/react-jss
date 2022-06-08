import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
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

const ListItemIconComponent = (props: Props): JSX.Element => {
  return (<ListItemIcon {...mapSitecorePropsToMUIProps(props)}></ListItemIcon>);
};

export default ListItemIconComponent;
