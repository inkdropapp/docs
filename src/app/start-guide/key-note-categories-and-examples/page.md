---
title: Key note categories and examples for tech issues
coverImage: '/images/key-note-categories_cover.png'
nextjs:
  metadata:
    title: Key note categories for tech issues
    description: Create sophisticated formatting for your prose and code with simple syntax
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

To practice [the issue-driven tech note-taking method](/start-guide/issue-driven-note-taking) in Inkdrop, it'd be nice to know the key categories for tech issues you might encounter in your workflow.
This page provides several examples for each category so you can get a better idea of when and what to write in your notes.{% .lead %}

## {% icon name="bonsai" size=64 / %} Small projects

Every project starts from small. Avoid trying to construct a beautifully organized and completely structured knowledge base from the beginning.
Instead, just write your idea and process in a single note.
If it starts bloating up, it's time to split it into multiple notes for each issue type.

- **When to take**: When you start a new side project, hobby thing, or just a proof-of-concept of your idea
- **What to write**:
  - Brief description of the project idea
  - Goals or objectives you want to achieve
  - Research notes on relevant technologies, libraries, or tools
  - Step-by-step process or approach you plan to take
  - Code snippets, prototypes, or experiments
  - Challenges or roadblocks encountered
  - Lessons learned or insights gained
  - Future improvements or next steps
- **Examples**:
  - [Make an air quality sensor node](/examples/small-project-1)
  - [ToDo App with React Native](/examples/small-project-2)

## {% icon name="bug" size=64 / %} Bugs

Document any defects, errors, or unexpected behaviors encountered in the software or system.

- **When to take**: Whenever a bug is discovered during development, testing, production use, or reported by end-users or customers
- **What to write**

  - How to reproduce the bug
    - Code snippets
  - Expected behavior/output and actual behavior/output, including:
    - Error messages, stack traces, or error codes, along with the context when they occurred
  - Environment/platform details
    - Operating system (name and version)
    - Hardware specifications (CPU, RAM, GPU, etc.)
    - Browser (name and version, if applicable)
    - Mobile device (make, model, and OS version, if applicable)
  - Application/tool version numbers
    - The version number or build number of the application, tool, or system in which the bug was encountered
  - Screenshots
    - Visual aids can be helpful, especially for user interface or visual bugs
  - Links to related issues, documentation, or forums

  - Process to research, potential solutions, and result:
    - Document the steps taken to investigate and research potential solutions for the bug, including any findings, workarounds, or unsuccessful attempts.
  - Link to a pull request for the bug fix:
    - If a fix for the bug is implemented, include a link to the pull request or commit that addresses the issue. This can provide valuable context and allow others to easily reference the code changes.

- **Examples**
  - [App hangs when caps lock enabled on Sonoma](/examples/bug-2/)
  - [Keybindings with numbers and the shift modifier together do not work](/examples/bug-1/)
  - [App crashes when exporting as PDF on iPad](/examples/bug-3/)

## {% icon name="idea" size=64 / %} Feature ideas

Capture ideas for new features, enhancements, or improvements

- **When to take**: During brainstorming sessions, based on user feedback, or when identifying gaps or opportunities, or when taking a bath and suddenly an idea comes to you
- **What to write**:
  - What problem the feature would solve
    - Context for why it's essential
  - User stories/use cases
    - How/when users will interact with the feature
  - Potential implementation details
    - Required technologies, APIs, or libraries
  - References
    - Similar features in other apps
    - Screenshots
    - User feedback or reviews
- **Examples**
  - [Improve revision history view](/examples/feature-1)
  - [Remember the sort option for search results](/examples/feature-2)
  - [Export PDF support](/examples/feature-3)

## {% icon name="learn" size=64 /%} Learning tasks

Document step-by-step instructions for completing specific tasks or procedures

- **When to take**: When trying to figure out how to do something technical, or learning/documenting a new process, setting up environments, or performing recurring tasks
  - They can serve as a reference that you can use to complete the task again in the future
- **What to write**:
  - Individual steps required to complete a specific task
  - Prerequisites
  - Commands
  - Expected outcomes
  - Troubleshooting tips
  - Relevant screenshots or code snippets
- **Examples**:
  - [Learn Svelte.js](/examples/learning-2)
  - [Try Neovim native LSP](/examples/learning-4/)
  - [Try pnpm](/examples/learning-3)

## {% icon name="research" size=64 /%} Research topics

Capture information, findings, or insights gained from researching specific technologies, libraries, or techniques related to the project

- **When to take**: While researching on a particular technology or concept
  - e.g., frameworks, libraries, programming languages, algorithms, or techniques related to your project
- **What to write**:
  - References to documentation or resources
  - Comparisons
  - Pros and cons
  - Key findings
  - Any conclusions or recommendations
