# react-carousel

A React carousel develop for the Scandiweb's React [developer test](./TEST_DESCRIPTION.md)

## Table of content
- [Usage](#usage)
- [Running](#running)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)

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

In order to run the example page locally on you computer (assuming that you already have [yarn](https://classic.yarnpkg.com/en/docs/install/)^1.22.4 and [node](https://nodejs.org/en/download/)^14.2.0):

- On the root folder run:
`yarn`
- And to start the server:
`yarn serve`

The script should open the browser accessing your local ip on port 3000.

### Known Issues
To see the Known issues go to [repository issues](https://github.com/mateusbslopes/react-carousel/issues?q=is%3Aopen+is%3Aissue+label%3Abug).

### Roadmap
There are multiple evolutions to be developed on this project. So to see what will be develop next see the [ROADMAP](./ROADMAP.md) file.
