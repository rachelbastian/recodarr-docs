# Components Demo

This page demonstrates the custom UI components built with Tailwind CSS.

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
  <Button>Default</Button>
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
      <p>This is the card content area where you can place any content.</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
  
  <Card>
    <CardHeader>
      <CardTitle>Documentation Card</CardTitle>
      <CardDescription>A simple card for documentation content</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Cards can be used to group related content and actions.</p>
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Submit</Button>
    </CardFooter>
  </Card>
</div>

## Tailwind Utilities

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
  <div className="p-4 bg-primary text-white rounded">Primary Background</div>
  <div className="p-4 bg-slate-100 rounded">Slate 100</div>
  <div className="p-4 bg-slate-800 text-white rounded">Slate 800</div>
</div>

<div className="flex flex-col gap-4 my-6">
  <div className="text-3xl font-bold">Large Title</div>
  <div className="text-xl font-semibold">Medium Title</div>
  <div className="text-base">Regular Text</div>
  <div className="text-sm text-slate-500">Small Muted Text</div>
</div>

## Responsive Layout

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
  <div className="p-4 bg-slate-100 rounded text-center">Column 1</div>
  <div className="p-4 bg-slate-200 rounded text-center">Column 2</div>
  <div className="p-4 bg-slate-300 rounded text-center">Column 3</div>
  <div className="p-4 bg-slate-400 rounded text-center">Column 4</div>
</div> 