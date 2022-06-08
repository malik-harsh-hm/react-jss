import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  enableColorOnDark : { value : boolean };
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

const AppBarComponent = (props: Props): JSX.Element => {
  return (<AppBar {...mapSitecorePropsToMUIProps(props)}></AppBar>);
};

export default AppBarComponent;
