const cantfindAddressData = getComponentData({
  data,
  parentComponent: instance.parent.parent,
  fieldName: "cantfindAddress",
});
const addressDetailsData = getComponentData({
  data,
  parentComponent: instance.parent.parent,
  fieldName: "addressDetails",
});
const address = getPlsPlusAddress(addressDetailsData);

if (!cantfindAddressData && address) {
  const addressLine = getPlsPlusAddressLines(address);
  if (
    addressLine.siteName &&
    addressLine.complexDesc &&
    addressLine.streetAddress
  ) {
    value = addressLine.siteName;
  } else if (
    !addressLine.siteName &&
    addressLine.complexDesc &&
    addressLine.streetAddress
  ) {
    value = addressLine.complexDesc;
  } else if (
    addressLine.siteName &&
    !addressLine.complexDesc &&
    addressLine.streetAddress
  ) {
    value = addressLine.siteName;
  } else if (
    !addressLine.siteName &&
    !addressLine.complexDesc &&
    addressLine.streetAddress
  ) {
    value = addressLine.streetAddress;
  }
}
