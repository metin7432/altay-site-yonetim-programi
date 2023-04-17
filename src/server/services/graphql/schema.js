
const typeDefinitions = `
scalar Date

type Person {
    id: Int
    name: String
    surname: String
    tcId: Int
    email: String
    password: String
    birthYear: Date
    category: Category
}

type Category {
    id: Int
    categoryName: String
}

type RootQuery {
   people: [Person!]! 
}

input PersonInput {
    name: String!
    surname: String!
    tcId: Int
    email: String!
    password: String!
    birthYear: Date
}
input CategoryInput {
    categoryName: String!
}

type RootMutation {
    addPerson(
        person: PersonInput!
        category: CategoryInput!
    ): Person
}
schema {
    query: RootQuery
    mutation: RootMutation
}



`;

export default [typeDefinitions];