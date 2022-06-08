import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  alt : { value : string };
  className : { value : string };
  sizes : { value : string };
  src : { value : string };
  srcSet : { value : string };
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

const AvatarComponent = (props: Props): JSX.Element => {
  return (<Avatar {...mapSitecorePropsToMUIProps(props)}></Avatar>);
};

export default AvatarComponent;
