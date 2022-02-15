const addressDetailsKey = instance.parent.parent.components.find(comp => comp.component.properties.fieldName === "addressDetails")?.component.key;
const addressDetailsData = data[addressDetailsKey];
const cantfindAddressKey = instance.parent.parent.components.find(comp => comp.component.properties.fieldName === "cantfindAddress")?.component.key;
const cantfindAddressData = data[cantfindAddressKey];
const address = addressDetailsData?.ParseAddressResponse?.ParseAddressResult?.Results?.Result?.Address;

if (!cantfindAddressData && address?.Postcode) {
  value = address.Postcode;
}