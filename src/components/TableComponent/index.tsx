import * as React from 'react';
import Table from '@mui/material/Table';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  stickyHeader : { value : boolean };
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

const TableComponent = (props: Props): JSX.Element => {
  return (<Table {...mapSitecorePropsToMUIProps(props)}></Table>);
};

export default TableComponent;