- **Examples**:
  - [Improve nvim](/examples/research-1/)
  - [Rebuild mobile app](/examples/research-2/)

## {% icon name="troubleshooting" size=64 /%} Troubleshooting issues

Document the process of diagnosing and resolving issues or problems encountered during development or deployment

- **When to take**: When you're trying to resolve an issue with a piece of technology that arises during development, deployment, or maintenance of a system or application
- **What to write**:
  - What happened
    - Error messages, symptoms, or unexpected behavior observed
  - Investigation process
    - Reviewing logs, running diagnostic tools, testing hypotheses, or consulting documentation or online resources
  - The steps you've taken to troubleshoot the problem
  - This can help you keep track of what you've tried and what has or hasn't worked.
- **Examples**
  - [Tmux italics not working](/examples/troubleshooting-1/)
  - [Nvim memory usage is too high](/examples/troubleshooting-2/)
  - [Incorrect FROM name](/examples/troubleshooting-3/)
  - [Bump up Electron to 28](/examples/troubleshooting-4)

## {% icon name="settings-cogs" size=64 /%} Configurations and tips

Document the configurations, settings, or customizations made to the development tools, IDEs, editors, or applications used in the software development process.

- **When to take**:
  - When setting up or configuring development environments, tools, or applications for the first time.
  - When making significant changes or tweaks to existing configurations.
- **What to write**:
  - Configuration details (e.g., database connections, API keys, file paths)
  - Environment-specific settings
  - Any specific instructions or considerations
- Example of tools/applications where configuration notes can be useful:
  - Code editors (e.g., Neovim, Visual Studio Code, Sublime Text)
  - IDEs (e.g., Xcode, Android Studio, IntelliJ IDEA)
  - Version control systems (e.g., Git, Mercurial)
  - Build tools (e.g., Make, Gradle, Maven)
  - Shell environments (e.g., Bash, Zsh)
  - Database clients or administration tools
  - Browser developer tools
- **Examples**:
  - [Install rbenv](/examples/config-and-tips-3)
  - [Global hotkey for focusing Min browser & other frequently used apps](/examples/config-and-tips-4)
  - [Toggle autoformat on nvim](/examples/config-and-tips-2)
  - [Review a pull request locally](/examples/config-and-tips-1)

## {% icon name="rabbit" size=64 /%} Performance optimization

Document performance bottlenecks, optimization strategies, and techniques used to improve the efficiency or scalability of the software or system

- **When to take**: During performance testing, profiling, or when addressing performance issues.
- **What to write**:
  - Performance metrics, bottleneck identification
  - Optimization techniques applied
    - e.g., caching, code refactoring, database indexing
  - Results or improvements achieved
  - Any ongoing monitoring or considerations
- **Examples**:
  - [Slow launch speed](/examples/performance-1)
  - [Code splitting my.inkdrop.app for faster page load](/examples/performance-2)
  - [Changing orientation is so slow on tablets](/examples/performance-3)

## {% icon name="server" size=64 /%} Operation procedures/logs

Capture information related to the preparation, deployment, maintenance, and operation of the software or system, as well as logging procedures and practices.

1. **Preparation**
   - **When to take**: During the planning and preparation phase before deploying or maintaining the software or system.
   - **What to write**:
     - Deployment prerequisites (e.g., hardware requirements, software dependencies)
     - Environment setup instructions (e.g., configuring servers, load balancers, databases)
     - Backup and recovery procedures
     - Monitoring and alerting setup (e.g., metrics to track, alert thresholds)
     - Scaling or load balancing strategies
     - Security considerations (e.g., access controls, encryption)
     - Rollback or rollforward plans
2. **Logging**
   - **When to take**: During the actual deployment, maintenance, or operation of the software or system.
   - **What to write**:
     - Deployment steps and execution logs
     - Configuration changes or updates made during deployment or maintenance
     - Issue or incident reports (e.g., outages, performance degradation)
     - Troubleshooting steps and resolutions
     - Monitoring logs and performance metrics
     - Backup and restoration logs
     - Any operational challenges or lessons learned

- **Examples**:
  - [Discourse is slow, needs to scale up](/examples/operations-1)
  - [Configure DMARC record](/examples/operations-2)

## Other types

This list wouldn't limit what you can write in Inkdrop.

Other possibilities would be:

- Meeting notes
- Draft blog articles
- Journals
- Reading notes
- Code reviews
- etc.

Just note that Inkdrop is a plain-text Markdown editor, which may not fit every type of note but would work best for coding-related notes. This is because of the decision of '[The right tool for the right task](https://www.inkdrop.app/note-taking-tips/)' philosophy.
So, you might want to consider using another app for writing non-linear thoughts and image-heavy notes.
