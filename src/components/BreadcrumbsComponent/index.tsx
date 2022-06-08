import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  expandText : { value : string };
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

const BreadcrumbsComponent = (props: Props): JSX.Element => {
  return (<Breadcrumbs {...mapSitecorePropsToMUIProps(props)}></Breadcrumbs>);
};

export default BreadcrumbsComponent;
