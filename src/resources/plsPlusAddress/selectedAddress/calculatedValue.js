const suggestedAddressKey = instance.parent.components.find(comp => comp.component.properties.fieldName === "suggestedAddress")?.component.key;
const suggestedAddressData = data[suggestedAddressKey];
const cantfindAddressKey = instance.parent.components.find(comp => comp.component.properties.fieldName === "cantfindAddress")?.component.key;
const cantfindAddressData = data[cantfindAddressKey];
const addressPartsComp = instance.parent.components.find(comp => comp.component.properties.fieldName === "addressParts")?.component;

if (cantfindAddressData !== true && suggestedAddressData) {
  value = suggestedAddressData.address;
} else if (cantfindAddressData === true && addressPartsComp) {
  const addressLine1Key = addressPartsComp.components.find(comp => comp.properties.fieldName === "addressLine1")?.key;
  const addressLine1Data = data[addressLine1Key];
  const addressLine2Key = addressPartsComp.components.find(comp => comp.properties.fieldName === "addressLine2")?.key;
  const addressLine2Data = data[addressLine2Key];
  const addressLine3Key = addressPartsComp.components.find(comp => comp.properties.fieldName === "addressLine3")?.key;
  const addressLine3Data = data[addressLine3Key];
  const cityKey = addressPartsComp.components.find(comp => comp.properties.fieldName === "city")?.key;
  const cityData = data[cityKey];
  const stateKey = addressPartsComp.components.find(comp => comp.properties.fieldName === "state")?.key;
  const stateData = data[stateKey];
  const postcodeKey = addressPartsComp.components.find(comp => comp.properties.fieldName === "postcode")?.key;
  const postcodeData = data[postcodeKey];

  var addrLine = (addressLine1Data
    +" "+ addressLine2Data
    +" "+ addressLine3Data)
    .replace(/  /g,' ');
  var locality = (cityData
    +" "+ stateData
    +" "+ postcodeData)
    .replace(/  /g,' ');
  value = (addrLine +" "+ locality).replace(/  /g,' ').trim();
}