# react-carousel

A React carousel develop for the Scandiweb's React developer test

## Table of content
- Usage
- Running

### Usage
The component accepts the following params:

| name       | required | default | type                      | description                                                                  |
|------------|----------|---------|---------------------------|------------------------------------------------------------------------------|
| children   | Yes      | N/A     | ReactElement[]            | List of elements to be rendered. Each child will be a column on the carousel |
| value      | No       | 0       | Integer                   | Index of the current child being rendered.                                   |
| setValue   | Yes      | N/A     | (Integer) => void         | Function called to change the current value.                                 |
| navigation | No       | N/A     | Object (see model bellow) | Configuration for the navigation elements                                    |


#### navigation
Navigation configures the non slide navigation aspects. It has the following model:

```js
{
  dots: boolean
}
```

Where:
 - dots: Configuration to show the dots navigation or not;

### Running
The project is not released on npm so you can use only on the example page for now.

In order to run the example page locally on you computer (assuming that you already have [yarn](https://classic.yarnpkg.com/en/docs/install/) and [node](https://nodejs.org/en/download/)):

- On the root folder to install all the dependencies run:
`yarn`
- And to run the server:
`yarn serve`

