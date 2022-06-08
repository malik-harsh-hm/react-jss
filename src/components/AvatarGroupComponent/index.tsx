import * as React from 'react';
import AvatarGroup from '@mui/material/AvatarGroup';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  total : { value : number };
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

const AvatarGroupComponent = (props: Props): JSX.Element => {
  return (<AvatarGroup {...mapSitecorePropsToMUIProps(props)}></AvatarGroup>);
};

export default AvatarGroupComponent;
