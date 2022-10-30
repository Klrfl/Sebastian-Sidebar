# Sebastian-Sidebar
## What's this?
This is my basically my first ever OG website, but I tried to make it using a side navbar and SASS.

## Why did you make this?
I was bored; I have nothing to do at the time, and so I decided to learn SASS. I practiced my SASS skills by making this little static website.

# About using SASS
On release V1, I used a VSCode extension to compile my SASS files to regular CSS. But, after watching Kevin's video on why I should not use an extension to compile, I decided to stop doing it. [Here's the video](https://www.youtube.com/watch?v=o4cECvhrBo8).

I have sucessfully done it the right way and have avoided VSCode extensions. I set up SASS with the help of [this video](https://youtu.be/wYWf2m_yzBQ). Thank you Mr. Powell!

## Setting up SASS and watching for changes
First of all, initialize NPM with `npm init`. This will create a `package.json` which I have no idea does what. It apparently helps other developers install the right packages when they clone my project. Then, install SASS with npm with

		npm install sass --save-dev

Note the `--save-dev` flag there.

There, start watching your SASS files with the following command:

		sass --watch [SASS directory]:[compiled CSS directory]`.

In the case of my project, I have my file in the `scss` directory, and I want to compile it to `CSS`. So the resulting command will be `sass -watch scss:css`.

If in case an error pops up, try installing SASS globally with `npm install -g sass`. Or, you can run `npx sass --watch [SASS directory]:[compiled CSS directory]`.
