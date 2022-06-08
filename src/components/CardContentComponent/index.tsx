import * as React from 'react';
import CardContent from '@mui/material/CardContent';
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

const CardContentComponent = (props: Props): JSX.Element => {
  return (<CardContent {...mapSitecorePropsToMUIProps(props)}></CardContent>);
};

export default CardContentComponent;
