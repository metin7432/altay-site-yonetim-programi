import logger from '../../helpers/logger';

    const resolvers = {
       RootQuery: {
        persons(root, args, context) {
            return [];
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

    export default resolvers;