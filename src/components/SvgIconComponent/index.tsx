import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
  htmlColor : { value : string };
  inheritViewBox : { value : boolean };
  shapeRendering : { value : string };
  titleAccess : { value : string };
  viewBox : { value : string };
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

const SvgIconComponent = (props: Props): JSX.Element => {
  return (<SvgIcon {...mapSitecorePropsToMUIProps(props)}></SvgIcon>);
};

export default SvgIconComponent;
