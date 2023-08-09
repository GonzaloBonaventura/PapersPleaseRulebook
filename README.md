# Draggable Rulebook Project

## Overview
This project implements an interactive draggable rulebook using JavaScript and HTML. The rulebook contains different pages that users can flip through by clicking buttons or dragging elements.

The key files are:

- `charge.js` - preloads images
- `dias.js` - controls the day counter and visible rules
- `drag.js` - implements drag and drop functionality
- `draggable.js` - draggable class
- `rulebook.js` - main script to control rulebook pages

## Functionality
### Day Counter
- Increments days from 1-31 and resets
- Sets background images for day digits
- Calls functions to update rules

### Rules
- Displays different rule images based on the current day
- Rules appear and disappear based on the day

### Pages
- Flipping pages with buttons
- Draggable ball to flip pages

### Loading
- Preloads images
- Displays loading overlay then fades out

## Assets
The project uses images stored in the `ppimg` folder:

- `Days` folder - digit images 1-3 and 0-9
- `Rules` folder - rule images
- Other folders - images for each page

## Implementation
- `charge.js` preloads all the images needed using a for loop and an array of image paths
- `dias.js` contains the main day counter logic
  - `conta` increments or decrements the day
  - `sort` calls specific day functions
  - Day functions set the background images and visible rules
- `drag.js` adds drag event listeners to the ball element
- `draggable.js` implements a draggable class
- `rulebook.js` handles showing and hiding page elements
* *Bonaventura Gonzalo*  - [Linkedin](https://www.linkedin.com/in/gonzalo-bonaventura) -  [GitHub](https://github.com/GonzaloBonaventura)
