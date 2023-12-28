import _ from "lodash";

const CustomAddressProvider = Formio.Providers.providers.address.custom;

const defaultApiBase = "https://www.address.services.qld.gov.au";

export class PlsPlusAddressProvider extends CustomAddressProvider {
  static get name() {
    return "plsPlus";
  }

  static get displayName() {
    return "PLS Plus";
  }

  get queryProperty() {
    return "query";
  }

  get responseProperty() {
    return "AutoCompleteAddressResponse.AutoCompleteAddressResult.string";
  }

  get displayValueProperty() {
    return "autocompleteAddress";
  }

  getAddress1(addressLine) {
    if (
      addressLine.siteName &&
      addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.siteName;
    }
    if (
      !addressLine.siteName &&
      addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.complexDesc;
    }
    if (
      addressLine.siteName &&
      !addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.siteName;
    }
    if (
      !addressLine.siteName &&
      !addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.streetAddress;
    }
    return "";
  }

  getAddress2(addressLine) {
    if (
      addressLine.siteName &&
      addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.complexDesc;
    }
    if (
      !addressLine.siteName &&
      addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.streetAddress;
    }
    if (
      addressLine.siteName &&
      !addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.streetAddress;
    }
    return "";
  }

  getAddress3(addressLine) {
    if (
      addressLine.siteName &&
      addressLine.complexDesc &&
      addressLine.streetAddress
    ) {
      return addressLine.streetAddress;
    }
    return "";
  }

  getCity(addressLine) {
    return addressLine.Locality || "";
  }

  getState(addressLine) {
    return addressLine.State || "";
  }

  getPostcode(addressLine) {
    return addressLine.Postcode || "";
  }

  breakAddress(address) {
    const siteName = address.SiteName || "";
    const lot = address.Parcel?.Lot ? `LOT ${address.Parcel.Lot}` : undefined;
    const complexDesc = [
      lot,
      address.Unit?.TypeCode,
      address.Unit?.Number,
      address.Level?.TypeCode,
      address.Level?.Number,
    ]
      .filter((o) => o !== undefined)
      .join(" ");
    const roadNumberPart = [
      address.RoadNumber?.First,
      address.RoadNumber?.Last ? "-" : undefined,
      address.RoadNumber?.Last,
    ]
      .filter((o) => o !== undefined)
      .join("");
    const streetAddress = [
      roadNumberPart,
      address.Road?.Name,
      address.Road?.TypeCode,
      address.Road?.Suffix,
    ]
      .filter((o) => o !== undefined)
      .join(" ");

    const addressLine = {
      siteName,
      lot,
      complexDesc,
      roadNumberPart,
      streetAddress,
      Locality: address.Locality,
      State: address.State,
      Postcode: address.Postcode,
    };

    return {
      address1: this.getAddress1(addressLine),
      address2: this.getAddress2(addressLine),
      address3: this.getAddress3(addressLine),
      city: this.getCity(addressLine),
      state: this.getState(addressLine),
      postcode: this.getPostcode(addressLine),
    };
  }

  makeParseRequest(options = {}) {
    return Formio.makeStaticRequest(
      this.getParseRequestUrl(options),
      "GET",
      null,
      {
        noToken: true,
      }
    );
  }

  parseAddress(query, options = {}) {
    const requestOptions = this.getRequestOptions(options);
    const params = requestOptions.params || {};
    params[this.queryProperty] = query.trim();

    return this.makeParseRequest(requestOptions).then((response) => {
      const resultCount = parseFloat(
        response.ParseAddressResponse.ParseAddressResult.ResultCount
      );
      if (resultCount === 0) return {};
      if (resultCount === 1)
        return response.ParseAddressResponse.ParseAddressResult.Results.Result
          .Address;
      return _.maxBy(
        response.ParseAddressResponse.ParseAddressResult.Results.Result,
        (r) => r.Confidence
      ).Address;
    });
  }

  search(query, options = {}) {
    const requestOptions = this.getRequestOptions(options);
    const params = requestOptions.params || {};
    params[this.queryProperty] = query.trim();

    return this.makeRequest(requestOptions).then((result) =>
      this.responseProperty ? _.get(result, this.responseProperty, []) : result
    );
  }

  getDisplayValue(address) {
    return _.isEmpty(address)
      ? ""
      : _.get(address, this.displayValueProperty, "");
  }

  getRequestUrl(options = {}) {
    const { params, apiBase } = options;
    return `${
      apiBase || defaultApiBase
    }/pls-plus-qg/AutoCompleteAddress?${this.serialize(params)}`;
  }

  getParseRequestUrl(options = {}) {
    const { params, apiBase } = options;
    return `${
      apiBase || defaultApiBase
    }/pls-plus-qg/ParseAddress?${this.serialize(params)}`;
  }
}
