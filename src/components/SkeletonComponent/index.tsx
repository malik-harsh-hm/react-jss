import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
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

const SkeletonComponent = (props: Props): JSX.Element => {
  return (<Skeleton {...mapSitecorePropsToMUIProps(props)}></Skeleton>);
};

export default SkeletonComponent;
