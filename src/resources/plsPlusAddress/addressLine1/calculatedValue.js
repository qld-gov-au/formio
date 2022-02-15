const addressDetailsKey = instance.parent.parent.components.find(comp => comp.component.properties.fieldName === "addressDetails")?.component.key;
const addressDetailsData = data[addressDetailsKey];
const cantfindAddressKey = instance.parent.parent.components.find(comp => comp.component.properties.fieldName === "cantfindAddress")?.component.key;
const cantfindAddressData = data[cantfindAddressKey];
const address = addressDetailsData?.ParseAddressResponse?.ParseAddressResult?.Results?.Result?.Address;

if (!cantfindAddressData && address) {
    const siteName = address.SiteName || '';
    const lot = address.Parcel?.Lot ? 'LOT ' + address.Parcel.Lot : undefined;
    const complexDesc = [lot, address.Unit?.TypeCode, address.Unit?.Number, address.Level?.TypeCode, address.Level?.Number].filter(o => o !== undefined).join(' ');
    const roadNumberPart = [address.RoadNumber?.First, address.RoadNumber?.Last ? '-' : undefined, address.RoadNumber?.Last].filter(o => o !== undefined).join(''); 
    const streetAddress = [roadNumberPart, address.Road?.Name, address.Road?.TypeCode].filter(o => o !== undefined).join(' ');
    if (siteName && complexDesc && streetAddress) {
        value = siteName;
    } else if (!siteName && complexDesc && streetAddress) {
        value = complexDesc;
    } else if (siteName && !complexDesc && streetAddress) {
        value = siteName;
    } else if (!siteName && !complexDesc && streetAddress) {
        value = streetAddress;
    }
}