import { SVGProps } from 'react'

export function LogomarkDefs(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0"
      viewBox="0 0 1 1"
      {...props}
    >
      <defs>
        <path
          id="_logomark-ring-top"
          d="m220.89 550.5s-6.07-11.15-8.8-24.46c-2.74-13.3 4.7-27.2 17.22-48.33s126.59-215.41 132.65-226.96c6.07-11.54 20.53-25.04 38.34-25.04s29.16 11.35 42.46 35.02 132.46 224.41 136.76 232.04 13.89 19.37 5.48 52.43c10.57 16.24 63.98-65.35 63.98-65.35l-25.7-67.04-8.22-13.43-119.47-203.86s-32.23-54.65-95.29-54.65-90.19 43.83-105.84 71.74-122.87 209.35-122.87 209.35l-2.61 5.35s-7.37 27.91-7.17 41.02 9.59 55.57 9.59 55.57l43.63 35.41z"
        />
        <path
          id="_logomark-ring-bottom"
          d="m615.07 399.39s13.83 31.89 9.91 60.94-15.65 42.1-30.78 65.32-64.7 107.22-64.7 107.22-12.39 24-25.43 34.57-28.7 12.39-40.96 12.39-114.78 0-114.78 0-19.43.98-24.33 0c-4.89-.98-17.61-3.91-27.78-13.3s-18.98-23.09-25.43-34.63c-6.46-11.54-51.46-88.07-54.78-92.07s-28.96-23.76-37.17-48.02c-8.22-24.26-15.07-45.39-7.24-69.85-10.76 17.8-32.28 51.65-39.33 68.87-7.04 17.22-14.67 63.59 3.13 94.89 10.37 18.23 43.37 76.61 69.12 122.19 20.52 36.32 59.01 58.78 100.73 58.78h141.82 44.77c40.89 0 78.74-21.58 99.57-56.77l69.71-117.79c21.87-36.95 21.48-82.98-1.02-119.56z"
        />
        <path
          id="_logomark-drop"
          d="m432.31 618.67 60.98-105.63c14.23-24.64-3.56-55.44-32.01-55.44h-121.96c-28.45 0-46.24 30.8-32.01 55.44l60.98 105.63c14.23 24.64 49.79 24.64 64.02 0l60.98-105.63c14.23-24.64-3.56-55.44-32.01-55.44h-121.96c-28.45 0-46.24 30.8-32.01 55.44l60.98 105.63c14.23 24.64 49.79 24.64 64.02 0z"
        />
        <clipPath id="_logomark-clip-ring-bottom">
          <use href="#_logomark-ring-bottom" />
        </clipPath>
        <linearGradient
          id="_logomark-grad-ring-top"
          gradientUnits="userSpaceOnUse"
          x1="210.7189"
          x2="590.8203"
          y1="350.0869"
          y2="350.0869"
        >
          <stop offset="0" stopColor="#bda2f2" />
          <stop offset=".4925" stopColor="#86a4fa" />
          <stop offset=".731" stopColor="#8f8df6" />
          <stop offset=".9447" stopColor="#967cf3" />
        </linearGradient>
        <linearGradient
          id="_logomark-grad-ring-bottom"
          gradientUnits="userSpaceOnUse"
          x1="147.3275"
          x2="666.8901"
          y1="583.0435"
          y2="583.0435"
        >
          <stop offset="0" stopColor="#c9b5ee" />
          <stop offset="1" stopColor="#6a50f3" />
        </linearGradient>
        <linearGradient
          id="_logomark-grad-shade"
          gradientUnits="userSpaceOnUse"
          x1="163.6442"
          x2="234.6008"
          y1="443.1305"
          y2="550.3479"
        >
          <stop offset="0" stopColor="#b194f2" />
          <stop offset="1" stopColor="#7c68e3" />
        </linearGradient>
        <linearGradient
          id="_logomark-grad-drop"
          gradientUnits="userSpaceOnUse"
          x1="308.3956"
          x2="463.7435"
          y1="486.0213"
          y2="563.8908"
        >
          <stop offset="0" stopColor="#c090f2" />
          <stop offset=".1818" stopColor="#aa81ef" />
          <stop offset=".5355" stopColor="#8569eb" />
          <stop offset=".8208" stopColor="#6d5ae8" />
          <stop offset="1" stopColor="#6554e7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// The icon artwork in Icon-lowres.svg coordinates (bbox 123.95 140.45 553.8 626.26)
function LogomarkPaths() {
  return (
    <>
      <use fill="url(#_logomark-grad-ring-top)" href="#_logomark-ring-top" />
      <use
        fill="url(#_logomark-grad-ring-bottom)"
        href="#_logomark-ring-bottom"
      />
      <path
        clipPath="url(#_logomark-clip-ring-bottom)"
        fill="url(#_logomark-grad-shade)"
        d="m164.02 428.09c-3.11 7.5-8.07 22.41-6.13 41.22.35 3.35 1.96 16.98 10.17 32.28 5.96 11.1 13.56 18.68 28.76 33.85 10.76 10.74 13.3 12.1 22.7 21.52 11.77 11.81 20.4 22.33 25.83 29.35l1.57-46.37-53.02-92.74-15.07-33.46z"
      />
      <use fill="url(#_logomark-grad-drop)" href="#_logomark-drop" />
    </>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="123.95 140.45 553.8 626.26" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

// Icon + "Inkdrop" wordmark (New Zen SemiBold outlines from inkdrop-text.svg).
// The wordmark inherits `fill`, so color it via CSS (e.g. fill-slate-700).
export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 265 78" {...props}>
      <g transform="translate(-15.438 -17.493) scale(.12455)">
        <LogomarkPaths />
      </g>
      <g transform="translate(89.11 12.49) scale(1.8903)">
        <path
          transform="translate(-1.349 21.223) scale(.027)"
          d="M206-57V-645C206-684 181-707 146-707 112-707 87-684 87-645V-57C87-17 112 5 146 5 181 5 206-17 206-57Z"
        />
        <path
          transform="translate(6.427 21.223) scale(.027)"
          d="M515-59V-356C515-469 438-538 348-538 280-538 226-508 182-460L189-473C189-507 165-532 131-532 97-532 74-507 74-468V-59C74-20 97 5 131 5 165 5 189-20 189-59V-396C218-417 253-432 293-432 365-432 400-381 400-306V-59C400-20 424 5 458 5 492 5 515-20 515-59Z"
        />
        <path
          transform="translate(22.222 21.223) scale(.027)"
          d="M190-59V-183L257-242 391-36C409-10 422 4 451 4 481 4 505-21 505-50 505-69 496-82 484-98L330-307 470-430C485-444 496-460 496-480 496-510 477-532 445-532 423-532 408-521 394-507L190-302V-686C190-724 167-749 132-749 99-749 75-724 75-686V-59C75-21 99 5 132 5 167 5 190-21 190-59Z"
        />
        <path
          transform="translate(36.37 21.223) scale(.027)"
          d="M522-59V-686C522-724 498-749 464-749 431-749 407-724 407-686V-508C391-517 356-534 297-534 165-534 49-428 49-235 49-115 118 10 259 10 309 10 362-13 411-78V-48C411-16 436 5 464 5 498 5 522-20 522-59ZM162-262C162-330 181-388 207-420 225-431 248-438 279-438 336-438 376-419 407-383V-206C407-137 348-90 288-90 206-90 162-165 162-262Z"
        />
        <path
          transform="translate(52.489 21.223) scale(.027)"
          d="M378-477C378-503 366-523 341-529 327-533 318-532 317-532 269-532 221-497 184-443V-479C184-505 167-532 131-532 97-532 74-507 74-468V-59C74-20 97 5 131 5 165 5 189-20 189-59V-356C234-409 272-426 319-425 357-425 378-444 378-477Z"
        />
        <path
          transform="translate(62.587 21.223) scale(.027)"
          d="M525-279C525-435 441-538 287-538 143-538 50-423 50-251 50-89 139 11 287 11 426 11 525-93 525-279ZM161-268C161-341 185-404 207-427 222-434 243-439 266-439 331-439 414-406 414-259 414-185 388-119 365-99 349-92 326-88 310-88 240-88 161-121 161-268Z"
        />
        <path
          transform="translate(78.112 21.223) scale(.027)"
          d="M556-294C556-419 489-538 345-538 286-538 225-505 185-454V-475C185-512 160-532 131-532 98-532 75-507 75-468V152C75 191 99 216 132 216 166 216 190 191 190 152V-7C223 6 257 11 295 11 461 11 556-118 556-294ZM189-133V-377C216-406 259-437 313-437 391-437 441-369 441-266 441-185 422-135 404-112 387-97 355-81 320-81 262-81 218-103 189-133Z"
        />
      </g>
    </svg>
  )
}
