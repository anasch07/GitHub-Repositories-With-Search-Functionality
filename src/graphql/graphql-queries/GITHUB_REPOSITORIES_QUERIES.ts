import {gql} from "@apollo/client";

/**
 * Query that returns user information
 * @param login_username username of the user
 * @return {id, login, name, avatarUrl, bio, followers, following, organizations, repositories, pageInfo}
 *
 */
export const GET_USER_REPOSITORIES = gql`
    query getUser($username: String!, $endCursor: String) {
      user(login: $username) {
        id
        login
        name
        avatarUrl
        bio
        followers {
          totalCount
        }
        following {
          totalCount
        }
        organizations(first: 10) {
          nodes {
            avatarUrl
            name
          }
        }
        repositories(first: 100, after: $endCursor) {
          nodes {
            id
            name
            description
            forkCount
            url
            isPrivate
            primaryLanguage {
              name
              color
            }
            updatedAt
          }
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }
  `;