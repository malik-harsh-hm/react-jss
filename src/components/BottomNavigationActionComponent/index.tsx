import * as React from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  showLabel : { value : boolean };
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

const BottomNavigationActionComponent = (props: Props): JSX.Element => {
  return (<BottomNavigationAction {...mapSitecorePropsToMUIProps(props)}></BottomNavigationAction>);
};

export default BottomNavigationActionComponent;
