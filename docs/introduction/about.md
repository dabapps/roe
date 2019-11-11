Roe is a project development kit developed by [DabApps](https://www.dabapps.com).
It is a collection of React components, styles, mixins, and atomic CSS classes to aid with the development of web applications.

Written with TypeScript and LESS, it has a fairly flexible API based around component composition, and does not assume anything about the projects' data storage solution, and thus can be integrated with any existing application (though, this may have naming conflicts, and therefore it is recommended that Roe only be used when creating an application from scratch).

Roe takes inspiration from a lot of places, but primarily [Bootstrap](https://getbootstrap.com/). You will notice that Roe has a very similar grid system, naming convention for classes, etc.

We decided to develop Roe for several major reasons:

1. We use React for the majority of our frontend development, and alternatives to Roe either did not supply React components, were not as flexible as we required, or were immature (in terms of project life).

2. By creating our own project development kit we allowed ourselves to have complete control over what components are available, how these components were implemented, and the level of polish applied (we had found in the past that some component libraries were so "complete" that they were hard to customize).

3. As a company, DabApps have been using LESS as our CSS processor for many years, and most modern component libraries had migrated to either SASS or styles applied via javascript, such as JSS.
