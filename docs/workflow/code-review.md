# Code review

- [How to submit code for review](#how-to-submit-code-for-review)
- [How to do a code review](#how-to-do-a-code-review)

## How to submit code for review

1. [Pick an issue to work on](./issue-management.md#how-to-pick-an-issue)

2. Check out a new branch from the latest `main` branch
    ```bash
    git checkout -b [branch-name]
    ```

3. Solve the issue

    > If you've made a lot of changes (>300 LOC), split the changes into multiple PRs - TBA how

4. Push the changes and open a PR

    4.1. Add `Closes [issue-link]` to the description

    4.2. Add anything else that will aid the reviewer

        Do not duplicate issue description

        ---

        If you had to implement other solution than was suggested, explain why

    4.3. Request a review and assign labels if necessary

5. Create a PR

    > *You can also give yourself a review, sometimes it helps to view all the changes one more time in Github.*

6. Wait for a review

    > If the reviewer doesn't respond in 1-3 days, then ping them until they give you a review. Getting a review is the author's responsibility.

7. Once you got the review, process it:

    7.1. Read all the reviewer's comments

        If you don't agree with something, or don't understand a particular piece of feedback, then add a comment.

    7.2. If you understand and agree with the comments, then proceed to implement the requested changes

        If the changes are pushing PR over the limit or they're not critical, then suggest to do them in a follow-up (a separate PR after the original one is merged).

    7.3. Once you're done, request another review

## How to do a code review

1. Read PR's and issue's descriptions

2. Read all the changes carefully

    > Sometimes it's also useful to check out the changes locally or view the demo if it's available.

3. Understand the context

    3.1. What's the purpose of these code changes?
    
    3.2. Does the code actually solve the issue?

4. Check for readability

    4.1. Is the code easy to follow?

    4.2. Does the author use meaningful names for variables?

    4.3. Is the code properly organized?

5. Check functionality

    5.1. Are all potential error scenarios handled?

    5.2. Do you see any edge cases?

    5.3. Did it break something else?

6. Consider potential improvements

    6.1. Should we create an abstraction for some of these changes?

    6.2. Do we need a test for this functionality?

    6.3. Should we add a comment in the code to explain it?

7. Once you add all the comments, click `Review changes` button:

    7.1. If you don't have major objections to the code, then choose `Approve` and submit review

    7.2. In all other cases choose `Request changes`

    > *Err on the side of too many questions, it's always better to ask and clarify things.*

8. If you've approved the PR, feel free to merge it.

## Other resources

- [Google's code review guidelines](https://google.github.io/eng-practices/)