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

if (!cantfindAddressData && address && address.Postcode) {
  value = address.Postcode;
}
