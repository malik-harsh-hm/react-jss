import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disableTypography : { value : boolean };
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

const CardHeaderComponent = (props: Props): JSX.Element => {
  return (<CardHeader {...mapSitecorePropsToMUIProps(props)}></CardHeader>);
};

export default CardHeaderComponent;
