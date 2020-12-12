# Building pages for the Hollar Business Dashboard
This section contains all the information you need to extend the **Hollar Business Dashboard** by creating pages. 

## Create a new page
In order to build a new page, create a `.js` file inside `/pages/dashboard`. Make sure the default export is a 
React Component. In order to access the `AppLayout` framework — which gives you access to the navigation bar, 
the user session, and more — you'll need to wrap your page content with the `AppLayout` component.

#### Example
```
import AppLayout from "../../components/AppLayout";

export default function MyAwesomePage() {
    return <AppLayout title="My Awesome Page">

            {/* Your page content goes here... */}
            <div>...</div>

        </AppLayout>
}
```

## Accessing the AppLayout framework
You can access many functions and objects within `AppLayout` by utilizing the `useAppContext()` hook. 
The `useAppContext()` hook will only work if your component is contained within an `AppLayout`.

## Access the current user
You can access the `currentUser` object by calling `useAppContext()`.

#### Example
```
import AppLayout from "../../components/AppLayout";
import useAppContext from "../../lib/useAppContext";

const DisplayUserInfo = () => {
    // Get the current user
    const {currentUser} = useAppContext()

    return <ul>
        <li>Name: {currentUser.displayName}</li>
        <li>Email: {currentUser.email}</li>
        <li>User ID: {currentUser.uid}</li>
    </ul>
}

export default function ProfilePage() {
    return <AppLayout title="Profile Page">
            <DisplayUserInfo/>
        </AppLayout>
}
```


## Use the sidebar
You can use the built-in sidebar layout to add configurable sidebar navigation on a page-by-page basis. 

To define your page's sidebar, create an array that contains each item you want to appear on the sidebar. For each sidebar item, create an object
that contains a unique `name`, a boolean indicating whether the item should use active or inactive styling, and an `icon` (see more below). 

#### Getting Icons
The sidebar was designed to use [Heroicons](https://heroicons.com/), an icon set by the creators of Tailwind.
Choose an icon and click "Copy JSX" to copy a JSX snippet to your clipboard. We are only interested in the `<path>` components of your icon (the part contained inside the `<svg>` tags). Get the `<path>` components and pass them in for your sidebar `icon`.

#### Reacting to sidebar clicks
Whenever a user clicks on one of the sidebar buttons, the `AppLayout` component will call `onClick` with the `name` of the clicked sidebar item passed in.

```
// This is what we copied from Heroicons
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>

// Use this as your icon (group with <></> if there is more than one path)
<>
    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</>
```

```
// What Heroicons provides
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
</svg>

// Use this as your icon
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
```


#### Example
```
import AppLayout from "../../components/AppLayout";
import useAppContext from "../../lib/useAppContext";

const DisplayUserInfo = () => {
    // Get the current user
    const {currentUser} = useAppContext()

    return <ul>
        <li>Name: {currentUser.displayName}</li>
        <li>Email: {currentUser.email}</li>
        <li>User ID: {currentUser.uid}</li>
    </ul>
}

export default function ProfilePage() {

const sidebarItems = [{
        name: "Item One",
        active: true, 
        icon: <>
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </>
    }, {
       name: "Item Two",
       icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    }
]

    // Presents an alert with the name of the sidebar item clicked
    return <AppLayout title="Profile Page" sidebar={sidebarItems} onClick={clickedItemName => alert(clickedItemName)}>
            <DisplayUserInfo/>
        </AppLayout>
}
```