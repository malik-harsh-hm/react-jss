import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  enableColorScheme : { value : boolean };
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

const ScopedCssBaselineComponent = (props: Props): JSX.Element => {
  return (<ScopedCssBaseline {...mapSitecorePropsToMUIProps(props)}></ScopedCssBaseline>);
};

export default ScopedCssBaselineComponent;
