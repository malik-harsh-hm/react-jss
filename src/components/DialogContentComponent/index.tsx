import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  dividers : { value : boolean };
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

const DialogContentComponent = (props: Props): JSX.Element => {
  return (<DialogContent {...mapSitecorePropsToMUIProps(props)}></DialogContent>);
};

export default DialogContentComponent;
