import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  value : { value : number };
  valueBuffer : { value : number };
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

const LinearProgressComponent = (props: Props): JSX.Element => {
  return (<LinearProgress {...mapSitecorePropsToMUIProps(props)}></LinearProgress>);
};

export default LinearProgressComponent;
