import * as React from 'react';
import Badge from '@mui/material/Badge';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  invisible : { value : boolean };
  max : { value : number };
  showZero : { value : boolean };
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

const BadgeComponent = (props: Props): JSX.Element => {
  return (<Badge {...mapSitecorePropsToMUIProps(props)}></Badge>);
};

export default BadgeComponent;
