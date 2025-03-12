# Solution

An application that allows for the user to give feedback on any of the recent or past policies.

## features for users
- auth will be handled by the govt. and will require a valid govt. id.
- the user can ask inbuilt ai to understand the policy better and learn more about the impact it will have.
- the user can choose which sector they want to 'follow' to get notifications if there are any new policies affecting them.
- the feedback can be in the form of polls (rating) or text containing suggestions and complaints.
- the top 1000 reviers can be displayed for each policy.
- users will gain badges as they vote which can be shared on different social media platforms.
- users can choose to keep their feedback private or public, if public, other users can upvote or downvote the feedback to show their support.
- users can vote on other users feedback.
- users can choose to write a new feedback or just upvote existing related feedback. (when the users write the feedback, they will be suggested other public feedback which share the same concerns based on AI. Users can then choose to post their feedback or choose one of the suggested ones, or both)


## backend features
- the backend can visualize the data from the feedback on a dashboard and show the user how much they are affected by the policy.
- ai can categorize the feedback into different categories, allowing for efficient analysis.
- the backend can also show the user the top 1000 reviers for each policy.
- allows for admins to create new policies, mentioning how long the policy will be up for review, its summary, the sectors it affects, allow/disallow comments(public feedback).
- the admins can track which policies are the most active and top feedback a given policy

## flowchart

Governtment produces the first revision of the policy
            |
            V
users get notification, and can vote on the
policy as well as give feedback (within the given time frame)
            |                                                   \
            |                                                   |
            V                                                   V
Governtment acknowledges the feedback                     Government produces the second revision of the policy based
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
