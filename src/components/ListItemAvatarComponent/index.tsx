import * as React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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

const ListItemAvatarComponent = (props: Props): JSX.Element => {
  return (<ListItemAvatar {...mapSitecorePropsToMUIProps(props)}></ListItemAvatar>);
};

export default ListItemAvatarComponent;
