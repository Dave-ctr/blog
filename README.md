# Creating your blog in React

In this exercise, we're going to use modular React components to build a blog.
The text content will need to be formatted and changed to your own content.

## Setup

### 0. Cloning and installation for Online students only!

- [x] Clone this repo, and from the repo's folder, install packages, and run the
      dev server with `npm run dev`

  <details style="padding-left: 2em">
    <summary>Tip</summary>

  Your terminal commands probably look like:

  ```sh
  git clone [url to this repo]
  cd React-Blog-Challenge
  npm install
  npm run dev
  ```

  </details>

---

For Offline students just run `npm run dev`

## Requirements

Our task is to create all of the components that comprise the page and wire up
data for the component to render. One approach would be to create the HTML of
the page with static data first, and afterwards, decompose the page into the
components below.

### 1. Get familiar with the assets

- [x] Investigate the `client/data` folder
  <details style="padding-left: 2em">
    <summary>More about using the provided data</summary>

  The data will need to be structured into content that matches the data
  structure we have supplied, this can be found in the `client/data` folder.

  We will need to import the data from the appropriate files and pass the needed
  data to the components using props.

      ```js

  { id: 126, title: 'This began from..', date: '01 April 2023', commentCount: 4,
  blogContent: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Nullam erat ligula, pellentesque vel nas in lorem molestie."} }

  ```

    Posts data should follow this pattern but with your own data.
  </details>

  ```

- [x] Understand the design requirements
  <details style="padding-left: 2em">
    <summary>More about design requirements</summary>

  Try to not use a UI framework like Bootstrap. Rather, try to use the CSS
  Flexbox. Also, consider applying a class to each component using `className`
  (instead of the `class` we use in HTML) to **namespace** the styles of each
  component.

  > Have a look at The basic-layout for how to layout your components on the
  > page.

  </details>

### 2. App, Header, and Footer

- [x] `App`: already in place, we'll hold our other components within this one
      as you build them
- [x] `Header`: build the header of the page
- [x] `Footer`: build the footer of the page

### 3. Posts

- [ ] `Posts`: build a container to hold all posts
- [ ] `Post`: build the component for a single post

### 4. Other blogs

- [ ] `OtherBlogs`: build a container to hold the list of other blogs
- [ ] `OtherBlog`: build the component for a single blog link

---
