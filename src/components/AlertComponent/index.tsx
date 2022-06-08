import * as React from 'react';
import Alert from '@mui/material/Alert';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  closeText : { value : string };
  role : { value : string };
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

const AlertComponent = (props: Props): JSX.Element => {
  return (<Alert {...mapSitecorePropsToMUIProps(props)}></Alert>);
};

export default AlertComponent;
