export const parseAddressResultCase1 = {
  ParseAddressResponse: {
    ParseAddressResult: {
      ResultCount: "1",
      Results: {
        Result: {
          PhysicalAddressIndicator: "Y",
          MetaData: [
            {
              Name: "Timestamp",
              Value: "2022-03-14T14:12:30.2306157+10:00",
            },
            {
              Name: "FullAddressString",
              Value: "1-5 TESTA ST, CABOOLTURE QLD 4510",
            },
            {
              Name: "ConfidenceLevel",
              Value: "ValidAddress (100)",
            },
          ],
          Address: {
            RoadNumber: {
              First: "1",
              Last: "5",
            },
            Road: {
              Name: "TESTA",
              TypeCode: "ST",
            },
            Locality: "CABOOLTURE",
            State: "QLD",
            Postcode: "4510",
          },
          Parcel: {
            Lot: "1",
            Plan: "SP218039",
          },
          LocalGovernmentArea: {
            Code: "5010",
            Name: "MORETON BAY REGIONAL",
          },
          Geocode: {
            TypeCode: "PC",
            Latitude: "-27.03178345",
            Longitude: "152.91883446",
          },
          Confidence: "100",
        },
      },
    },
  },
};

export const parseAddressResultCase2 = {
  ParseAddressResponse: {
    ParseAddressResult: {
      ResultCount: "4",
      Results: {
        Result: [
          {
            PhysicalAddressIndicator: "Y",
            MetaData: [
              {
                Name: "Timestamp",
                Value: "2022-03-14T15:19:20.7951418+10:00",
              },
              {
                Name: "FullAddressString",
                Value: "1-7 SAMANTHA CT, FERNY HILLS QLD 4055",
              },
              {
                Name: "ConfidenceLevel",
                Value: "ValidIncomplete (98)",
              },
            ],
            Address: {
              RoadNumber: {
                First: "1",
                Last: "7",
              },
              Road: {
                Name: "SAMANTHA",
                TypeCode: "CT",
              },
              SiteName: "BIRRALEE CHILD CARE CENTRE",
              Locality: "FERNY HILLS",
              State: "QLD",
              Postcode: "4055",
            },
            Parcel: {
              Lot: "13",
              Plan: "RP137520",
            },
            LocalGovernmentArea: {
              Code: "5010",
              Name: "MORETON BAY REGIONAL",
            },
            Geocode: {
              TypeCode: "PC",
              Latitude: "-27.39714822",
              Longitude: "152.95015782",
            },
            Aliases: {
              Address: {
                RoadNumber: {
                  First: "38",
                },
                Road: {
                  Name: "ARALIA",
                  TypeCode: "ST",
                },
                SiteName: "BIRRALEE CHILD CARE CENTRE",
                Locality: "FERNY HILLS",
                State: "QLD",
                Postcode: "4055",
              },
            },
            Confidence: "98",
          },
          {
            PhysicalAddressIndicator: "Y",
            MetaData: [
              {
                Name: "Timestamp",
                Value: "2022-03-14T15:19:20.7951418+10:00",
              },
              {
                Name: "FullAddressString",
                Value: "1-7 SAMANTHA CT, FERNY HILLS QLD 4055",
              },
              {
                Name: "ConfidenceLevel",
                Value: "ValidIncomplete (98)",
              },
            ],
            Address: {
              RoadNumber: {
                First: "1",
                Last: "7",
              },
              Road: {
                Name: "SAMANTHA",
                TypeCode: "CT",
              },
              SiteName: "BIRRALEE CHILD CARE CENTRE",
              Locality: "FERNY HILLS",
              State: "QLD",
              Postcode: "4055",
            },
            Parcel: {
              Lot: "14",
              Plan: "RP137520",
            },
            LocalGovernmentArea: {
              Code: "5010",
              Name: "MORETON BAY REGIONAL",
            },
            Geocode: {
              TypeCode: "PC",
              Latitude: "-27.39697944",
              Longitude: "152.95019547",
            },
            Aliases: {
              Address: {
                RoadNumber: {
                  First: "38",
                },
                Road: {
                  Name: "ARALIA",
                  TypeCode: "ST",
                },
                SiteName: "BIRRALEE CHILD CARE CENTRE",
                Locality: "FERNY HILLS",
                State: "QLD",
                Postcode: "4055",
              },
            },
            Confidence: "98",
          },
          {
            PhysicalAddressIndicator: "Y",
            MetaData: [
              {
                Name: "Timestamp",
                Value: "2022-03-14T15:19:20.8001458+10:00",
              },
              {
                Name: "FullAddressString",
                Value: "1-7 SAMANTHA CT, FERNY HILLS QLD 4055",
              },
              {
                Name: "ConfidenceLevel",
                Value: "ValidIncomplete (98)",
              },
            ],
            Address: {
              RoadNumber: {
                First: "1",
                Last: "7",
              },
              Road: {
                Name: "SAMANTHA",
                TypeCode: "CT",
              },
              SiteName: "BIRRALEE CHILD CARE CENTRE",
              Locality: "FERNY HILLS",
              State: "QLD",
              Postcode: "4055",
            },
            Parcel: {
              Lot: "15",
              Plan: "RP137520",
            },
            LocalGovernmentArea: {
              Code: "5010",
              Name: "MORETON BAY REGIONAL",
            },
            Geocode: {
              TypeCode: "PC",
              Latitude: "-27.39709267",
              Longitude: "152.95042458",
            },
            Aliases: {
              Address: {
                RoadNumber: {
                  First: "38",
                },
                Road: {
                  Name: "ARALIA",
                  TypeCode: "ST",
                },
                SiteName: "BIRRALEE CHILD CARE CENTRE",
                Locality: "FERNY HILLS",
                State: "QLD",
                Postcode: "4055",
              },
            },
            Confidence: "98",
          },
          {
            PhysicalAddressIndicator: "Y",
            MetaData: [
              {
                Name: "Timestamp",
                Value: "2022-03-14T15:19:20.8001458+10:00",
              },
              {
                Name: "FullAddressString",
                Value: "1-7 SAMANTHA CT, FERNY HILLS QLD 4055",
              },
              {
                Name: "ConfidenceLevel",
                Value: "ValidIncomplete (98)",
              },
            ],
            Address: {
              RoadNumber: {
                First: "1",
                Last: "7",
              },
              Road: {
                Name: "SAMANTHA",
                TypeCode: "CT",
              },
              SiteName: "BIRRALEE CHILD CARE CENTRE",
              Locality: "FERNY HILLS",
              State: "QLD",
              Postcode: "4055",
            },
            Parcel: {
              Lot: "16",
              Plan: "RP137520",
            },
            LocalGovernmentArea: {
              Code: "5010",
              Name: "MORETON BAY REGIONAL",
            },
            Geocode: {
              TypeCode: "PC",
              Latitude: "-27.39717064",
              Longitude: "152.95059781",
            },
            Aliases: {
              Address: {
                RoadNumber: {
                  First: "38",
                },
                Road: {
                  Name: "ARALIA",
                  TypeCode: "ST",
                },
                SiteName: "BIRRALEE CHILD CARE CENTRE",
                Locality: "FERNY HILLS",
                State: "QLD",
                Postcode: "4055",
              },
            },
            Confidence: "98",
          },
        ],
      },
    },
  },
};
