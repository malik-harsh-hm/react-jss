import * as React from 'react';
import PaginationItem from '@mui/material/PaginationItem';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  selected : { value : boolean };
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

const PaginationItemComponent = (props: Props): JSX.Element => {
  return (<PaginationItem {...mapSitecorePropsToMUIProps(props)}></PaginationItem>);
};

export default PaginationItemComponent;
