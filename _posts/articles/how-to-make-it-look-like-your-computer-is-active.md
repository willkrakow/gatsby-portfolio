---
layout: article
date: 2021-02-16T13:13:04.861Z
title: How to make it look like your computer is active
thumbnail: images/computer_desk.jpeg
slug: how-to-make-it-look-like-your-computer-is-active
---
# Emulating mouse events with macOS

## With `caffeinate`

 1. Open a new **Terminal**  window
 2. Type `caffeinate -u -t 3600`
 3. Hit enter

This will emulate user activity on the computer for 1 hour (3600 seconds). To cancel the process, just hit `ctrl+c`. However, `caffeinate` is intended to prevent your Mac from going to sleep, so it might not register with whatever software your company is using to monitor activity. In that case....

## With `cliclick`

First, you need to get **Homebrew**, a package manager for macOS. Basically Homebrew lets you install packages from the command line and takes care of software dependencies, installation locations and package updates.
 
### Installing Homebrew
1. Open a new Terminal window
2. Paste the following line:
`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
`
4. Hit enter

### Installing `cliclick`
Once you have Homebrew installed, run the following command: `brew install cliclick`

You'll see a bunch of output as Homebrew installs the package.

### Running `cliclick`
Once Homebrew has done its thing, type the following into your Terminal the following (hit **Enter** after each line):

`for i in {0..3600}`  
`do`  
	`cliclick -w 1000 c:100,500`  
`done`

This will emulate a mouse click every second at the **(100, 500)** coordinate on your screen.

#### Clicking in a pattern
If you want to get fancy, you can also do something like this:

`for i in {0..1200}`  
`do`  
	`cliclick -w 3000 c:$i, $i`  
`done`

The above script will click in a diagonal line across your screen, with 3 seconds in between each click. 

#### Emulating keypresses

`for i in {0..3600}`  
`do`  
	`cliclick -w 1000 t:H`  
	`sleep 5`  
	`cliclick key:delete`  
`done`

The above script will wait 1 second, type an "H", wait 5 seconds, delete the H, wait 1 second, and then repeat the process.

#### More possibilities
See the full list of `cliclick` [options](https://github.com/BlueM/cliclick).

## References:

[Homebrew](https://brew.sh/)  
[caffeinate](https://computers.tutsplus.com/tutorials/quick-tip-how-to-stop-your-mac-from-sleeping-using-the-command-line--mac-50905)  
[cliclick](https://www.bluem.net/en/projects/cliclick/)  
[Bash scripting](https://linuxize.com/post/bash-for-loop/)  
