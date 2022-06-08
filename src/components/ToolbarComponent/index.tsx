import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableGutters : { value : boolean };
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

const ToolbarComponent = (props: Props): JSX.Element => {
  return (<Toolbar {...mapSitecorePropsToMUIProps(props)}></Toolbar>);
};

export default ToolbarComponent;
