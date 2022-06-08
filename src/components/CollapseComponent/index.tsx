import * as React from 'react';
import Collapse from '@mui/material/Collapse';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  in : { value : boolean };
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

const CollapseComponent = (props: Props): JSX.Element => {
  return (<Collapse {...mapSitecorePropsToMUIProps(props)}></Collapse>);
};

export default CollapseComponent;
