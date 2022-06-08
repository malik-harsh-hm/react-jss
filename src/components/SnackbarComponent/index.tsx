import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  autoHideDuration : { value : number };
  className : { value : string };
  disableWindowBlurListener : { value : boolean };
  open : { value : boolean };
  resumeHideDuration : { value : number };
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

const SnackbarComponent = (props: Props): JSX.Element => {
  return (<Snackbar {...mapSitecorePropsToMUIProps(props)}></Snackbar>);
};

export default SnackbarComponent;
