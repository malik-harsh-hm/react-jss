import * as React from 'react';
import AlertTitle from '@mui/material/AlertTitle';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
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

const AlertTitleComponent = (props: Props): JSX.Element => {
  return (<AlertTitle {...mapSitecorePropsToMUIProps(props)}></AlertTitle>);
};

export default AlertTitleComponent;
