const cantfindAddressData = getComponentData({data: data, parentComponent: instance.parent.parent, fieldName: "cantfindAddress"});
const addressDetailsData = getComponentData({data: data, parentComponent: instance.parent.parent, fieldName: "addressDetails"});
const address = getPlsPlusAddress(addressDetailsData);

if (!cantfindAddressData && address) {
    const siteName = address.SiteName || '';
    const lot = (address.Parcel && address.Parcel.Lot) ? 'LOT ' + address.Parcel.Lot : undefined;
    const complexDesc = [lot, address.Unit ? address.Unit.TypeCode : undefined, address.Unit ? address.Unit.Number : undefined, address.Level ? address.Level.TypeCode : undefined, address.Level ? address.Level.Number : undefined].filter( function (o) { return o !== undefined } ).join(' ');
    const roadNumberPart = [address.RoadNumber ? address.RoadNumber.First : undefined, (address.RoadNumber && address.RoadNumber.Last) ? '-' : undefined, address.RoadNumber ? address.RoadNumber.Last : undefined].filter( function (o) { return o !== undefined } ).join(''); 
    const streetAddress = [roadNumberPart, address.Road ? address.Road.Name : undefined, address.Road ? address.Road.TypeCode : undefined].filter( function (o) { return o !== undefined } ).join(' ');

    if (siteName && complexDesc && streetAddress) {
        value = streetAddress;
    } else {
        value = "";
    }
}