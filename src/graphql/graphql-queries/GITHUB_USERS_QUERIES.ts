import { gql } from '@apollo/client';

/**
 * Query that returns user information
 */
export const GET_USERS = gql`
    query GetUserData($login_username: String!) {
        user (login: $login_username){
            name
            login
            avatarUrl
            followers {
              totalCount
            }
            following {
              totalCount
            }
            repositories{
              totalCount
            }
        }
    }
    `


export default GET_USERS;