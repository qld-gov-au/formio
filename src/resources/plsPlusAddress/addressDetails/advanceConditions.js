if (instance.parent) {
  const suggestedAddressKey = getComponentKey({parentComponent: instance.parent, fieldName: "suggestedAddress"});
  if (suggestedAddressKey !== instance.component.refreshOn) instance.component.refreshOn = suggestedAddressKey;
}