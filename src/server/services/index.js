import { Utils } from 'sequelize';
import graphql from './graphql';

export default utils => ({
    graphql: graphql(utils)
});