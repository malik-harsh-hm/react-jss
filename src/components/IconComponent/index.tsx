import * as React from 'react';
import Icon from '@mui/material/Icon';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  baseClassName : { value : string };
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

const IconComponent = (props: Props): JSX.Element => {
  return (<Icon {...mapSitecorePropsToMUIProps(props)}></Icon>);
};

export default IconComponent;
