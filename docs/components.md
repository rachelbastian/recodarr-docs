# UI Components

This page demonstrates the UI components available with shadcn/ui and Tailwind CSS integration.

## Buttons

<div className="flex flex-wrap gap-4 my-6">
  <Button>Default Button</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>

<div className="flex flex-wrap gap-4 my-6">
  <Button size="lg">Large</Button>
  <Button size="default">Default</Button>
  <Button size="sm">Small</Button>
</div>

## Cards

<div className="grid md:grid-cols-2 gap-6 my-6">
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>Another Card</CardTitle>
      <CardDescription>More information here</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This card demonstrates the shadcn/ui Card component with Tailwind CSS.</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Submit</Button>
    </CardFooter>
  </Card>
</div>

## Tailwind Typography

<TailwindWrapper>

# Heading 1
## Heading 2
### Heading 3

This text is styled using Tailwind Typography plugin. It provides a set of ready-to-use typographic utilities.

- List item one
- List item two
- List item three

1. Ordered list item
2. Another item
3. And another

> This is a blockquote that's styled with Tailwind Typography.

```js
// Example code block
function example() {
  console.log('Hello, world!');
}
```

</TailwindWrapper>

## Tailwind CSS Utilities

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
    Hover me
  </div>
  <div className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-600 transition-colors">
    Hover me
  </div>
  <div className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-600 transition-colors">
    Hover me
  </div>
  <div className="bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-600 transition-colors">
    Hover me
  </div>
</div>

<div className="flex justify-center items-center gap-4 my-6">
  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse"></div>
  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce"></div>
  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 animate-spin"></div>
</div>

## Dark Mode Support

The site supports dark mode through Docusaurus's theme switcher. All UI components and Tailwind utilities will automatically adjust for dark mode. 