import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  disabled : { value : boolean };
  hideNextButton : { value : boolean };
  hidePrevButton : { value : boolean };
  showFirstButton : { value : boolean };
  showLastButton : { value : boolean };
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

const PaginationComponent = (props: Props): JSX.Element => {
  return (<Pagination {...mapSitecorePropsToMUIProps(props)}></Pagination>);
};

export default PaginationComponent;
