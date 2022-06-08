import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  hideBackdrop : { value : boolean };
  open : { value : boolean };
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

const DrawerComponent = (props: Props): JSX.Element => {
  return (<Drawer {...mapSitecorePropsToMUIProps(props)}></Drawer>);
};

export default DrawerComponent;
