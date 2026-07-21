## Error Type
Console Error

## Error Message
React does not recognize the `asChild` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `aschild` instead. If you accidentally passed it from a parent component, remove it from the DOM element.


    at button (<anonymous>:null:null)
    at Button (components/ui/button.tsx:51:5)
    at Navbar (components/navbar.tsx:78:13)
    at RootLayout (app\layout.tsx:32:9)

## Code Frame
  49 | }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  50 |   return (
> 51 |     <ButtonPrimitive
     |     ^
  52 |       data-slot="button"
  53 |       className={cn(buttonVariants({ variant, size, className }))}
  54 |       asChild={asChild} // Explicitly pass asChild

Next.js version: 16.2.0 (Turbopack)
