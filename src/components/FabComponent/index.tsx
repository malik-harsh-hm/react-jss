import * as React from 'react';
import Fab from '@mui/material/Fab';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  disableFocusRipple : { value : boolean };
  disableRipple : { value : boolean };
  focusVisibleClassName : { value : string };
  href : { value : string };
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

const FabComponent = (props: Props): JSX.Element => {
  return (<Fab {...mapSitecorePropsToMUIProps(props)}></Fab>);
};

export default FabComponent;
