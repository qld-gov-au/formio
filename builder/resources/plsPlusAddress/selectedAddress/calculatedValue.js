const cantfindAddressData = getComponentData({
  data,
  parentComponent: instance.parent,
  fieldName: "cantfindAddress",
});
const suggestedAddressData = getComponentData({
  data,
  parentComponent: instance.parent,
  fieldName: "suggestedAddress",
});
const addressPartsComp = getComponent({
  data,
  parentComponent: instance.parent,
  fieldName: "addressParts",
});

if (cantfindAddressData !== true && suggestedAddressData) {
  value = suggestedAddressData.address;
} else if (cantfindAddressData === true && addressPartsComp) {
  const addressLine1Data = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "addressLine1",
  });
  const addressLine2Data = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "addressLine2",
  });
  const addressLine3Data = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "addressLine3",
  });
  const cityData = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "city",
  });
  const stateData = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "state",
  });
  const postcodeData = getComponentData({
    data,
    parentComponent: addressPartsComp,
    fieldName: "postcode",
  });

  const addrLine =
    `${addressLine1Data} ${addressLine2Data} ${addressLine3Data}`.replace(
      / {2}/g,
      " "
    );
  const locality = `${cityData} ${stateData} ${postcodeData}`.replace(
    / {2}/g,
    " "
  );
  value = `${addrLine} ${locality}`.replace(/ {2}/g, " ").trim();
}
