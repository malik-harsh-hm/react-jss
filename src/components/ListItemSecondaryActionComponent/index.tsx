import * as React from 'react';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
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

const ListItemSecondaryActionComponent = (props: Props): JSX.Element => {
  return (<ListItemSecondaryAction {...mapSitecorePropsToMUIProps(props)}></ListItemSecondaryAction>);
};

export default ListItemSecondaryActionComponent;
