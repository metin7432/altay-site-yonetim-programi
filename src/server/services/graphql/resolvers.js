import logger from '../../helpers/logger';

export default function resolver() {
const {db } = this;
const { Person, Category } = db.models;

    const resolvers = {
        Category: {
            person(category, args, context) {
                return category.getPerson()
            }
        },
       RootQuery: {
        people(root, args, context) {
            return Person.findAll({order: [['createdAt', 'DESC']]});
        },
       },

       RootMutation: {
        addPerson(root, {person, category}, context) {
            const personObject = {
                ...person,
                category,
               id: 1

            };
           
            logger.log({ level: 'info', message: 'Post was created' });
            return personObject;
        }
       }
    };
return resolvers;
}