
## Example API Usage:

```
// Attempt to auto-login a user. The API stores a session ID in localStorage
// and this attempts to locate that session ID and initialise the user's session
// Will return true / false depending on if the user could be auto-logged in.
await window.api.autoLogin();

// Assuming the user couldn't auto login, you will need to display a login
// button that calls `window.api.connect()`. This forces the Metamask window
// to popup and ask the user to sign a consent message using their Ethereum
// account, which will then be used to log the user in.
await window.api.connect(true);

// Open the user's private, encrypted database called "enrolment"
let enrolmentDb = await window.api.openDatastore("enrolment");

// Save a record to the user's private datastore. This will intentionally fail
// as it has missing required fields.
await enrolmentDb.save({
    "dateEnrolment": "2020-05-31T00:29:45.528Z"
});

// View the errors
console.log(enrolmentDb.errors);

// Save an enrolment record with all the required data. You should see a response
// that provides the `id` of the newly saved record.
await enrolmentDb.save({
    "dateEnrolment": "2020-05-31T00:29:45.528Z",
    "dateConsent": "2020-05-31T00:29:45.528Z",
    "age": 32
});

// Query the database, only showing enrolment records with age=32. You can use
// any JSON object as a filter to query on. Uses PouchDB query syntax which is
// very similar to MongoDB.
// Should return an array with one result.
await enrolmentDb.getMany({age: 32});

// Query the database, but using an age with no results.
await enrolmentDb.getMany({age: 31});
```

Note: For ease-of-use to demonstrate the API has been attached to `window`, however
it's better for the application to avoid this and create a global singleton for re-use
across the application.

Here's a brief example of saving a daily visit, that uses an embedded `lab-result` schema
for the `hla-b` property:

```
let dvDatastore = await window.api.openDatastore("dailyVisit");
await dvDatastore.save({
    "dateOfVisit": "2020-05-31T00:29:45.528Z",
    "hla-b": {
        "value": 12,
        "units": "ml",
        "datetime": "2020-05-31T00:29:45.528Z"
    }
})
```

## Schemas

I have created the starting point of two schemas in the `/public/schemas` directory.

The JSON schema's define all the valid fields, their names, valid formats and required fields
for each datastore.

You will need to fill these in for all the fields required for the database schema.

It is also possible to fetch the schema information to help automatically build your forms:

```
let enrolmentSpecification = window.api.getSpecification("enrolment");
console.log(enrolmentSpecification);
```

This will provide an object containing all the fields (properties), required fields etc.

JSON Schema supports embedded schemas. I have implemented this for the `dailyVisit` schema
as an example. It references a `lab-result` schema for the `hla-b` property. This approach
can be used for most of the lab results for easier maintainability.