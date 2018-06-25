const data = [
  [
    { 0: 1, 1: "April" },
    { 0: 2, 1: "May" },
    { 0: 3, 1: "June" }
  ],
  [
    { 0: 1, 1: "Machelle Hui", 2: 1 },
    { 0: 2, 1: "Leighann Cavanagh", 2: 1 },
    { 0: 3, 1: "Sherell Lundberg", 2: 2 },
    { 0: 4, 1: "Loreta Fairbank", 2: 3 },
    { 0: 5, 1: "Trinh Allmond", 2: 3 },
    { 0: 6, 1: "Parthenia Bullen", 2: 1 },
    { 0: 7, 1: "Ellan Meyerson", 2: 3 },
    { 0: 8, 1: "Pete Roysden", 2: 2 },
    { 0: 9, 1: "Lulu Frenette", 2: 2 },
    { 0: 10, 1: "Rena Sasson", 2: 1 },
    { 0: 11, 1: "Franchesca Stokley", 2: 3 },
    { 0: 12, 1: "Edward Leighty", 2: 3 },
    { 0: 13, 1: "Malka Ostrom", 2: 1 },
    { 0: 14, 1: "Evangeline Schippers", 2: 2 },
    { 0: 15, 1: "Ethel Claire", 2: 2 },
    { 0: 16, 1: "Jeannie Raia", 2: 3 },
    { 0: 17, 1: "Shiela Tinoco", 2: 1 }
  ]
];

var schema = {
  tables: {
    "cohorts": {
      location: 0,
      fields: {
        "id": 0,
        "name": 1
      }
    },
    "students": {
      location: 1,
      fields: {
        "id": 0,
        "name": 1,
        "cohort_id": 2
      }
    }
  }
}

function applyQuery(query) {
  // Get the address of the table
  // Get the items from the table
  // Iterate through each of the items in the table
  // Get the fields from each of the items and add to the results
  // Return the results

  var tableSchema = schema.tables[query.from];
  var tableIndex = tableSchema.location;
  var tableRows = data[tableIndex];
  var selectMap = (row) => {
    return query.select.map((column) => {
      var fieldIndex = tableSchema.fields[column.field];
      return row[fieldIndex];
    });
  }
  return tableRows.map(selectMap);
}
