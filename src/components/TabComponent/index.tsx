import * as React from 'react';
import Tab from '@mui/material/Tab';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  disableFocusRipple : { value : boolean };
  disableRipple : { value : boolean };
  wrapped : { value : boolean };
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

const TabComponent = (props: Props): JSX.Element => {
  return (<Tab {...mapSitecorePropsToMUIProps(props)}></Tab>);
};

export default TabComponent;
