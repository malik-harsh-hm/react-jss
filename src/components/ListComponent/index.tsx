import * as React from 'react';
import List from '@mui/material/List';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  dense : { value : boolean };
  disablePadding : { value : boolean };
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

const ListComponent = (props: Props): JSX.Element => {
  return (<List {...mapSitecorePropsToMUIProps(props)}></List>);
};

export default ListComponent;
