# Solution

An application that allows for the user to give feedback on any of the recent or past policies.

## features for users
- auth will be handled by the govt. and will require a valid govt. id.
- the user can ask inbuilt ai to understand the policy better and learn more about the impact it will have.
- the user can choose which sector they want to 'follow' to get notifications if there are any new policies affecting them.
- the feedback can be in the form of polls (rating) or text containg suggestions and complaints.
- the top 1000 reviers can be displayed for each policy.
- users will gain badges as they vote which can be shared on different social media platforms.


## backend features
- the backend can visualize the data from the feedback on a dashboard and show the user how much they are affected by the policy.
- ai can categorize the feedback into different categories, allowing for efficient analysis.

## flowchart

Governtment produces the first revision of the policy
            |
            V
users get notification, and can vote on the
policy as well as give feedback (within the given time frame)
            |                                                   \
            |                                                   |
            V                                                   V
Governtment acknowledges the feedback                     Governtment produces the second revision of the policy based
and approves the policy                                   on the feedback, acknowledging the users whose feedback was
                                                          taken into consideration
                                                                |
                                                                V
                                                          users get notification, and can vote on the
                                                          policy as well as give feedback (within the given time frame)
                                                                |                        
                                                                V                        
                                                          Governtment acknowledges the feedback
                                                          and approves the policy              
                                                                |
                                                                V
                                                          and so on....
