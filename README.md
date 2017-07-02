# improved-angular-component-seed — The improved seed for AngularJS apps
This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.  This seed is inspired by [Todd Motto's style guide](https://github.com/toddmotto/angularjs-styleguide).

> As noted in the style guide, this is meant to capture 'Architecture, file structure, components, one-way dataflow, lifecycle hooks.'

## Getting Started

To get you started you can simply clone the improved-angular-component-seed repository and install the dependencies:

### Prerequisites

You need git to clone the improved-angular-component-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test improved-angular-component-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone improved-angular-component-seed

Clone the improved-angular-component-seed repository using git:

```
git clone https://github.com/swos-/improved-angular-component-seed.git
cd improved-angular-component-seed
```

If you just want to start a new project without the improved-angular-component-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/swos-/improved-angular-component-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies
We install our development dependencies via `npm`, the [node package manager](https://www.npmjs.com/).

Once you've cloned the project, run:
```
npm install
```
Once this has finished, you should see a new folder in your project:
* `node_modules` - contains the npm packages for the tools and libraries (like Bootstrap) we need

### Run the Application
The project is configured to run with a simple development web server.  Start the server simply with:
```
gulp
```

Now browse to the app at `http://localhost:3000/`.

### Running the App during Development
The improved-angular-component-seed project uses browsersync to serve the application, and synchronize code changes.  This project uses Gulp as a task runner and build tool.  It has been pre-configured with a number of tasks to make development easier.  Make changes as necessary to ```gulpfile.babel.js``` for your specific project and workflow.
