import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  showLabels : { value : boolean };
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

const BottomNavigationComponent = (props: Props): JSX.Element => {
  return (<BottomNavigation {...mapSitecorePropsToMUIProps(props)}></BottomNavigation>);
};

export default BottomNavigationComponent;
