Set up your virtual environment and clone the Gap-App repository. Install rebabel but also install pyinstaller <code>pip3 install pyinstaller</code>.

Take the main.py file and place it into the Gap-App directory where the make file is.

Copy the buildExe directory to the level of the Gap-App directory. In the dist directory in buildExe there also should be a config.toml and a flextext file.

cd into buildExe run the command <code>pyinstaller main.spec</code> The paths should be set in the main.spec file, so if there is an error that could be an issue.

cd into dist and in the dist directory you should have your executable there named rebabel. Once you execute rebabel with given commands it should run. For example, <code>./rebabel --help</code> will print the help menu and if you run <code>./rebabel import config.toml</code> that should successfully load the flextext file into the database. And the database demo.db should be created in the dist directory.

Some errors you might encounter could be that your virtual environment isn't activated, if the flextext has issues maybe get it from the slack and try again.
