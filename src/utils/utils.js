export const mapSitecorePropsToMUIProps = (sitecoreProps) => {
    let muiProps = {};

    for (var key of Object.keys(sitecoreProps['fields'])) {
        let value = sitecoreProps['fields'][key]['value'];
        muiProps[key] = value;
    }
    return muiProps;
}
