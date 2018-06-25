describe("applyQuery", function() {
  it("Get the names of all students", () => {
    // arrange
    const query = {
      select: [{ table: "students", field: "name" }],
      from: "students"
    };

    // act
    const results = applyQuery(query);

    // assert
    expect(results).toEqual([
      [ "Machelle Hui" ],
      [ "Leighann Cavanagh" ],
      [ "Sherell Lundberg" ],
      [ "Loreta Fairbank" ],
      [ "Trinh Allmond" ],
      [ "Parthenia Bullen" ],
      [ "Ellan Meyerson" ],
      [ "Pete Roysden" ],
      [ "Lulu Frenette" ],
      [ "Rena Sasson" ],
      [ "Franchesca Stokley" ],
      [ "Edward Leighty" ],
      [ "Malka Ostrom" ],
      [ "Evangeline Schippers" ],
      [ "Ethel Claire" ],
      [ "Jeannie Raia" ],
      [ "Shiela Tinoco" ]
    ]);

  });

  it("Get the names of all cohorts", () => {
    // arrange
    const query = {
      select: [{ table: "cohorts", field: "name" }],
      from: "cohorts"
    };

    // act
    const results = applyQuery(query);

    // assert
    expect(results).toEqual([ ["April"], ["May"], ["June"] ]);
  });

  it("Get the names of all students in the May cohort", () => {
    // arrange
    const query = {
      select: [{ table: "students", field: "name" }],
      from: "students",
      join: [{ from: { table: "students", field: "cohort_id" }, to: { table: "cohorts", field: "id" } }],
      where: [{ table: "cohorts", field: "name", equals: "May" }]
    };

    // act
    const results = applyQuery(query);

    // assert
    expect(results).toEqual(["Sherell Lundberg", "Pete Roysden", "Lulu Frenette", "Evangeline Schippers", "Ethel Claire"]);

  });
})
