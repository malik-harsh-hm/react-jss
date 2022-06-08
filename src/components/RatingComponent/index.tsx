import * as React from 'react';
import Rating from '@mui/material/Rating';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  defaultValue : { value : number };
  disabled : { value : boolean };
  highlightSelectedOnly : { value : boolean };
  max : { value : number };
  name : { value : string };
  readOnly : { value : boolean };
  value : { value : number };
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

const RatingComponent = (props: Props): JSX.Element => {
  return (<Rating {...mapSitecorePropsToMUIProps(props)}></Rating>);
};

export default RatingComponent;
