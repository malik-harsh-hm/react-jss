import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableGutters : { value : boolean };
  disableSticky : { value : boolean };
  inset : { value : boolean };
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

const ListSubheaderComponent = (props: Props): JSX.Element => {
  return (<ListSubheader {...mapSitecorePropsToMUIProps(props)}></ListSubheader>);
};

export default ListSubheaderComponent;
