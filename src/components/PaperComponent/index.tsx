import * as React from 'react';
import Paper from '@mui/material/Paper';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  square : { value : boolean };
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

const PaperComponent = (props: Props): JSX.Element => {
  return (<Paper {...mapSitecorePropsToMUIProps(props)}></Paper>);
};

export default PaperComponent;
