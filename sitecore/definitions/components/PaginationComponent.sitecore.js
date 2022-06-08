// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the PaginationComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'PaginationComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [ 
    { name: 'className', type: CommonFieldTypes.SingleLineText },
    { name: 'disabled', type: CommonFieldTypes.Checkbox },
    { name: 'hideNextButton', type: CommonFieldTypes.Checkbox },
    { name: 'hidePrevButton', type: CommonFieldTypes.Checkbox },
    { name: 'showFirstButton', type: CommonFieldTypes.Checkbox },
    { name: 'showLastButton', type: CommonFieldTypes.Checkbox },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}