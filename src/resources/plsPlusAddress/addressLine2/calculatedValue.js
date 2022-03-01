const cantfindAddressData = getComponentData({data: data, parentComponent: instance.parent.parent, fieldName: "cantfindAddress"});
const addressDetailsData = getComponentData({data: data, parentComponent: instance.parent.parent, fieldName: "addressDetails"});
const address = getPlsPlusAddress(addressDetailsData);

if (!cantfindAddressData && address) {
    const addressLine = getPlsPlusAddressLines(address);

    if (addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        value = complexDesc;
    } else if (!addressLine.siteName && addressLine.complexDesc && addressLine.streetAddress) {
        value = addressLine.streetAddress;
    } else if (addressLine.siteName && !addressLine.complexDesc && addressLine.streetAddress) {
        value = addressLine.streetAddress;
    } else {
        value = "";
    }
}