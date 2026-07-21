## Error Type
Runtime Error

## Error Message
Invalid src prop (https://lh3.googleusercontent.com/aida-public/AB6AXuCra-FKp81t0_OM8bWD55m2o9OOSnR_v7D0UilyExMImxyIcr9tIMZ2Py3HcC0ra_MtSsBkduMcwxUNKI9_iSXFFr_YRON1SF9hNM3fcYy-uG7N7uusL0Z367WINi1V7_GwfNQx-gsbUqLtzVi4ivFyqFQGb4qBs79bALeSFb6i3_ZnJnI1VVrN-VeZYHjfYyQI5C6zy90N3uxWZpwzIBhNoUDKKQjQ8EOEYPoyPTzhnh6b6AS3dkkFJ8t4xSDC6qjhMrQUoUPnAeM) on `next/image`, hostname "lh3.googleusercontent.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host


    at PropertyCard (components/property-card.tsx:44:11)
    at <unknown> (app/page.tsx:124:15)
    at Array.map (<anonymous>:null:null)
    at Home (app/page.tsx:123:33)

## Code Frame
  42 |       <Card className="group relative rounded-xl overflow-hidden border-none shadow-[0_10px_40px_-10px...
  43 |         <div className="aspect-[4/3] w-full overflow-hidden relative">
> 44 |           <Image
     |           ^
  45 |             src={imageUrl}
  46 |             alt={title}
  47 |             fill

Next.js version: 16.2.0 (Turbopack)
