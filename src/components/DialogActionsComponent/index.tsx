import * as React from 'react';
import DialogActions from '@mui/material/DialogActions';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableSpacing : { value : boolean };
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

const DialogActionsComponent = (props: Props): JSX.Element => {
  return (<DialogActions {...mapSitecorePropsToMUIProps(props)}></DialogActions>);
};

export default DialogActionsComponent;
