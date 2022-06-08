import * as React from 'react';
import Slider from '@mui/material/Slider';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  arialabelledby : { value : string };
  disabled : { value : boolean };
  disableSwap : { value : boolean };
  isRtl : { value : boolean };
  max : { value : number };
  min : { value : number };
  name : { value : string };
  step : { value : number };
  tabIndex : { value : number };
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

const SliderComponent = (props: Props): JSX.Element => {
  return (<Slider {...mapSitecorePropsToMUIProps(props)}></Slider>);
};

export default SliderComponent;
