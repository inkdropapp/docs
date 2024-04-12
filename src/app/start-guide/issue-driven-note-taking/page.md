---
title: Issue-driven tech note-taking
coverImage: '/images/issue-driven-note-taking_cover_2.jpg'
youtubeVideoId: '9lrEc8joc8g'
nextjs:
  metadata:
    title: Issue-driven tech note-taking
    description: When and what to take notes on
    openGraph:
      images:
        [
          'https://inkdrop-user-guide.vercel.app/images/issue-driven-note-taking_cover_2.jpg',
        ]
---

Are you wondering **when and what notes to jot down** in software development? Great.
Tech note-taking becomes an indispensable part of your workflow if you have a clear method, which focuses on issues.
Let's delve into the art of tech note-taking. {% .lead %}

## A simple rule: One note per issue

Note-taking apps basically allow you to write anything, but without a focused approach, it's easy to feel overwhelmed and confused.
Inkdrop is specifically designed to improve your engineering process. It's ideal for managing technical tasks and project-related notes rather than daily-life chores, glossaries, or travel plans. For those, you might find other apps more suitable.

When taking tech notes on Inkdrop, it is highly recommended to follow the simple rule: **One note per issue.**
An issue can be a problem, task, or any matter that you encounter in your projects.
Software developers commonly manage their tasks using issue trackers like GitHub Issues.
For instance, consider [the issues in the React Native repository on GitHub](https://github.com/facebook/react-native/issues):

![React Native repository on GitHub](/images/issue-driven-note-taking_github-issues.png)

Here, developers track bug reports, performance issues, feature requests, and roadmap discussions.
When working on your project, you'll likely encounter similar challenges, ideas, or questions.
Inkdrop encourages you to create one note for each of these instances.
For a bug, start a new note; for a fresh idea, another note.
For example, please take a look at the following screenshot:

![Example notes](/images/issue-driven-note-taking_example-notes.png)

These are my personal notes for developing Inkdrop, where I take notes for each issue.
Do not hesitate to hit the **Create Note** {% icon name="pencil-write" /%} button and start writing down your issues.
Each note can be short and incomplete.

In a nutshell, treating each note as a dedicated space for an individual issue mirrors the compartmentalization of tasks in software development, promoting clarity and efficiency.
By adopting this method, you can focus on one problem or idea at a time. **Be a single-tasker!**

## Key types of issues

To practice thinking of 'What is an issue?' when creating a new note, it's helpful to know the key types of tech issues so that you can avoid making notes with an abstract title and mixed topics.

Here are some of the key types of issues, where taking notes would be helpful for your engineering workflow:

![Key types of tech issues](/images/issue-driven-note-taking_key-types-of-tech-issues.jpg)

You can check out my real-world notes as examples for each category in [this page](/start-guide/key-note-categories-and-examples).

## Avoid striving for perfection

![Avoid perfectionism](/images/issue-driven-note-taking_aviod-perfectionism.jpg)

[Here is an example note](/examples/learning-2), which I took notes while learning Svelte.js.
As you can see, whenever I encounter something I don't understand, I simply document my confusion in this way.
Unlike school study notes, it doesn't help you learn by just copying & pasting the official documentation into your notes.
Instead, you should write not only what you understand, but also **what you don't understand**.

You may think the example note doesn't look so perfect.
That's important.
Your tech notes can be messy, disorganized, and imperfect.
They aren't meant to make you look smart or akin to homework reports to be submitted to your teacher.
It's a popular pitfall, where you spend too much time striving for perfection.
Simply jot down what you think is necessary.
There is **no need to feel bad or miserable** when honestly writing what you don't understand because it is all part of your learning journey.
Don't pretend to be smart when taking tech notes.

## Express your thoughts, including your emotions

![Write it emotionally](/images/issue-driven-note-taking_write-emotionally.jpg)

As you can see in [the above example note](/examples/bug-2), which I took when fixing a bug, I often use emojis to express my thoughts.
You might think that using emojis in tech notes is unnecessary, but it can be beneficial.

That's because your notes are personal, reflecting your own journey.
Moreover, the process of hacking can often be solitary.
Just like writing diaries, it'd be nice to **express how you feel while tackling issues**.
This way, even if you are working alone, it makes you feel like you are collaborating with yourself.
That would help you clarify your thoughts and maintain motivation at the same time.

So, Inkdrop could be your companion by expressing your feelings.
Enjoy the process of solving issues!

## Keep track of issues with note statuses

GitHub Issues have three main statuses: 'Open', 'Closed', and 'Closed as not planned'.
These statuses help maintainers and contributors to track the progress and lifecycle of issues and tasks within the project.
Closed issues are hidden by default so that developers can focus on active issues.
You can still show closed issues by clicking the **Closed** tab, which is handy for reviewing past issues.

![GitHub Issues closed issues](/images/issue-driven-note-taking_github-closed-issues.png)

Similarly, Inkdrop can have several statuses for your notes, including 'Active', 'On Hold', 'Completed', and 'Dropped'.
And the notes with 'Completed' and 'Dropped' statuses are hidden in the note list by default when you view them via a notebook so you can focus on the active issues.
You can view them by clicking the **Completed** and **Dropped** tabs on the sidebar.

![Note status](/images/issue-driven-note-taking_note_status.png)

### How to assign a status to a note

To add a status to a note:

1. Open the note that you want to mark with status.
2. Under the note's title, click **Status**.
3. Select a status from the list:
   - **Active**: You’re currently working on this task
   - **On Hold**: You’ve paused work on this task.
   - **Completed**: You’ve finished this task.
   - **Dropped**: You’re no longer pursuing this task.
   - **None**: Initial status for all notes. Set this status if you don't want to track progress of a note.

Watch a video showing a basic use case:

{% video src="https://site-cdn.inkdrop.app/docs/manual/managing-tasks-with-status.mp4" poster="https://site-cdn.inkdrop.app/docs/manual/managing-tasks-with-status.jpg" /%}

---

Overall, the key to effective note-taking in Inkdrop is the disciplined approach of 'One note per issue' coupled with the strategic use of note statuses. This method not only keeps your project notes organized and manageable but also aligns your engineering process with best practices in software development.
