## File Colocation in Next.js

In Next14 we are using file based routing,
so to have a route like `/book/1` give a value we need a few things:

1. a file stucture like: app/book/[id]/page.tsx
2. the `page.tsx` is mandatory inside a folder structure, without it the route won't be available and show up as 404 not found

## Private folders

We understand how `page.tsx` is needed for a route to show up in UI/browser, however, not all `page.tsx` will show up.
If the page.tsx is in a private folder, it will not be considered for rendering.
A private folder starts with a prefix of underscore `_`
Example: `app/_privateLib/page.tsx`

Here, even though page.tsx exists,this will not result in `app/_privateLib` being a viewable route

**note**: If you want to include an underscore in URL segments, you can prefix the folder name with "%5F," which is the URL-encoded form of an underscore

### Main uses of private folders:

- For separating UI logic from routing logic
- For consistently organizing internal files across a project (like libraries and utils etc)
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future Next.js file conventions

## getting started with shadcn-ui

- Adding shadcn-ui in our project

```log
➜  nrxt14btu git:(main) ✗ npx shadcn-ui@latest init                                                                                                                @21:37:31
✔ Would you like to use TypeScript (recommended)? … no / yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? … src/assets/styles/globals.css
✔ Would you like to use CSS variables for colors? … no / yes
✔ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) …
✔ Where is your tailwind.config.js located? … tailwind.config.ts
✔ Configure the import alias for components: … @/shadui
✔ Configure the import alias for utils: … @/shadui/lib/utils
✔ Are you using React Server Components? … no / yes
✔ Write configuration to components.json. Proceed? … yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed. You may now add components.
```

- Adding shadcn forms

```
➜  nrxt14btu git:(main) ✗ npx shadcn-ui@latest add form                                                                                                            @21:40:38
✔ Done.
```

- Custom fields with Next + zod + react-hook-form
