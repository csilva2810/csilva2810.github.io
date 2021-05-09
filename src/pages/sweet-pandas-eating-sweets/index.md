---
title: "Sweet Pandas Eating Sweets"
date: "2017-08-10"
tags: 
  - Javascript
  - CSS
  - HTML
  - NodeJS
  - React
thumbnail: "https://source.unsplash.com/_9a-3NO5KJE"
---

Pandas are really sweet.
Here's a video of a panda eating sweets.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore illo laudantium aspernatur iste minus tempora tempore, exercitationem, quos distinctio, fuga praesentium reprehenderit mollitia dolorum modi? Iste quae perferendis adipisci nihil! Ipsum, repudiandae sapiente. Quidem animi officiis iste officia ipsa perferendis earum sunt explicabo quod doloribus impedit rerum optio ratione quia vel, inventore quae dolor, excepturi architecto ad ducimus expedita cupiditate tempora. Dolore architecto cum optio neque unde, porro animi incidunt pariatur perspiciatis magni numquam nihil nisi et voluptatum consequatur, rem quam. Perferendis veniam pariatur nostrum fugiat molestias eaque nemo, expedita quidem accusamus qui animi quam molestiae, aut quaerat? Temporibus.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore illo laudantium aspernatur iste minus tempora tempore, exercitationem, quos distinctio, fuga praesentium reprehenderit mollitia dolorum modi? Iste quae perferendis adipisci nihil! Ipsum, repudiandae sapiente. Quidem animi officiis iste officia ipsa perferendis earum sunt explicabo quod doloribus impedit rerum optio ratione quia vel, inventore quae dolor, excepturi architecto ad ducimus expedita cupiditate tempora. Dolore architecto cum optio neque unde, porro animi incidunt pariatur perspiciatis magni numquam nihil nisi et voluptatum consequatur, rem quam. Perferendis veniam pariatur nostrum fugiat molestias eaque nemo, expedita quidem accusamus qui animi quam molestiae, aut quaerat? Temporibus.

## Code sample

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Person = ({ name, jobTitle, country, technologies, hobbies }) => (
  <p>
    Hello, my name is {name}. I'm a {jobTitle} in ${country}. <br />
    I love building things using {technologies}. <br />
    My hobbies are {hobbies}. <br />
    You can visit my personal site at: {personalSite} <br />
    Nice to meet you!
  </p>
)

ReactDOM.render(
  <Person
    name='Carlos'
    jobTitle='Front-end Engineer'
    country='Brazil'
    technologies='Javascript, and React'
    hobbies='playing video games 🎮, exercising 🏃‍♂️, playing soccer ⚽️, and playing the guitar 🎸'
    personalSite='https://csilva2810.github.io/'
  />,
  document.getElementById('root')
)
```

<br />
<br />
<br />
