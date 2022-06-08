import * as React from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import { mapSitecorePropsToMUIProps } from '../../utils/utils';

type SitecoreFields = {
  className : { value : string };
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

const NativeSelectComponent = (props: Props): JSX.Element => {
  return (<NativeSelect {...mapSitecorePropsToMUIProps(props)}></NativeSelect>);
};

export default NativeSelectComponent;
