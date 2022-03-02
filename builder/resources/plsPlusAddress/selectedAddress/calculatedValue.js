const cantfindAddressData = getComponentData({data: data, parentComponent: instance.parent, fieldName: "cantfindAddress"});
const suggestedAddressData = getComponentData({data: data, parentComponent: instance.parent, fieldName: "suggestedAddress"});
const addressPartsComp = getComponent({data: data, parentComponent: instance.parent, fieldName: "addressParts"});

if (cantfindAddressData !== true && suggestedAddressData) {
  value = suggestedAddressData.address;
} else if (cantfindAddressData === true && addressPartsComp) {
  const addressLine1Data = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "addressLine1"});
  const addressLine2Data = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "addressLine2"});
  const addressLine3Data = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "addressLine3"});
  const cityData = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "city"});
  const stateData = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "state"});
  const postcodeData = getComponentData({data: data, parentComponent: addressPartsComp, fieldName: "postcode"});

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